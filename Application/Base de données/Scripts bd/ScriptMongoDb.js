
use("mongodbVSCodePlaygroundDB");

db.createCollection("Events");
db.createCollection("Statistiques");
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

db.EquipeDocuments.insertOne({
  idEquipe: "ajgpap-gaigjawojk",
  documentsIds: [
    ObjectId("650b1f6c4a3e5a1b2c3d4e5f"),
    ObjectId("650b1f333a3e5a1b2c3d4e5f"),
    ObjectId("650b1f6c4a3e5a1b2c333e5f"),
  ],
});