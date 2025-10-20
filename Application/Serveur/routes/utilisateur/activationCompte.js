import nodemailer from "nodemailer";
import express from "express";
import winston from "winston";
import oAuth2Client from "../../api/oAuth2Client.js";
import { verifierExistanceUtilisateur } from "./helper.js";
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

router.post(
  "/envoyerCourriel/:courriel",
  verifierExistanceUtilisateur,
  async (req, res) => {
    try {
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
        from: "Application Cavalier <cavaliera25.bdeb@gmail.com>",
        to: req.courriel,
        subject: "Mot de passe temporaire",
        html: `
              <div style="font-family: Arial, sans-serif; background-color: #ffffffff; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #000000ff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <h2 style="color: #ffffffff;">Bonjour !</h2>
                  <p style="color: #ffffffff; font-size: 16px;">
                    Voici votre <strong>mot de passe temporaire</strong> pour l'application Cavalier :
                  </p>
                  <p style="text-align: center; font-size: 24px; font-weight: bold; color: #008006ff; margin: 30px 0;">
                    ${codeVerification}
                  </p>
                  <p style="color: #ffffffff; font-size: 16px;">
                    Ce mot de passe est valable pour une durée limitée. Pour votre sécurité, ne le partagez avec personne.
                  </p>
                  <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;">
                  <p style="color: #999999; font-size: 12px; text-align: center;">
                    Application Cavalier &copy; 2025
                  </p>
                </div>
              </div>
              `,
      };
      logger.info("Email creer");
      await transport.sendMail(mailOptions);
      return res.status(200).json({
        message: `Courriel envoyé à : ${req.courriel}`,
      });
    } catch (error) {
      logger.error(`Erreur lors de l'envoie du email ${error}`);
      return res
        .status(500)
        .json({ message: `Erreur lors de l'envoi du courriel` });
    }
  }
);

export default router;
