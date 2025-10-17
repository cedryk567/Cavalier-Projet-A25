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
//Gere la connexion de l'utilisateur ainsi que la creation de sa session
router.put("/", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const { courriel, mot_de_passe } = req.body;
    const [utilisateur] = await client.query(
      "SELECT id_utilisateur,nom_utilisateur,type_utilisateur ,mot_de_passe, compte_est_actif FROM utilisateur WHERE  courriel = ?",
      [courriel]
    );

    if (!utilisateur.length > 0) {
      logger.info("Le compte est inexistant");
      return res
        .status(404)
        .json({ message: "Mauvais mot de passe ou courriel" });
    }
    if (!utilisateur[0].compte_est_actif) {
      logger.info("Le compte est inactif");
      return res
        .status(401)
        .json({ message: "Le compte est inactif, veuillez l'activer" });
    }

    const motDePasseEstValide = await bcrypt.compare(
      mot_de_passe.trim(),
      utilisateur[0].mot_de_passe.trim()
    );

    if (!motDePasseEstValide) {
      return res
        .status(401)
        .json({ message: "Mauvais mot de passe ou courriel" });
    }

    req.session.user = {
      idSession: req.sessionID,
      type_utilisateur: utilisateur[0].type_utilisateur,
    };

    req.session.authenticated = true;
    res.status(200).json({ message: "connecte", requeteReussi: true });
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
export default router;
