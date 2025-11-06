// générée par l'ia (fausses données pour les statistiques)

export const fakeUser = {
  id: "U001",
  nom: "Alex Tremblay",
  equipes: ["EQ001", "EQ002", "EQ003"], 
};

export const fakeEquipes = [
  {
    id: "EQ001",
    nom: "Soccer Féminin Automne 2023",
    sport: "Soccer",
    session: "Automne 2023",
    categorie: "Féminin",
  },
  {
    id: "EQ002",
    nom: "Soccer Mixte Hiver 2024",
    sport: "Soccer",
    session: "Hiver 2024",
    categorie: "Mixte",
  },
  {
    id: "EQ003",
    nom: "Basketball Masculin Hiver 2024",
    sport: "Basketball",
    session: "Hiver 2024",
    categorie: "Masculin",
  },
];

export const fakeStats = [
  {
    equipeId: "EQ001",
    joueur: "Alex Tremblay", //ça va probablement être id joueur (pas le nom)
    matchs: 8,
    buts: 6,
    passes: 2,
  },
  {
    equipeId: "EQ002",
    joueur: "Alex Tremblay",
    matchs: 10,
    buts: 5,
    passes: 4,
  },
  {
    equipeId: "EQ003",
    joueur: "Alex Tremblay",
    matchs: 12,
    points: 140,
    rebonds: 50,
  },
];
