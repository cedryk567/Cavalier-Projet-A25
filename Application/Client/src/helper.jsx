export const postFormulaire = async (requete) => {
  try {
    const reponse = await requete;
    const status = reponse.status;
    let donnees = await reponse.json();
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
export const objetEstVide = (objet) => {
  if (!objet) {
    return true;
  }
  const clees = Object.keys(objet);
  if (clees.length === 0) {
    return true;
  }
  clees.forEach((cle) => {
    if (clees[cle] === "") {
      return true;
    }
  });
};
export const standAloneAsyncFonction = async (fonction) => {
  await fonction();
};
