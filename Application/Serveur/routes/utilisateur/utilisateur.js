import nodemailer from "nodemailer";
import express from "express";
import winston from "winston";
import oAuth2Client from "../../api/oAuth2Client.js";
import {
  verifierBodyConnexion,
  verifierBodyActivationCompte,
  verifierBodyDemanderMotDePasseTemporaire,
  veriferBodyMettreUtilisateurDansEquipe,
} from "../../methodes/veriferBody/verifierBodyUtilisateur/verifierBodyRouteUtilisateur.js";
import client from "../../bd/mysql.js";
import bcrypt from "bcrypt";
import { encrypterMotDePasse } from "../../methodes/boiteOutil/encrypterMotDePass.js";
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
router.get("/verifierCourriel/:courriel", async (req, res) => {
  const body = req.params;
  const erreurs = verifierBodyDemanderMotDePasseTemporaire(body);
  for (let i = 0; i < erreurs.length; i++) {
    if (erreurs[i].length !== 0) {
      return res.status(422).json({
        message: "Erreur presente dans le form",
        erreurs,
        estEnChargement: false,
        requeteEstReussi: false,
      });
    }
  }
  const verification = await client.query(
    "SELECT id_utilisateur FROM utilisateur WHERE courriel = ?",
    [body]
  );
  if (verification.length === 0) {
    logger.info("Compte inexistant");
    return res.status(404).json({
      message: "Votre compte est inexistant",
      erreurs,
      formEstValide: true,
      estEnChargement: false,
      requeteEstReussi: false,
    });
  }
  return res.status(200).json({
    message: "Requete valide!",
    formEstValide: true,
    estEnChargement: false,
    requeteEstReussi: false,
  });
});
router.post("/demanderMotDePasseTemporaire/:courriel", async (req, res) => {
  try {
    const { courriel } = req.params;
    const jetonAcces = await oAuth2Client.getAccessToken();
    console.log("Jeton d'acces : ", jetonAcces);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cavaliera25.bdeb@gmail.com",
        clientId: process.env.CLIENT_ID.trim(),
        clientSecret: process.env.CLIENT_SECRET.trim(),
        refreshToken: process.env.REFRESH_TOKEN.trim(),
        accessToken: jetonAcces.token,
      },
    });
    logger.info("Transport créé");
    const mot_de_passe_temporaire = Math.floor(1000 + Math.random() * 9000);
    console.log(courriel);
    const mailOptions = {
      from: "Application Cavalier <cavaliera25.bdeb@gmail.com>",
      to: courriel,
      subject: "Mot de passe temporaire",
      html: `
              <div style="font-family: Arial, sans-serif; background-color: #ffffffff; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #000000ff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <h2 style="color: #ffffffff;">Bonjour !</h2>
                  <p style="color: #ffffffff; font-size: 16px;">
                    Voici votre <strong>mot de passe temporaire</strong> pour l'application Cavalier :
                  </p>
                  <p style="text-align: center; font-size: 24px; font-weight: bold; color: #008006ff; margin: 30px 0;">
                    ${mot_de_passe_temporaire}
                  </p>
                  <p style="color: #ffffffff; font-size: 16px;">
                    Ce mot de passe est valable pour une durée limitée. Pour votre sécurité, ne le partagez avec personne.
                  </p>
                  <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;">
                  <p style="color: #999999; font-size: 12px; text-align: center;">
                    Application Cavalier &copy; 2025
                  </p>
                </div>
              </div>
              `,
    };
    logger.info("Email creer");
    await transport.sendMail(mailOptions);
    console.log(mot_de_passe_temporaire);
    const mot_de_passe_hash = await encrypterMotDePasse(
      mot_de_passe_temporaire.toString()
    );
    const resultat = await client.query(
      `UPDATE utilisateur SET mot_de_passe = ? WHERE courriel = ?`,
      [mot_de_passe_hash, courriel]
    );
    if (resultat.length === 0) {
      return res.status(500).json({
        message: `Erreur lors de la modification du mot de passe temporaire`,
      });
    }

    return res.status(200).json({
      message: `Courriel envoyé à : ${courriel}`,
      estEnChargement: false,
    });
  } catch (error) {
    logger.error(`Erreur lors de l'envoie du email ${error}`);
    return res
      .status(500)
      .json({ message: `Erreur lors de l'envoi du courriel` });
  }
});
router.put("/connexion", async (req, res) => {
  logger.info(`Connexion de l'utilisateur avec l'id : ${req.sessionID}`);
  try {
    const body = req.body;
    var erreurs = verifierBodyConnexion(body);
    if (erreurs.length !== 0) {
      return res.status(422).json({
        erreurs,
      });
    }
    const [utilisateur] = await client.query(
      "SELECT id_utilisateur,nom_utilisateur,type_utilisateur ,mot_de_passe, compte_est_actif,courriel FROM utilisateur WHERE  courriel = ?",
      [body.courriel]
    );

    if (!utilisateur.length > 0) {
      logger.info("Le compte est inexistant");
      return res.status(404).json({
        message: "Mauvais mot de passe ou courriel",
        erreurs,
        estEnChargement: false,
      });
    }
    if (!utilisateur[0].compte_est_actif) {
      logger.info("Le compte est inactif");
      return res.status(401).json({
        message: "Le compte est inactif, veuillez l'activer",
        erreurs,
      });
    }
    console.log(body.mot_de_passe);
    console.log(utilisateur[0].mot_de_passe);
    const motDePasseEstValide = await bcrypt.compare(
      body.mot_de_passe.trim(),
      utilisateur[0].mot_de_passe.trim()
    );

    if (!motDePasseEstValide) {
      logger.info("Mauvais mot de passe");
      return res.status(401).json({
        message: "Mauvais mot de passe ou courriel",
        erreurs,
      });
    }
    const sportsUtilisateur = await fetchSportsEquipesUtilisateurParId(
      utilisateur[0].id_utilisateur
    );
    req.session.user = {
      sportsUtilisateur,
      type_utilisateur: utilisateur[0].type_utilisateur,
      nom_utilisateur: utilisateur[0].nom_utilisateur,
      courriel: utilisateur[0].courriel,
    };
    logger.info("Connexion reussi!");
    req.session.authenticated = true;
    res.status(200).json({
      message: "connecte",
      erreurs,
      estEnChargement: false,
    });
  } catch (error) {
    logger.error(`Erreur lors de la connexion : ${error}`);
    return res.status(500).json({
      message:
        "Erreur de serveur lors de la connexion, contactez l'equipe de developpement",
    });
  }
});
router.delete("/deconnexion", async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(404).json({ message: "Session inexistante" });
    }
    logger.info(`Deconnexion en cours...`);
    req.session.destroy();
    logger.info(`Deconnexion reussi!`);
    res.status(200).json({ message: "Deconnexion reussi!" });
  } catch (error) {
    logger.error(`Erreur lors de la deconnexion : ${error}`);
    res.status(500).json({ message: "Erreur lors de la deconnexion" });
  }
});
router.put("/activationCompte", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const erreurs = verifierBodyActivationCompte(body);
    if (erreurEstPresente(erreurs)) {
      return res.status(422).json({
        erreurs,
        estEnChargement: false,
      });
    }
    const [compte] = await client.query(
      "SELECT nom_utilisateur,type_utilisateur, id_utilisateur, compte_est_actif, mot_de_passe FROM utilisateur WHERE courriel = ?",
      [body.courriel]
    );
    if (compte.length <= 0) {
      logger.info("Utilisateur inexistant!");
      return res.status(404).json({
        message: "Votre compte est inexistant, contactez votre administrateur",
        erreurs,
        estEnChargement: false,
      });
    }
    logger.info(`Le compte : ${JSON.stringify(compte[0])}`);
    if (compte[0].estActif === 1) {
      logger.info("Compte déjà actif");
      return res.status(400).json({
        message: "Votre compte à déjà été activé, veuillez vous connecter",
      });
    }
    const motDePasseEstValide = await bcrypt.compare(
      body.mot_de_passe_temporaire.trim(),
      compte[0].mot_de_passe.trim()
    );
    if (!motDePasseEstValide) {
      logger.error("Le mot de passe est invalide");
      return res.status(401).json({
        message: "Mot de passe invalide",
        erreurs,
        estEnChargement: false,
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const mot_de_passe_hash = await bcrypt.hash(
      body.nouveau_mot_de_passe,
      salt
    );
    logger.info("Creation du hash reussit");
    await client.query(
      "UPDATE utilisateur SET compte_est_actif = 1, mot_de_passe = ? WHERE id_utilisateur = ?",
      [mot_de_passe_hash, compte[0].id_utilisateur]
    );
    const sportsUtilisateur = await fetchSportsEquipesUtilisateurParId(
      compte[0].id_utilisateur
    );
    req.session.authenticated = true;
    req.session.user = {
      sportsUtilisateur,
      type_utilisateur: compte[0].type_utilisateur,
      nom_utilisateur: compte[0].nom_utilisateur,
      courriel: compte[0].courriel,
    };
    logger.info(`Session active : ${JSON.stringify(req.session.user)}`);
    return res.status(200).json({
      message: "Votre compte à été activé avec succès!",
      erreurs,
      estEnChargement: false,
    });
  } catch (error) {
    logger.error(`Erreur lors de l'inscription ${error}`);
    return res.status(500).json({
      message: "Erreur de serveur, contactez l'équipe de developpement",
    });
  }
});
router.get(`/retournerSession`, async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Utilisateur non authentifie!" });
  }

  return res.status(200).json({
    message: "Utilisateur connecte avec succes!",
    donneesUtilisateur: req.session.user,
  });
});
const erreurEstPresente = (erreurs) => {
  for (let i = 0; i < erreurs.length; i++) {
    if (erreurs[i].length !== 0) {
      return true;
    }
  }
  return false;
};

