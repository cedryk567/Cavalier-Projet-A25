export const postFormulaire = async (e) => {
  e.preventDefault();
  try {
    console.log("allo");
    for (var cle in erreurs) {
      if (erreurs.hasOwnProperty(cle)) {
        var val = erreurs[cle];
        if (val) {
          return;
        }
      }
    }
    console.log("Pas d'erreurs");
    const reponse = await fetch("http://127.0.0.1:8080/connexion", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courriel: form.courriel,
        mot_de_passe: form.mot_de_passe,
      }),
    });

    const status = reponse.status;
    const donnees = await reponse.json();

    setReponseServeur({ status: status, message: donnees.message });

    if (status !== 200) {
      console.error("Erreur lors de la connexion :", donnees.message);
      return;
    }

    console.log("Connexion réussie ");
    navigate("/DashBoard");
  } catch (error) {
    console.error("Erreur réseau :", error);
  }
};

export const gereChangementForm = (entree, valeur) => {
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
