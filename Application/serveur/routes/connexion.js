import express from "express";
import winston from "winston";
import client from "../bd/mysql.js";
import bcrypt from "bcrypt";
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
//Gere la connexion de l'utilisateur ainsi que la creation de sa session
router.post("/", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const sessionID = req.sessionID;
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
    const preferences_utilisateur = "";
    const dateCreation = CreerHeureFormatte(1);
    const dateExpiration = CreerHeureFormatte(2);
    logger.info(`Date formatte : ${dateExpiration}`);
    await client.query(
      "INSERT INTO session_utilisateur(id_utilisateur,session_token,preferences_utilisateur,date_creation,date_expiration) VALUES(?,?,?,?,?)",
      [
        utilisateur[0].id_utilisateur,
        sessionID,
        preferences_utilisateur,
        dateCreation,
        dateExpiration,
      ]
    );

    req.session.authenticated = true;
    req.session.user = {
      id_utilisateur: utilisateur[0].id_utilisateur,
    };

    res.status(200).json(sessionID);
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
    heure = heureActuelleNonFormatte.getHours() + 1;
  }
  const dateExpirationFormate = `${heureActuelleNonFormatte.getFullYear()}-${formatterComposantesDate(
    heureActuelleNonFormatte.getMonth()
  )}-${formatterComposantesDate(
    heureActuelleNonFormatte.getDate()
  )} ${formatterComposantesDate(heure)}-${formatterComposantesDate(
    heureActuelleNonFormatte.getMinutes()
  )}-${formatterComposantesDate(heureActuelleNonFormatte.getSeconds())}`;
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
