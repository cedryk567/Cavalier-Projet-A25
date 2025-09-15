import connexion from "../routes/connexion.js";
import express from "express";
import session from "express-session";
import winston from "winston";
import inscription from "../routes/inscription.js";
const sessionStore = session.MemoryStore();
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
    store: sessionStore,
  })
);
app.use(express.json());
app.use("/connexion", connexion);
app.use("/inscription", inscription);
app.listen(8080, () => {
  logger.info("Le serveur roule sur l'adresse 8080");
});
