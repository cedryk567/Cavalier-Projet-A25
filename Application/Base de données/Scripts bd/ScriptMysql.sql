-- Généré à partir du modèle Oracle vers MySQL
DROP DATABASE IF EXISTS cavalier_projet_A25;
CREATE DATABASE cavalier_projet_A25;
USE cavalier_projet_A25;
CREATE TABLE equipe (
    id_equipe INT NOT NULL AUTO_INCREMENT,
    code_equipe VARCHAR(100) NOT NULL,
    sport VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_equipe)
);
CREATE TABLE utilisateur (
    id_utilisateur INT NOT NULL AUTO_INCREMENT,
    compte_est_actif TINYINT NOT NULL DEFAULT 0,
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
    id_coach_equipe INT NOT NULL ,
    id_utilisateur INT NOT NULL,
    id_equipe INT NOT NULL
    PRIMARY KEY (id_coach_equipe),
    CONSTRAINT utilisateur_equipe_equipe_fk FOREIGN KEY (id_equipe) REFERENCES equipe(id_equipe),
    CONSTRAINT utilisateur_equipe_utilisateur_fk FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);
-- Procedures
DROP PROCEDURE IF EXISTS retourner_sports_utilisateur;
DELIMITER $$
CREATE PROCEDURE retourner_sports_utilisateur(
    IN equipes_id VARCHAR(1000),
    OUT resultat VARCHAR(10000)
) BEGIN
	SELECT GROUP_CONCAT(sport SEPARATOR ', ')
    INTO resultat
    FROM equipe
    WHERE FIND_IN_SET(id_equipe, equipes_id) > 0;
    IF resultat IS NULL THEN
        SET resultat = '';
    END IF;
END $$ 
DELIMITER;

DROP PROCEDURE IF EXISTS retourner_equipes_utilisateur;

DELIMITER $$
CREATE PROCEDURE retourner_equipes_utilisateur(IN id_utilisateur INT)
	BEGIN
		SELECT ue.id_equipe 
		FROM utilisateur_equipe 
		AS ue JOIN utilisateur AS u ON ue.id_utilisateur = u.id_utilisateur 
		WHERE u.id_utilisateur = id_utilisateur;
END$$

DELIMITER;

INSERT INTO utilisateur
VALUES (
        1,
        0,
        'arnaud',
        'admin',
        '1234',
        'arnaudkomodo@gmail.com'
    );
INSERT INTO equipe(code_equipe,sport) VALUES('NAT001','Natation');