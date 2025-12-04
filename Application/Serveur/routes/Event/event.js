import express from "express";
import winston from "winston";
import mongoClient from "../../bd/mongoDB.js";

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
async function ConnexionEventCollection() {
  try {
    const collection = await mongoClient
      .db("MongoCavalier")
      .collection("Events");
    return collection;
  } catch (err) {
    logger.error("Erreur lors de l'accès à la collection MongoDB: ", err);
    throw new Error("Erreur lors de l'accès à la collection MongoDB");
  }
}

//Get all Event
router.get("/", async (req, res) => {
  try {
    const collection = await ConnexionEventCollection();

    const events = await collection.find({}).toArray();
    logger.info(`Events récupéré: ${events.length}`);
    res.status(200).json(events);
  } catch (err) {
    logger.error("Erreur lors de la récupération des Events", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

//Get all event selon l'équipe
router.get("/:idEquipe", async (req, res) => {
  try {
    const idEquipe = req.params.idEquipe;
    if (!idEquipe) {
      logger.error("Aucun Id d'équipe recue");
      return res.status(404).json({ message: "Aucun Id d'équipe recue" });
    }
    logger.info("Récupération des events de l'équipe:", idEquipe);

    const collectionEvent = await ConnexionEventCollection();

    const events = await collectionEvent.find({ idEquipe: idEquipe }).toArray();

    if (events.length === 0) {
      logger.info("Aucun évènement trouvé pour cette équipe");
      return res
        .status(404)
        .json({ message: "Aucun évènement trouvé pour cette équipe" });
    }

    logger.info(`Events récupéré: ${events.length}`);
    res.status(200).json(events);
  } catch (err) {
    logger.error(
      "Erreur lors de la récupération des Events selon l'équipe",
      err
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

//Post Ajouter un event selon une equipe
router.post("/ajouterEvent", async (req, res) => {
  try {
    const { nom, description, debutEvent, finEvent, idEquipe } = req.body;

    if (!nom || !description || !debutEvent || !finEvent || !idEquipe) {
      logger.error("Donnees manquantes");
      return res.status(400).json({ message: "Donnees manquantes" });
    }
    logger.info("Ajout d'un event dans l'équipe:", idEquipe);

    const collectionEvent = await ConnexionEventCollection();

    const nouvelEvent = {
      nom,
      description,
      debutEvent,
      finEvent,
      idEquipe,
    };

    const result = await collectionEvent.insertOne(nouvelEvent);

    logger.info("Évènement ajouté avec succès");
    return res.status(200).json({
      message: "Évènement ajouté avec succès",
      idEvent: result.insertedId.toString(),
    });
  } catch (err) {
    logger.error("Erreur lors de l'ajout des Events", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

//Delete supprimer un event 
router.delete("supprimerEvent/:idEvent", async (req, res) => {
  try {
    const idEvent = req.params.idEvent;
    if (!idEvent) {
      logger.error("Aucun id d'event recu");
      return res.status(400).json({ message: "Aucun id d'event recu" });
    }

    const collectionEvent = await ConnexionEventCollection();

    const event = await collectionEvent.findOne({ _id: new Object(idEvent) });
    if (!event) {
      logger.error("Aucun event trouvé");
      return res.status(400).json({ message: "Aucun event trouvé" });
    }

    await collectionEvent.deleteOne({ _id: new ObjectId(idEvent) });

    logger.info("Event supprimé avec succès");
    res.status(200).json({ message: "Event supprimé avec succès" });
  } catch (err) {
    logger.error("Erreur lors de l'action pour supprimer un Event", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

export default router;
