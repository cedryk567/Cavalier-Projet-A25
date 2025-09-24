import express from "express";
import winston from "winston";
import client from "../bd/mysql.js";
import bcrypt from "bcrypt";
import { connect } from "http2";
import { Cookie } from "express-session";
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
    if (!req.session.authenticated) {
      logger.info(`Vous n'etes pas connecte`);
      return res.status(404).json({ message: "Session inexistante" });
    }

    logger.info("Je suis connecte");
    return res.status(200).json({ message: "Je suis connecte!" });
  } catch (error) {
    logger.error(`Erreur lors de la verification de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
//Gere la connexion de l'utilisateur ainsi que la creation de sa session
router.put("/", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const { courriel, mot_de_passe } = req.body;
    const [utilisateur] = await client.query(
      "SELECT id_utilisateur,nom_utilisateur,type_utilisateur, mot_de_passe FROM utilisateur WHERE  courriel = ?",
      [courriel]
    );

    if (!utilisateur.length > 0) {
      logger.info("Utilisateur inexistant");
      return res.status(404).json({ message: "Le compte est inexistant" });
    }
    logger.info(utilisateur[0].mot_de_passe);
    const motDePasseEstValide = await bcrypt.compare(
      mot_de_passe.trim(),
      utilisateur[0].mot_de_passe.trim()
    );

    if (!motDePasseEstValide) {
      logger.info("Mot de passe invalide");
      return res.status(401).json({ message: "Mot de passe invalide" });
    }

    req.session.user = {
      idSession: req.sessionID,
      type_utilisateur: utilisateur[0].type_utilisateur,
    };

    req.session.authenticated = true;
    logger.info("Connecte");
    res.status(200).json({ message: "connecte" });
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
export default router;
