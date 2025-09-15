import express from "express";
import winston from "winston";
import client from "../connexion/connexion.js";
import bcrypt from "bcrypt"
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
router.post("/inscription", async (req,res) =>{
const {mot_de_passe} = req.body;
const salt = bcrypt.genSaltSync(10);
const mot_de_passe_hash = await bcrypt.hash(mot_de_passe, salt);
await client.query()
})
export default router;
