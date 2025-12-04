
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
  idEquipe: "hoahfoofpoajifj-219u9af"
});

//Exemple de liaison entre un document et une équipe
db.EquipeDocuments.insertOne({
  idEquipe: "ajgpap-gahtyawojk",
  documentsIds: [
    {idDocument: "691b206b8a31326c198eeb3e"},
  ],
});

//Exemple de Document et de comment il est mis <16 Mo
db.Documents.insertOne({
    nom: "nom_fichier",
    type: "pdf",
    contenu: {"$binary": "exempleBASE64..."},
    taille: 22,
    equipeId: "ajgpap-gaigjawojk",
    date: "27 nov 2025 16h10"
});