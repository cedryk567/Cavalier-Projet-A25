import connexion from "../connexion/connexion.js";
import express from "express";
import winston from "winston";
import client from "../connexion/connexion.js";
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
router.get("/verifierCookies", async (req, res) => {
  if (!req.session) {
    return res.status(401).json({ message: "utilisateur non connecte" });
  }
});
router.post("/connexion", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const { nom_utilisateur, mot_de_passe } = req.body;
    const [credentials] = await client.query(
      "SELECT nom_utilisateur, mot_de_passe FROM utilisateur WHERE  nom_utilisateur = ? AND mot_de_passe = ?",
      [nom_utilisateur, mot_de_passe]
    );
    if (credentials.length > 0) {
      logger.info(`Credentials : ${credentials[0]}`);
    }
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
export default router;
