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
