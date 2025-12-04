import express from "express";
import winston from "winston";
import mongoClient from "../../bd/mongoDB.js";
import { pipeline } from "stream";

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
    res.status(200).json(documents)
  } catch (err) {
    logger.error("Erreur lors de la récupération des documents", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

router.get("/:idEquipe", async (req, res) => {
  try {
    const idEquipe = req.params.idEquipe;
    console.log("Les documents de l'équipe seront récupéré", idEquipe)

    const collectionEquipeDocument = await ConnexionEquipeDocumentCollection();
    const collectionDocument = await ConnexionDocumentCollection();

    const equipe = await collectionEquipeDocument.collection().find({
      idEquipe: idEquipe
    });

    if(!equipe){
      return res.status(404).json({message: "Equipe non trouvée"})
    }

    const ids = equipe.documentsIds.map(id => id.idDocument);

    const document = await collectionDocument.collection().find({
      _id: {$in: ids}
    }).toArray();

    logger.info(`Documents récupéré: ${document.length}`);
    res.status(200).json(document)
  } catch (err) {
    logger.error("Erreur lors de la récupération des documents de l'équipe", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
})

export default router;
