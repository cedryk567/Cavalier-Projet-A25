# Cavalier-Projet-A25

## Table des matières

1. [Description](#description)
2. [Installation](#installation)
3. [Auteurs](#auteurs)

## Description

## Installation

- Logiciel requis pour faire fonctionner le projet:

### Etapes d'installation

1.  Clonez le repository :

```bash
git clone https://github.com/cedryk567/Cavalier-Projet-A25.git
```

2.  Installer la Bd mysql :

```bash
docker run --name cavalier-projet-A25 -e MYSQL_ROOT_PASSWORD=oracle -p 3306:3306 -d mysql:latest
```

3. Installer la Bd mongoDB :

```bash
docker run -d --name mongoDBCavalier -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=oracle -p 27017:27017 mongo
```

4. Se connecter pour run les script :

```bash
mysql -u root -p
```

5. quoi mettre dans le .env :

```bash
#mysql
MYSQL_HOST = localhost
MYSQL_USER = root
MYSQL_PASSWORD = oracle
MYSQL_DATABASE = cavalier_projet_A25
MYSQL_DB_PORT = 3306
#mongoDB
MONGODB_URL = mongodb://mongoadmin:oracle@localhost:27017/
#google api
CLIENT_ID = 50436254729-92brctsqaim38p7arunmrhiq3pfefs26.apps.googleusercontent.com
CLIENT_SECRET = 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
REDIRECT_URL =https://developers.google.com/oauthplayground
REFRESH_TOKEN = 1//04OybvToO7lhWCgYIARAAGAQSNwF-L9IrBrM6K1Y3bp5YXyfj6URXwq4yZoZiQB2q-PxANK0P49MxLuWjDEws1D2nO65Oju00jJU
ACCESS_TOKEN = ya29.a0AQQ_BDTMVJTYabcqqlXpl4dhbkWxjQ1ZmsuHlwc4_nCQbEE0GhJigxufqN26ec_9kU3sGtZaQB0kKrlEQL40Ao5UFR155umEWansFvpzW99H9bGu71qsWMjoBY5aNYNsxvlQv8OXmPVuEHb3ySH8ReUUzIEPV_luVYFkbKxA7HxlNZeXrsVOb8gL1aDy-tQkZdYxUNsaCgYKAdUSARQSFQHGX2MiPxZ3ld3eX7umneUJ283lrg0206
```
