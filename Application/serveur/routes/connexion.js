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
    const sessionId = req.session.user
      ? req.session.user
      : req.headers.cookie.split("=")[1];
    const [sessionUtilisateur] = await client.query(
      "SELECT preferences_utilisateur,session_token, date_expiration FROM session_utilisateur WHERE session_token = ?",
      [sessionId]
    );

    if (sessionUtilisateur.length > 0) {
      logger.info(`Session inexistante`);
      return res.status(404).json({ message: "Session inexistante" });
    }

    // const date_expiration = sessionUtilisateur[0].date_expiration.replace(
    //   " ",
    //   "T"
    // );
    // const date_expiration_js = new Date(date_expiration);
    // logger.info(`Date expiration du cookie ${date_expiration_js}`);
    logger.info("Je suis connecte");
    return res.status(200).json({ message: "Je suis connecte!" });
  } catch (error) {
    logger.error(`Erreur lors de la verification de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
//Gere la connexion de l'utilisateur ainsi que la creation de sa session
router.post("/", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const { nom_utilisateur, mot_de_passe } = req.body;
    const [utilisateur] = await client.query(
      "SELECT id_utilisateur,nom_utilisateur, mot_de_passe FROM utilisateur WHERE  nom_utilisateur = ?",
      [nom_utilisateur]
    );

    if (!utilisateur.length > 0) {
      return res.status(404).json({ message: "Le compte est inexistant" });
    }

    const motDePasseEstValide = bcrypt.compare(
      mot_de_passe.trim(),
      utilisateur[0].mot_de_passe.trim()
    );

    if (!motDePasseEstValide) {
      return res.status(401).json({ message: "Mot de passe invalide" });
    }
    req.session.authenticated = true;

    const sessionId = req.sessionID.split(".")[0];
    const sessionIdInjectable = sessionId.slice(4);
    const preferences_utilisateur = "";
    const dateCreation = CreerHeureFormatte(1);
    const dateExpiration = CreerHeureFormatte(2);
    logger.info(`Date formatte : ${dateExpiration}`);
    await client.query(
      "INSERT INTO session_utilisateur(id_utilisateur,session_token,preferences_utilisateur,date_creation,date_expiration) VALUES(?,?,?,?,?)",
      [
        utilisateur[0].id_utilisateur,
        sessionIdInjectable,
        preferences_utilisateur,
        dateCreation,
        dateExpiration,
      ]
    );
    req.session.authenticated = true;
    req.session.user = sessionId;
    res.status(200).json(sessionId);
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({ message: "Erreur lors de la connexion" });
  }
});
function CreerHeureFormatte(choix) {
  const heureActuelleNonFormatte = new Date();
  var heure;
  if (choix === 1) {
    heure = heureActuelleNonFormatte.getHours();
  } else {
    heure = heureActuelleNonFormatte.getHours();
  }
  const dateExpirationFormate = `${heureActuelleNonFormatte.getFullYear()}-${formatterComposantesDate(
    heureActuelleNonFormatte.getMonth()
  )}-${formatterComposantesDate(
    heureActuelleNonFormatte.getDate()
  )} ${formatterComposantesDate(heure)}:${formatterComposantesDate(
    heureActuelleNonFormatte.getMinutes()
  )}:${formatterComposantesDate(heureActuelleNonFormatte.getSeconds())}`;
  return dateExpirationFormate;
}

function formatterComposantesDate(chiffre) {
  chiffre = chiffre.toString();
  if (chiffre.length < 2) {
    return (chiffre = `0${chiffre}`);
  }
  return chiffre;
}
export default router;
