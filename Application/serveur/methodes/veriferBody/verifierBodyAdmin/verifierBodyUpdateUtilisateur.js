import { verifierBody } from "../verifierBody.js";
import { verifierFormatCourriel } from "../verificateursSpeciaux/verifierFormatCourriel.js";
const verifierBodyUpdateUtilisateur = (body) => {
  const bodyDesire = {
    nom_utilisateur: "",
    type_utilisateur: "",
    courriel: "",
    mot_de_passe: "",
    id_utilisateur: 0,
  };
  return verifierBody(body, bodyDesire, verifierFormatCourriel);
};
export default verifierBodyUpdateUtilisateur;
