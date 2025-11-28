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
export const verifierFormatCourriel = (body) => {
  const clees = Object.keys(body);
  let valeurRecherche = null;
  for (const clee of clees) {
    if (clee === "courriel") {
      valeurRecherche = body[clee].toLowerCase().match(regexCourriel);
    }
  }
  if (!valeurRecherche) {
    logger.info("Le courriel est dans un mauvais format");
    return ["courriel"];
  }
  return [];
};
