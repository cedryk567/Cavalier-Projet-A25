process.removeAllListeners("warning");
import { google } from "googleapis";
import { config } from "dotenv";
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
config();
let oAuth2Client;
try {
  logger.info("Connexion a google...");
  oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  logger.info("Connexion a google reussi!");
} catch (error) {
  logger.error(`Erreur lors de la connexion a google : ${error}`);
}

export default oAuth2Client;
