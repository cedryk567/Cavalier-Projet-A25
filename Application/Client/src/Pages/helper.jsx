export const postFormulaire = async (
  e,
  setReponseServeur,
  erreurs,
  setFormEstInvalide,
  requete,
  setRequeteReussi
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
    setReponseServeur({ status: 0, message: "Veuillez patienter" });
    const reponse = await requete();
    if (!reponse) {
      console.log("La route n'existe pas ou le serveur est etein!");
      return;
    }
    console.log("Reponse recu!");

    const status = reponse.status;
    const donnees = await reponse.json();
    setReponseServeur({ status: status, message: donnees.message });

    if (status !== 200) {
      console.error("Erreur lors de la connexion :", donnees.message);
      return;
    }

    console.log("Connexion réussie ");
    setRequeteReussi(true);
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
};
