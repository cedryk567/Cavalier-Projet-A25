export const postFormulaire = async (requete) => {
  try {
    const reponse = await requete;
    if (!reponse) {
      console.log("La route n'existe pas ou le serveur est eteint!");
      return;
    }
    console.log("Reponse recu!");
    const status = reponse.status;
    const donnees = await reponse.json();
    donnees.status = status;
    console.log("Connexion réussie ");
    return donnees;
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
};
export const gereChangementForm = (entree, valeur, setForm, form) => {
  setForm({
    ...form,
    [entree]: valeur,
  });
};
