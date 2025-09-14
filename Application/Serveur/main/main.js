import authentification from "../routes/authentification.js";
import express from "express";
import session from "express-session";
import winston from "winston";

const app = express();
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

logger.info("demarrage du serveur");
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 3600000 },
    saveUninitialized: false,
    resave: false,
  })
);
app.use(express.json());
app.use("/authentification", authentification);
app.listen(8080, () => {
  logger.info("Le serveur roule sur l'adresse 8080");
});
