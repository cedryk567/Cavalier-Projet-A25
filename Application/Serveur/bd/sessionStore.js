import session from "express-session";
import client from "../bd/mysql.js";
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
class MySQLSessionStore extends session.Store {
  constructor() {
    super();
  }

  //Fonction pour loader la session de l'utilisateur : est appelle des qu'une requete est donnee au serveur
  async get(sid, callback) {
    logger.info(`GET session: ${sid}`);
    try {
      const [retourSession] = await client.query(
        "SELECT donnees_utilisateur, date_expiration FROM session_utilisateur WHERE session_token = ?",
        [sid]
      );

      if (!retourSession.length) {
        logger.info("Session inexistante");
        return callback(null, null);
      }

      const sessionUtilisateur = JSON.parse(
        retourSession[0].donnees_utilisateur
      );

      const expiration = new Date(retourSession[0].date_expiration);
      logger.info(`Date expiration : ${expiration}`);

      if (expiration.getTime() <= new Date().getTime()) {
        logger.info("Session Expire");
        await this.destroy(sid, () => {});
        return callback(null, null);
      }
      logger.info("Session pas expire");
      callback(null, sessionUtilisateur);
    } catch (error) {
      logger.info("Erreur lors du get de la session ", error);
      callback(error);
    }
  }
  //Fonction pour creer la session de l'utilisateur : est appelle quand les donnees de la session sont modifie
  async set(sid, sessionData, callback) {
    logger.info("SET session:", sid);
    try {
      const donneesUtilisateur = JSON.stringify(sessionData);
      logger.info(`donnees utilisateurs ${donneesUtilisateur}`);
      const expiration = sessionData.cookie?.expires
        ? new Date(sessionData.cookie.expires)
        : new Date(Date.now() + 86400000);

      await client.query(
        `INSERT INTO session_utilisateur (session_token, donnees_utilisateur, date_expiration)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE donnees_utilisateur = ?, date_expiration = ?`,
        [sid, donneesUtilisateur, expiration, donneesUtilisateur, expiration]
      );

      callback(null);
    } catch (error) {
      logger.info("Erreur lors du set de la session ", error);
      callback(error);
    }
  }
  //Fonction pour detruire la session de l'utilisateur : est appelle lors de la deconnexion manuelle de l'utilisateur
  async destroy(sid, callback) {
    logger.info(`DESTROY session : ${sid}`);
    try {
      await client.query(
        "DELETE FROM session_utilisateur WHERE session_token = ?",
        [sid]
      );
      if (callback) {
        return callback(null);
      }
    } catch (error) {
      logger.error("Erreur lors de la deconnexion : ", error);
      return callback(error);
    }
  }
}

export default MySQLSessionStore;
