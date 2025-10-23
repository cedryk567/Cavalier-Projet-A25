export const postFormulaire = async (requete) => {
  try {
    const reponse = await requete;
    if (!reponse) {
      return;
    }
    const status = reponse.status;
    const donnees = await reponse.json();
    donnees.status = status;
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
