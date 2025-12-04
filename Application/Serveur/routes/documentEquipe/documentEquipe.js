import express from "express";
import winston from "winston";
import mongoClient from "../../bd/mongoDB.js";
import multer from "multer";
import { ObjectId } from "mongodb";
const upload = multer();

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "server.log" }),
  ],
});

const router = express.Router();

// Fonction pour se connecter à la collection MongoDB
async function ConnexionDocumentCollection() {
  try {
    const collection = await mongoClient
      .db("MongoCavalier")
      .collection("Documents");
    return collection;
  } catch (err) {
    logger.error("Erreur lors de l'accès à la collection MongoDB: ", err);
    throw new Error("Erreur lors de l'accès à la collection MongoDB");
  }
}

async function ConnexionEquipeDocumentCollection() {
  try {
    const collection = await mongoClient
      .db("MongoCavalier")
      .collection("EquipeDocuments");
    return collection;
  } catch (err) {
    logger.error("Erreur lors de l'accès à la collection MongoDB: ", err);
    throw new Error("Erreur lors de l'accès à la collection MongoDB");
  }
}

router.get("/", async (req, res) => {
  try {
    const collection = await ConnexionDocumentCollection();

    const documents = await collection.find({}).toArray();
    logger.info(`Documents récupéré: ${documents.length}`);
    res.status(200).json(documents);
  } catch (err) {
    logger.error("Erreur lors de la récupération des documents", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.get("/:idEquipe", async (req, res) => {
  try {
    const idEquipe = req.params.idEquipe;
    logger.info("Les documents de l'équipe seront récupéré", idEquipe);

    const collectionEquipeDocument = await ConnexionEquipeDocumentCollection();
    const collectionDocument = await ConnexionDocumentCollection();

    const equipe = await collectionEquipeDocument.findOne({
      idEquipe: idEquipe,
    });

    if (!equipe) {
      logger.error("Equipe non trouvée");
      return res.status(404).json({ message: "Equipe non trouvée" });
    }

    logger.info("id de l'équipe rechercher:", equipe.idEquipe);
    const ids =
      equipe.documentsIds?.map((id) => new ObjectId(id.idDocument)) || [];
    logger.info("id des documents qu'on cherche:", ids);

    const document = await collectionDocument
      .find({
        _id: { $in: ids },
      })
      .toArray();

    logger.info(`Documents récupéré: ${document.length}`);
    res.status(200).json(document);
  } catch (err) {
    logger.error(
      "Erreur lors de la récupération des documents de l'équipe",
      err
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.post(
  "/ajouterDocument/:idEquipe",
  upload.single("file"),
  async (req, res) => {
    try {
      const idEquipe = req.params.idEquipe;
      const file = req.file;
      const nomDocument = req.body.nom || file.originalname;
      logger.info("Les documents de l'équipe seront récupéré", idEquipe);

      if (!file) {
        logger.error("Aucun fichier recu");
        return res.status(400).json({ message: "Aucun fichier recu" });
      }

      const collectionEquipeDocument =
        await ConnexionEquipeDocumentCollection();
      const collectionDocument = await ConnexionDocumentCollection();

      const equipe = await collectionEquipeDocument.findOne({ idEquipe });
      if (!equipe) {
        logger.error("Équipe non trouvée");
        return res.status(404).json({ message: "Équipe non trouvée" });
      }

      const base64Doc = file.buffer.toString("base64");
      //pour que ca soit en MB
      const tailleMB = file.size / (1024 * 1024).toFixed(2);

      const result = await collectionDocument.insertOne({
        nom: nomDocument,
        type: file.mimetype,
        contenu: { $binary: base64Doc },
        taille: tailleMB,
        equipeId: idEquipe,
        date: new Date().toISOString(),
      });

      const insertId = result.insertedId.toString();
      logger.info("Nouveau document ID:", insertId);

      await collectionEquipeDocument.updateOne(
        { idEquipe },
        { $push: { documentsIds: { idDocument: insertId } } }
      );

      logger.info("Document créé et ajouté à l'équipe");
      return res.status(200).json({
        message: "Document créé et ajouté à l'équipe",
        idDocument: insertId,
      });
    } catch (err) {
      logger.error("Erreur lors de l'ajout d'un documents à l'équipe", err);
      res.status(500).json({ message: "Erreur du serveur" });
    }
  }
);

router.put(
  "/modifierDocument/:idDocument",
  upload.single("file"),
  async (req, res) => {
    try {
      const idDocument = req.params.idDocument;
      const file = req.file;
      const nom = req.body.nom || file.originalname;

      const collectionDocument = await ConnexionDocumentCollection();

      const document = await collectionDocument.findOne({
        _id: new ObjectId(idDocument),
      });
      if (!document) {
        logger.error("Document non trouvée");
        return res.status(404).json({ message: "document non trouvée" });
      }

      const updateDate = {};
      if (nom) {
        updateDate.nom = nom;
      }
      if (file) {
        updateDate.type = file.mimetype;
        updateDate.contenu = { $binary: file.buffer.toString("base64") };
        updateDate.taille = +(file.size / (1024 * 1024)).toFixed(2);
        updateDate.date = new Date().toISOString();
      }

      await collectionDocument.updateOne(
        { _id: new ObjectId(idDocument) },
        { $set: updateDate }
      );

      logger.info("Document mis à jour avec succès");
      res.status(200).json({ message: "Document mis à jour avec succès" });
    } catch (err) {
      logger.error("Erreur lors de la modification d'un document", err);
      res.status(500).json({ message: "Erreur du serveur" });
    }
  }
);

router.delete("/supprimerDocument/:idEquipe/:idDocument", async (req, res) => {
  try {
    const { idEquipe, idDocument } = req.params;
    logger.info("Les documents de l'équipe seront récupéré", idEquipe);

    const collectionEquipeDocument = await ConnexionEquipeDocumentCollection();
    const collectionDocument = await ConnexionDocumentCollection();

    const equipe = await collectionEquipeDocument.findOne({ idEquipe });
    if (!equipe) {
      logger.error("Équipe non trouvée");
      return res.status(404).json({ message: "Équipe non trouvée" });
    }

    const document = await collectionDocument.findOne({
      _id: new ObjectId(idDocument),
    });
    if (!document) {
      logger.error("Document non trouvée");
      return res.status(404).json({ message: "document non trouvée" });
    }

    //supprime le document dans l'équipe
    await collectionEquipeDocument.updateOne(
      { idEquipe },
      { $pull: { documentsIds: { idDocument: idDocument } } }
    );

    //supprimer un document
    await collectionDocument.deleteOne({ _id: new ObjectId(idDocument) });

    logger.info("Document supprimé avec succès");
    return res.status(200).json({ message: "Document supprimé avec succès" });
  } catch (err) {
    logger.error(
      "Erreur lors de l'opération pour supprimer d'un documents à l'équipe",
      err
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.get("/telecharger/:idDocument", async (req, res) => {
  try {
    const idDocument = req.params.idDocument

    const collectionDocument = await ConnexionDocumentCollection();

    const document = await collectionDocument.findOne({ _id: new ObjectId(idDocument)})
     if (!document) {
        logger.error("Document non trouvée");
        return res.status(404).json({ message: "document non trouvée" });
      }

      const documentBuffer = Buffer.from(document.contenu.$binary || document.contenu, "base64");

      res.setHeader("Content-Type", document.type);
      res.setHeader("Content-Disposition", `attachment; filename="${document.nom}"`);

      logger.info("Document télécharger", idDocument);
      res.send(documentBuffer)
  } catch (err) {
    logger.error("Erreur lors du téléchargement du document", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

export default router;
