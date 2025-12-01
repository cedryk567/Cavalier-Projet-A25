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

// Fonction pour se connecter a MongoDB
async function ConnexionCollection() {
  try {
    const collection = await mongoClient
      .db("MongoCavalier")
      .collection("Statistiques");
    return collection;
  } catch (err) {
    logger.error("Erreur lors de l'accès à la collection MongoDB: ", err);
    throw new Error("Erreur lors de l'accès à la collection MongoDB");
  }
}

router.get("/", async (res, res) => {
  try {
    const collection = await ConnexionCollection();

    const statistiques = await collection.find({}).toArray();
    logger.info(`Statistiques recupere: ${statistiques.length}`);
    res.status(200).json(statistiques);
  } catch (err) {
    logger.error("Erreur lors de la récupération des Events", err);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});
