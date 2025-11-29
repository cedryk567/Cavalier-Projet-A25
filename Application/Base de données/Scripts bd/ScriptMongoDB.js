
const database = "MongoCavalier";

use(database);

//create collection
db.createCollection("Events");
db.createCollection("Statistiques");
db.createCollection("Messages");
//Document de moins de 16 Mo avec Binary
db.createCollection("Documents");
db.createCollection("EquipeDocuments");

//Exemple de Event
db.Events.insertOne({
  nom: "Compétition nationnale de natation 2025",
  description: "Compétition de natation",
  debutEvent: "2025-11-13T08:30:00[America/Toronto]",
  finEvent: "2025-11-13T09:00:00[America/Toronto]",
  idEquipe: "hoahfoofpoajifj-219u9af",
  idSport: "kojfjpojfo-329ut09fuarq3n",
});

//Exemple de liaison entre un document et une équipe
db.EquipeDocuments.insertOne({
  idEquipe: "ajgpap-gaigjawojk",
  documentsIds: [
    ObjectId("650b1f6c4a3e5a1b2c3d4e5f"),
    ObjectId("650b1f333a3e5a1b2c3d4e5f"),
    ObjectId("650b1f6c4a3e5a1b2c333e5f"),
  ],
});

//Exemple de Document et de comment il est mis <16 Mo
db.Documents.insertOne({
    nom: "nom_fichier",
    type: "pdf",
    contenu: "contenue en binary",
    taille: 22,
    equipeId: "ajgpap-gaigjawojk"
});

//Exemple de Statistiques pour chaque sport
//Natation
db.Statistiques.insertOne({
  equipeId: "eqnat-29fja92jf93jaf",
  joueurId: "usr001-19afja92jf0aa",
  epreuves: [
    { nom: "100m nage libre", temps: "1:05.32", classement: 1 },
    { nom: "200m dos crawlé", temps: "6:49.12", classement: 3 },
    { nom: "150m crawl", temps: "2:29.87", classement: 2 },
    { nom: "400m brasse", temps: "3:01.24", classement: 3 }
  ]
});

//Volleyball
db.Statistiques.insertOne({
  equipeId: "eqvol-2af9j2f9ajf920",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Cégep de Québec", points: 25, aces: 3, blocs: 2 },
    { adversaire: "Cégep de Trois-Rivières", points: 18, aces: 1, blocs: 4 }
  ]
});

//Basketball
db.Statistiques.insertOne({
  equipeId: "eqbas-af92jf0293jf02",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Montréal", points: 22, rebonds: 8, passes: 4 },
    { adversaire: "Laval", points: 17, rebonds: 5, passes: 6 }
  ]
});

//Flag-Football
db.Statistiques.insertOne({
  equipeId: "eqfla-9ajf02jf02jfa0",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Cégep de Québec", touchdowns: 2, interceptions: 1 },
    { adversaire: "Sherbrooke", touchdowns: 3, interceptions: 0 }
  ]
});

//Soccer
db.Statistiques.insertOne({
  equipeId: "eqsoc-2jf9ajf029fj20",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Québec", buts: 6, passes: 2, tirsCadrés: 5 },
    { adversaire: "Montréal", buts: 5, passes: 3, tirsCadrés: 7 }
  ]
});

//Futsal
db.Statistiques.insertOne({
  equipeId: "eqfut-j2f90ajf20fja2",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Drummondville", buts: 2, passes: 1, interceptions: 3 },
    { adversaire: "Granby", buts: 4, passes: 2, interceptions: 1 },
    { adversaire: "Dru mmondville", buts: 2, passes: 17, interceptions: 3 },
    { adversaire: "Gra nby", buts: 3, passes: 2, interceptions: 4 },
    { adversaire: "Drum mondville", buts: 2, passes: 5, interceptions: 3 },
    { adversaire: "Gran by", buts: 1, passes: 20, interceptions: 6 }
  ]
});

//Ultimate Frisbee
db.Statistiques.insertOne({
  equipeId: "eqult-90ajf0a9fj203a",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Laval", points: 10, receptionsReussies: 12 },
    { adversaire: "Montréal", points: 8, receptionsReussies: 15 }
  ]
});

//Badminton
db.Statistiques.insertOne({
  equipeId: "eqbad-203jf9ajf203jf",
  joueurId: "usr001-19afja92jf0aa",
  matchs: [
    { adversaire: "Montréal", resultat: "Victoire", points: 21, manches: 2 },
    { adversaire: "Québec", resultat: "Défaite", points: 18, manches: 1 }
  ]
});