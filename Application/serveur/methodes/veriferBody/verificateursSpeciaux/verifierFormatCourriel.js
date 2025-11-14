import { regexCourriel } from "../../regex.js";
export const verifierFormatCourriel = (body) => {
  const clees = Object.keys(body);
  let valeurRecherche = null;
  for (const clee of clees) {
    if (clee === "courriel") {
      valeurRecherche = body[clee].toLowerCase().match(regexCourriel);
    }
  }
  if (!valeurRecherche) {
    logger.info("Le courriel est dans un mauvais format");
    return ["courriel"];
  }
  return [];
};
