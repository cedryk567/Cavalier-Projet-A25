import express from "express";
import winston from "winston";
import client from "../bd/mysql.js";
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
router.get("/verifierConnexion", async (req, res) => {
  try {
    logger.log(
      `Personnes ayant une session ouverte : ${JSON.stringify(req.session)}`
    );
    if (!req.session.authenticated) {
      return res.status(401).json({ message: "utilisateur non connecte!" });
    }
    return res.status(200).json({ message: "Je suis connecte!" });
  } catch (error) {
    logger.error(`Erreur lors de la verification de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
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
      req.session.authenticated = true;
      req.session.user = {
        nom_utilisateur,
      };

      res.status(200).json(req.session);
    }
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
export default router;
