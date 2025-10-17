export const postFormulaire = async (
  e,
  setReponseServeur,
  erreurs,
  setFormEstInvalide,
  requete,
  setRequeteReussi,
  setEstEnChargement
) => {
  e.preventDefault();
  try {
    for (var cle in erreurs) {
      if (erreurs.hasOwnProperty(cle)) {
        var val = erreurs[cle];
        if (val) {
          setFormEstInvalide(true);
          return;
        }
      }
    }
    console.log("Pas d'erreurs");
    console.log("En attente de la reponse...");
    setEstEnChargement(true);
    setReponseServeur({});
    const reponse = await requete;
    if (!reponse) {
      console.log("La route n'existe pas ou le serveur est eteint!");
      setEstEnChargement(false);
      return;
    }
    console.log("Reponse recu!");
    const status = reponse.status;
    const donnees = await reponse.json();

    setReponseServeur({
      status: status,
      message: donnees.message,
      requeteEstReussi: donnees.requeteReussi,
    });
    console.log("Connexion réussie ");
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
};
export const gereChangementForm = (
  entree,
  valeur,
  setForm,
  setErreurs,
  form,
  erreurs
) => {
  setForm({
    ...form,
    [entree]: valeur,
  });
  if (!valeur) {
    setErreurs({
      ...erreurs,
      [entree]: true,
    });
    return;
  }
  if (!gererCasSpecial(entree, valeur)) {
    setErreurs({
      ...erreurs,
      [entree]: true,
    });
    return;
  }
  setErreurs({
    ...erreurs,
    [entree]: null,
  });
};
function gererCasSpecial(entree, valeur) {
  if (entree == "courriel") {
    return valeur
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  return true;
}
