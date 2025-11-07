//stats
export const fakeUser = {
  id: "U001",
  nom: "Alex Tremblay",
  equipes: ["EQ001", "EQ002", "EQ003"],
};

export const fakeEquipes = [
  // Natation
  {
    id: "EQ010",
    nom: "Natation Féminine Hiver 2024",
    sport: "Natation",
    session: "Hiver 2024",
    categorie: "Féminin",
  },

  // Volleyball
  {
    id: "EQ011",
    nom: "Volleyball Mixte Automne 2023",
    sport: "Volleyball",
    session: "Automne 2023",
    categorie: "Mixte",
  },

  // Basketball
  {
    id: "EQ012",
    nom: "Basketball Masculin Hiver 2024",
    sport: "Basketball",
    session: "Hiver 2024",
    categorie: "Masculin",
  },

  // Flag-Football
  {
    id: "EQ013",
    nom: "Flag-Football Mixte Automne 2024",
    sport: "Flag-Football",
    session: "Automne 2024",
    categorie: "Mixte",
  },

  // Soccer
  {
    id: "EQ014",
    nom: "Soccer Féminin Automne 2023",
    sport: "Soccer",
    session: "Automne 2023",
    categorie: "Féminin",
  },

  // Futsal
  {
    id: "EQ015",
    nom: "Futsal Masculin Hiver 2024",
    sport: "Futsal",
    session: "Hiver 2024",
    categorie: "Masculin",
  },

  // Ultimate Frisbee
  {
    id: "EQ016",
    nom: "Ultimate Frisbee Mixte Été 2024",
    sport: "Ultimate Frisbee",
    session: "Été 2024",
    categorie: "Mixte",
  },

  // Badminton
  {
    id: "EQ017",
    nom: "Badminton Mixte Printemps 2024",
    sport: "Badminton",
    session: "Printemps 2024",
    categorie: "Mixte",
  },
];

export const fakeStats = [
  // Natation
  {
    equipeId: "EQ010",
    joueurId: "U001",
    epreuves: [
      {
        nom: "100m nage libre",
        temps: 65.32,
        classement: 2,
      },
      {
        nom: "200m dos crawlé",
        temps: 149.87,
        classement: 3,
      },
    ],
  },

  // Volleyball
  {
    equipeId: "EQ011",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Cégep de Québec",
        points: 25,
        aces: 3,
        blocs: 2,
      },
      {
        adversaire: "Cégep de Trois-Rivières",
        points: 18,
        aces: 1,
        blocs: 4,
      },
    ],
  },

  // Basketball
  {
    equipeId: "EQ012",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Montréal",
        points: 22,
        rebonds: 8,
        passes: 4,
      },
      {
        adversaire: "Laval",
        points: 17,
        rebonds: 5,
        passes: 6,
      },
    ],
  },

  // Flag-Football
  {
    equipeId: "EQ013",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Cégep de Québec",
        touchdowns: 2,
        interceptions: 1,
      },
      {
        adversaire: "Sherbrooke",
        touchdowns: 3,
        interceptions: 0,
      },
    ],
  },

  // Soccer
  {
    equipeId: "EQ014",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Québec",
        buts: 6,
        passes: 2,
        tirsCadrés: 5,
      },
      {
        adversaire: "Montréal",
        buts: 5,
        passes: 3,
        tirsCadrés: 7,
      },
    ],
  },

  // Futsal
  {
    equipeId: "EQ015",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Drummondville",
        buts: 2,
        passes: 1,
        interceptions: 3,
      },
      {
        adversaire: "Granby",
        buts: 4,
        passes: 2,
        interceptions: 1,
      },
    ],
  },

  // Ultimate frisbee
  {
    equipeId: "EQ016",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Laval",
        points: 10,
        receptionsReussies: 12,
      },
      {
        adversaire: "Montréal",
        points: 8,
        receptionsReussies: 15,
      },
    ],
  },

  // Badminton
  {
    equipeId: "EQ017",
    joueurId: "U001",
    matchs: [
      {
        adversaire: "Montréal",
        resultat: "Victoire",
        points: 21,
        manches: 2,
      },
      {
        adversaire: "Québec",
        resultat: "Défaite",
        points: 18,
        manches: 1,
      },
    ],
  },
];
