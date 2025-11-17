import { verifierBody } from "../verifierBody.js";
import { verifierFormatCourriel } from "../verificateursSpeciaux/verifierFormatCourriel.js";
const verifierBodyDeleteUtilisateur = (body) => {
  const bodyDesire = {
    id_utilisateur: "",
  };
  return verifierBody(body, bodyDesire, null);
};
export default verifierBodyDeleteUtilisateur;
