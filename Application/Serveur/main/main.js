import express from "express";
import cors from "cors";
import session from "express-session";
import winston from "winston";
import sessionStoreMySql from "../bd/sessionStore.js";
import utilisateur from "../routes/utilisateur/utilisateur.js";
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
const sessionStore = new sessionStoreMySql();
const corsConfig = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, origin);
  },
};
logger.info("demarrage du serveur");
//IMPORTANT : sur chacune de vos routes vous devez verifier si la personne est connecte en faisant if(!req.session.authenticated){
//return res.status(401).json({message : "Utilisateur non connecte"})}
app.use(
  session({
    secret: "secret",
    cookie: {
      maxAge: 3_600_000,
      secure: false,
    },
    saveUninitialized: false,
    resave: false,

    store: sessionStore,
  })
);
app.use(cors(corsConfig));
app.use(express.json());
app.use("/utilisateur", utilisateur);
app.listen(8080, () => {
  logger.info("Le serveur roule sur l'adresse 8080");
});
