import { log } from "console";
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
const verifierBodyEstRemplie = (body, bodyDesire) => {
  let erreurs = [];
  for (const clee of Object.keys(bodyDesire)) {
    if (!(clee in body)) {
      logger.info("Il manque une entree dans le body");
      erreurs.push(clee);
    }
    if (body[clee] === undefined || body[clee] === null || body[clee] === "") {
      logger.info("Il manque une valeur dans le body");
      erreurs.push(clee);
    }
  }
  return erreurs;
};

const verifierTypeValeurs = (body, bodyDesire) => {
  const clees = Object.keys(bodyDesire);
  let erreurs = [];

  for (const clee of clees) {
    if (!(clee in body)) {
      logger.info(`Le body doit contenir : ${clee}`);
      erreurs.push(clee);
    }
    if (typeof body[clee] !== typeof bodyDesire[clee]) {
      logger.info(`${clee} doit etre du bon type`);
      erreurs.push(clee);
    }
  }
  return erreurs;
};
const verifierCasSpeciaux = (body, casSpeciaux) => {
  return casSpeciaux ? casSpeciaux(body) : [];
};
export const verifierBody = (body, bodyDesire, casSpeciaux) => {
  const erreursDeNull = verifierBodyEstRemplie(body, bodyDesire);
  const erreursTypeValeurs = verifierTypeValeurs(body, bodyDesire);
  const erreursCasSpeciaux = verifierCasSpeciaux(body, casSpeciaux);
  if (!erreursDeNull && !erreursTypeValeurs && !erreursCasSpeciaux) {
    return [];
  }
  return [erreursDeNull, erreursTypeValeurs, erreursCasSpeciaux];
};
