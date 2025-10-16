import client from "../../bd/mysql.js";
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

export const verifierExistanceUtilisateur = async (req, res, next) => {
  const { courriel } = req.params;
  const [verification] = await client.query(
    "SELECT courriel FROM utilisateur WHERE courriel = ?",
    [courriel]
  );
  if (verification.length === 0) {
    logger.info("Compte inexistant");
    return res
      .status(404)
      .json({ message: "Aucun compte compte utilisant ce courriel existe" });
  }
  req.courriel = courriel;
  next();
};
