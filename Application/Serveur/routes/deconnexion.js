import express from "express";
import winston from "winston";
import client from "../bd/mysql.js";
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

router.delete("/", async (req,res) =>{
  try {
    logger.info(`Deconnexion en cours...`);
    req.session.destroy();
    logger.info(`Deconnexion reussi!`)
    res.status(200).json({message : "Deconnexion reussi!"})
  } catch (error) {
    logger.error(`Erreur lors de la deconnexion : ${error}`)
    res.status(500).json({message : "Erreur lors de la deconnexion"});
  }

})

export default router;
