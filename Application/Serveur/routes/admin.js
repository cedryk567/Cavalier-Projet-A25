import express from "express";
import winston from "winston";
import client from "../bd/mysql.js";
import bcrypt from "bcrypt";
import session from "express-session";
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
          if (!req.user.authenticated) {
    return res.status(401).json({ message: "Non connecte" });
  }
  if (!req.user.type_utilisateur !== "admin") {
    return res.status(401).json({
      message: "Vous n'avez pas l'autorisation de poursuivre cette action",
    });
  }
  const { nom_utilisateur, type_utilisateur, courriel } = req.body;
  await client.query(
    "INSERT INTO utilisateur(nom_utilisateur,type_utilisateur,courriel) VALUES (?,?,?)",
    [nom_utilisateur, type_utilisateur, courriel]
  );
  logger.info("Utilisateur insere avec succes!");
  return res.status(200).json({ message: "Utilisateur insere avec succes!" });

    } catch (error) {
        
    }
);
export default router;
