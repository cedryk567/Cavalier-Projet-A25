import nodemailer from "nodemailer";
import express from "express";
import winston from "winston";
import oAuth2Client from "../api/oAuth2Client.js";
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
router.put("/envoyerMotDePasseTemporaire", async (req, res) => {
  try {
    const { courriel } = req.body;
    logger.info(courriel);
    const jetonAcces = await oAuth2Client.getAccessToken();
    console.log("Jeton d'acces : ", jetonAcces);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "cavaliera25.bdeb@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: jetonAcces.token,
      },
    });
    logger.info("Transport créé");
    const codeVerification = Math.floor(1000 + Math.random() * 9000);
    const mailOptions = {
      from: "Application Cavalier",
      to: courriel,
      subject: "Mot de passe temporaire",
      html: `Voici votre mot de passe : ${codeVerification} </h1>`,
    };
    logger.info("Email creer");
    await transport.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: `Courriel envoyé à l'adresse courriel : ${courriel}` });
  } catch (error) {
    logger.error(`Erreur lors de l'envoie du email ${error}`);
    return res
      .status(500)
      .json({ message: `Erreur lors de l'envoi du courriel` });
  }
});
export default router;
