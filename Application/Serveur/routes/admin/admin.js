import express from "express";
import winston from "winston";
import client from "../../bd/mysql.js";
import bcrypt from "bcrypt";
import session from "express-session";
import verifierBodyUpdateUtilisateur from "../../methodes/veriferBody/verifierBodyAdmin/verifierBodyUpdateUtilisateur.js";
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

router.post("/creationCompte", async (req, res) => {
  try {
    console.log(req.session.user);
    // if (!req.session.authenticated) {
    //   return res.status(401).json({ message: "Non connecte" });
    // }
    // if (!req.user.type_utilisateur !== "admin") {
    //   logger.info(`Utilisateur non autorise`);
    //   return res.status(401).json({
    //     message: "Vous n'avez pas l'autorisation de poursuivre cette action",
    //   });
    // }
    const { nom_utilisateur, type_utilisateur, courriel, mot_de_passe } =
      req.body;
    const salt = bcrypt.genSaltSync(10);
    const mot_de_passe_hash = await bcrypt.hash(mot_de_passe, salt);
    await client.query(
      "INSERT INTO utilisateur(nom_utilisateur,type_utilisateur,courriel,mot_de_passe) VALUES (?,?,?,?)",
      [nom_utilisateur, type_utilisateur, courriel, mot_de_passe_hash]
    );
    logger.info("Utilisateur insere avec succes!");
    return res.status(200).json({ message: "Utilisateur insere avec succes!" });
  } catch (error) {
    logger.error(`Erreur lors de la creation du compte utilisateur : ${error}`);
    return res
      .status(500)
      .json({ message: "Erreur lors de la creation du compte" });
  }
});
router.get("/retournerUtilisateurs", async (req, res) => {
  try {
    logger.info(`Fetch des utilisateurs en cours...`);
    const resultat = await client.query(
      "SELECT id_utilisateur,nom_utilisateur,compte_est_actif,type_utilisateur,courriel FROM utilisateur;"
    );
    logger.info(`Fetch reussi`);
    return res.status(200).json({ users: resultat[0] });
  } catch (err) {
    logger.error(`Erreur lors du fetch des utilisateurs : ${err}`);
    return res
      .status(500)
      .json({ message: `Erreur lors du fetch des utilisateurs` });
  }
});
router.put("/updateUtilisateur", async (req, res) => {
  try {
    // if (!req.session.authenticated) {
    //   return res.status(401).json({ message: "Non connecte" });
    // }
    // if (!req.user.type_utilisateur !== "admin") {
    //   logger.info(`Utilisateur non autorise`);
    //   return res.status(401).json({
    //     message: "Vous n'avez pas l'autorisation de poursuivre cette action",
    //   });
    // }
    logger.info("Update de l'utilisateur en cours...");
    const erreurs = verifierBodyUpdateUtilisateur(req.body);
    if (erreurs.length !== 0) {
      logger.error("Erreur presente dans le form : rejet de la requete");
      return res
        .status(422)
        .json({ message: "Erreur presente dans le form", erreurs });
    }
    const {
      nom_utilisateur,
      type_utilisateur,
      courriel,
      mot_de_passe,
      id_utilisateur,
    } = req.body;

    const resultat = await client.query(
      "UPDATE utilisateur SET nom_utilisateur = ?,type_utilisateur = ?,courriel = ?,mot_de_passe = ? WHERE id_utilisateur = ? ",
      [
        nom_utilisateur,
        type_utilisateur,
        courriel,
        mot_de_passe,
        id_utilisateur,
      ]
    );
    if (resultat.length === 0) {
      logger.error("Utilisateur inexistant");
      return res
        .status(404)
        .json({ message: "Cette utilisateur est inexistant" });
    }
    console.log("Utilisateur mis a jour avec succes!");
    return res
      .status(200)
      .json({ message: "Utilisateur mis a jour avec succes!" });
  } catch (err) {
    logger.error(`Erreur lors de l'update de l'utilisateur ${err}`);
    return res.status(500).json({
      message:
        "Erreur cote serveur, veuillez contacter l'équipe de développement",
    });
  }
});
export default router;
