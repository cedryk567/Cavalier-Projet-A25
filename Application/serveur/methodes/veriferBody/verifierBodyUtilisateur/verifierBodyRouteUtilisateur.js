import { verifierBody } from "../verifierBody";
import { regexCourriel } from "../../regex";
const verifierBodyActivationCompte = (body) => {
  //on lui dit ce qu'il doit match
  const bodyDesire = { courriel: "" };
  const verifierCasSpeciaux = (body) => {
    const clees = Object.keys(body);
    let valeurRecherche = null;
    for (const clee of clees) {
      if (clee == "courriel") {
        valeurRecherche = body[clee].toLowerCase().match(regexCourriel);
      }
    }
    if (!valeurRecherche) {
      return false;
    }
    return true;
  };
  return verifierBody(body, bodyDesire, verifierCasSpeciaux);
};
