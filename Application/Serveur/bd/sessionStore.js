import session from "express-session";
import client from "../bd/mysql.js"; 
import winston from "winston"
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

  async get(sid, callback) {
    logger.info("GET session:", sid);
    try {
      const [retourSession] = await client.query(
        "SELECT preferences_utilisateur, date_expiration FROM session_utilisateur WHERE session_token = ?",
        [sid]
      );

      if (!retourSession.length){
        logger.info("Session inexistante")
        return callback(null, null);
      } 

      const session = JSON.parse(retourSession[0].data);
      const expiration = new Date(retourSession[0].date_expiration);

      if (expiration < new Date()) {
        logger.info("Session Expire")
        await this.destroy(sid, () => {});
        return callback(null, null);
      }

      callback(null, session);
    } catch (error) {
      logger.info("Erreur lors du get de la session ",error)
      callback(error);
    }
  }

  async set(sid, sessionData, callback) {
    console.log("SET session:", sid);
    try {
      const data = JSON.stringify(sessionData);
      logger.info(data)
      const expiration = sessionData.cookie?.expires
        ? new Date(sessionData.cookie.expires)
        : new Date(Date.now() + 86400000);

      await client.query(
        `INSERT INTO session_utilisateur (session_token, preferences_utilisateur, date_expiration)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE preferences_utilisateur = ?, date_expiration = ?`,
        [sid, data, expiration, data, expiration]
      );

      callback(null);
    } catch (error) {
      logger.info("Erreur lors du set de la session ",error)
      callback(error);
    }
  }

  async destroy(sid, callback) {
    console.log("DESTROY session:", sid);
    try {
      await client.query(
        "DELETE FROM session_utilisateur WHERE session_token = ?",
        [sid]
      );
      callback(null);
    } catch (error) {
      callback(error);
    }
  }
}

export default MySQLSessionStore;
