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
config();
const client = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_DB_PORT,
});
try {
  logger.info("Connexion à la BD Mysql...");
  await client.connect();
  logger.info("Connecté à la BD Mysql !");
} catch (err) {
  if (err instanceof AggregateError) {
    console.error("Plusieurs erreurs détectées :");
    for (const error of err.errors) {
      console.error(`- Erreur: ${error.message}`);
    }
  } else {
    console.error(`Erreur unique : ${err}`);
  }
  process.exit(1);
}
export default client;
