import mysql from "mysql2/promise";
import winston from "winston";
import { config } from "dotenv";
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
var connexion;
config();
try {
  connexion = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_DB_PORT,
  });

  logger.info("Connexion à la BD Mysql...");
  await connexion.connect();
  logger.info("Connecté à la BD Mysql !");
} catch (err) {
  if (err instanceof AggregateError) {
    console.error("Plusieurs erreurs détectées :");
    for (const error of err.errors) {
      console.error(`- Erreur: ${error.message}`);
    }
  } else {
    console.error(`Erreur unique :`);
    if (err.code === "ER_ACCESS_DENIED_ERROR") {
      logger.error(
        "l'utilisateur est inexistant : reculez dans le dossier Serveur"
      );
    }
  }
  process.exit(1);
}
export default connexion;
