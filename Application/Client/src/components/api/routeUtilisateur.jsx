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
