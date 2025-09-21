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
router.put("/", async (req, res) => {
  try {
    const { mot_de_passe, courriel } = req.body;

    const [compte] = await client.query(
      "SELECT id_utilisateur, compte_est_actif FROM utilisateur WHERE courriel = ?",
      [courriel]
    );
    const salt = bcrypt.genSaltSync(10);
    const mot_de_passe_hash = await bcrypt.hash(mot_de_passe, salt);
    logger.info(`Le compte : ${compte[0]}`);
    if (compte.length <= 0) {
      logger.info("Utilisateur inexistant!");
      return res.status(404).json({
        message: "Votre compte est inexistant, contactez votre administrateur",
      });
    }
    logger.info(JSON.stringify(compte[0]));
    if (compte[0].estActif === 1) {
      logger.info("Compte déjà actif");
      return res.status(400).json({
        message: "Votre compte à déjà été activé, veuillez vous connecter",
      });
    }
    await client.query(
      "UPDATE utilisateur SET compte_est_actif = 1, mot_de_passe = ? WHERE id_utilisateur = ?",
      [mot_de_passe_hash, compte[0].id_utilisateur]
    );

    req.session.authenticated = true;
    req.session.user = {
      courriel,
      
    };
    logger.info(`Session active : ${JSON.stringify(req.session.user)}`);
    return res
      .status(200)
      .json({ message: "Votre compte à été activé avec succès!" });
  } catch (error) {
    logger.error(`Erreur lors de l'inscription ${error}`);
    return res.status(500).json({
      message: "Erreur de serveur, contactez l'équipe de developpement",
    });
  }
});
export default router;
