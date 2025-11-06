//verifierExistanceUtilisateur
export const verifierCourriel = async (body) => {
  if (body.courriel.length === 0) {
    body.courriel = null;
  }
  return await fetch(
    `http://127.0.0.1:8080/utilisateur/verifierCourriel/${body.courriel}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const envoyerCourriel = async (courriel) => {
  console.log(`Courriel : ${courriel}`);
  return await fetch(
    `http://127.0.0.1:8080/utilisateur/demanderMotDePasseTemporaire/${courriel}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const activerCompte = async (form) => {
  console.log(form);
  return await fetch(`http://127.0.0.1:8080/utilisateur/activationCompte`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mot_de_passe_temporaire: form.mot_de_passe_temporaire,
      nouveau_mot_de_passe: form.nouveau_mot_de_passe,
      courriel: form.courriel,
    }),
  });
};
export const connexion = async (form) => {
  return fetch("http://127.0.0.1:8080/utilisateur/connexion", {
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
};
