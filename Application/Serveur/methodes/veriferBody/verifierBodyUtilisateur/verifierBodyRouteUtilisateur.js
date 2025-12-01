import { verifierBody } from "../verifierBody.js";
import { verifierFormatCourriel } from "../verificateursSpeciaux/verifierFormatCourriel.js";
import { regexCourriel } from "../../regex.js";
import winston from "winston";
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
export const verifierBodyDemanderMotDePasseTemporaire = (body) => {
  const bodyDesire = { courriel: "" };
  logger.info(JSON.stringify(body));
  return verifierBody(body, bodyDesire, verifierFormatCourriel);
};
export const verifierBodyConnexion = (body) => {
  const bodyDesire = {
    courriel: "",
    mot_de_passe: "",
  };
  return verifierBody(body, bodyDesire, verifierFormatCourriel);
};
export const verifierBodyActivationCompte = (body) => {
  const bodyDesire = {
    mot_de_passe_temporaire: "",
    nouveau_mot_de_passe: "",
    courriel: "",
  };

  return verifierBody(body, bodyDesire, verifierFormatCourriel);
};
export const veriferBodyMettreUtilisateurDansEquipe = (body) => {
  const bodyDesire = {
    id_equipe: 0,
    id_coach_equipe: 0,

    id_equipe: 0,
  };
  return verifierBody(body, bodyDesire, null);
};
