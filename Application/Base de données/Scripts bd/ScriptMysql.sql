-- Généré à partir du modèle Oracle vers MySQL
DROP DATABASE cavalier_projet_A25;
CREATE DATABASE cavalier_projet_A25;
USE cavalier_projet_A25;
CREATE TABLE sport (
    id_sport INT NOT NULL AUTO_INCREMENT,
    nom_sport VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_sport)
);
CREATE TABLE equipe (
    id_equipe INT NOT NULL AUTO_INCREMENT,
    code_equipe VARCHAR(100) NOT NULL,
    id_sport INT NOT NULL,
    PRIMARY KEY (id_equipe),
    CONSTRAINT equipe_sport_fk FOREIGN KEY (id_sport) REFERENCES sport(id_sport)
);
CREATE TABLE utilisateur (
    id_utilisateur INT NOT NULL AUTO_INCREMENT,
    compte_est_actif TINYINT NOT NULL CHECK (compte_est_actif IN (0, 1)),
    nom_utilisateur VARCHAR(100),
    type_utilisateur VARCHAR(100),
    mot_de_passe VARCHAR(100) NOT NULL,
    courriel VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id_utilisateur)
);
CREATE TABLE session_utilisateur(
    id_session_utilisateur INT NOT NULL AUTO_INCREMENT,
    session_token VARCHAR(255) NOT NULL,
    est_active TINYINT(1) NOT NULL DEFAULT 1,
    donnees_utilisateur VARCHAR(500),
    date_expiration DATETIME NOT NULL,
    PRIMARY KEY (id_session_utilisateur)
);
CREATE TABLE utilisateur_equipe (
    id_coach_equipe INT NOT NULL AUTO_INCREMENT,
    id_utilisateur INT NOT NULL,
    id_equipe INT NOT NULL,
    PRIMARY KEY (id_coach_equipe),
    CONSTRAINT utilisateur_equipe_equipe_fk FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe),
    CONSTRAINT utilisateur_equipe_utilisateur_fk FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);
INSERT INTO utilisateur (
        nom_utilisateur,
        compte_est_actif,
        type_utilisateur,
        mot_de_passe,
        courriel
    )
VALUES (
        'arnaud',
        1,
        'athlete',
        '123',
        'arnaudkomodo@gmail.com'
    );