router.get(`/equipe`, async (req, res) => {
  // if (!req.session.user) {
  //   return res.status(401).json({ message: "Utilisateur non authentifie!" });
  // }
  const body = req.body;
  logger.info(`${body}`);
  const id_utilisateur = body.id_utilisateur;
  console.log("**** cherche les id_equipe");
  const [equipe] = await client.query(
    "SELECT id_equipe from utilisateur_equipe where id_utilisateur = ?",
    [id_utilisateur]
  );
  console.log("**** verifie si les id_equipe existent");
  if (equipe.length === 0) {
    return res.status(404).json({ message: "The array is empty" });
  }

  /*Chercher les int dans equipe */
  const ids_equipe = equipe.map((obj) => obj.id_equipe);
  const listeIds = ids_equipe.join(",");
  logger.info("fetch des id_equipes effectue avec succes!");
  console.log(JSON.stringify(equipe));
  console.log("**** cherche les sports selon id_equipe");
  const [equipes] = await client.query(
    "SELECT code_equipe, sport FROM equipe WHERE FIND_IN_SET(id_equipe,?)",
    [listeIds]
  );
  if (equipes.length === 0) {
    return res.status(404).json({ message: "The array is empty" });
  }
  logger.info(
    "fetch code_equipe et sport selon id_equipe effectue avec succes!"
  );
  console.log(JSON.stringify(equipes));

  res.status(200).json({ message: `${JSON.stringify(equipes)}` });
});
router.post("/mettreUtilisateurDansEquipe", async (req, res) => {
  try {
    const body = req.body;
    const erreurs = veriferBodyMettreUtilisateurDansEquipe(body);
    if (erreurs.length !== 0) {
      return res
        .status(422)
        .json({ message: "Erreurs presentes dans le form", erreurs });
    }
    await client.query("INSERT INTO utilisateur_equipe VALUES(?,?,?) ", [
      body.id_coach_equipe,
      body.id_utilisateur,
      body.id_equipe,
    ]);

    logger.info("Utilisateur insere dans l'equipe avec succes!");
    return res
      .status(200)
      .json({ message: "Utilisateur insere dans l'equipe avec succes!" });
  } catch (err) {
    logger.error(
      `Erreur lors de l'insertion de l'utilisateur dans une equipe : ${err}`
    );
    res.status(500).json({
      message: "Erreur lors de l'insertion de l'utilisateur dans une equipe",
    });
  }
});

const fetchSportsEquipesUtilisateurParId = async (id) => {
  try {
    const [resultats] = await client.query(
      "SELECT ue.id_equipe FROM utilisateur_equipe AS ue JOIN utilisateur" +
        " AS u ON ue.id_utilisateur = u.id_utilisateur WHERE u.id_utilisateur = ?",
      [id]
    );
    if (resultats.length <= 0) {
      logger.info("L'utilisateur est dans aucune equipe mate");
      return [];
    }
    var idEquipes = "";
    for (var resultat in resultats) {
      idEquipes.concat(resultat.id_equipe);
    }
    var sports = "";

    //Attention sports est ici un out parameter
    await client.query("call retourner_sports_utilisateur(?)", [idEquipes]);
    logger.info(`Sports de l'utilisateur : ${sports}`);
    var sportsArray = sports.split(",");
    var listeSansDouble = [];
    for (var sport in sportsArray) {
      if (listeSansDouble.some((item) => item !== sport)) {
        listeSansDouble.push(sport);
      }
    }
    return listeSansDouble;
  } catch (err) {
    logger.error(`Erreur lors du fetch des sports de l'utilisateur : ${err}`);
    return "Erreur lors du fetch des sports de l'utilisateur";
  }
};

export default router;
