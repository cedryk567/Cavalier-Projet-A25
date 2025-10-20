export const envoyerCourriel = async () => {
  return fetch(
    `http://127.0.0.1:8080/utilisateur/envoyerCourriel/${form.courriel}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const connexion = async () => {
  return fetch("http://127.0.0.1:8080/connexion", {
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
