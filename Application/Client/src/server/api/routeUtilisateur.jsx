//verifierExistanceUtilisateur
export const verifierCourriel = async (body) => {
  if (body.courriel.length === 0) {
    body.courriel = null;
  }
  return await fetch(
    `http://localhost:8080/utilisateur/verifierCourriel/${body.courriel}`,
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
    `http://localhost:8080/utilisateur/demanderMotDePasseTemporaire/${courriel}`,
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
  return await fetch(`http://localhost:8080/utilisateur/activationCompte`, {
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
  return await fetch("http://localhost:8080/utilisateur/connexion", {
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

export const retournerSession = async () => {
  return await fetch("http://localhost:8080/utilisateur/retournerSession", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deconnexion = async () => {
  return await fetch("http://localhost:8080/utilisateur/deconnexion", {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const equipeData = async () => {
  return await fetch("http://localhost:8080/utilisateur/equipe", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const documentData = async () => {
  return await fetch("http://localhost:8080/document/", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const telechargerDocument = async (idDocument) => {
  console.log("idDocument:", idDocument);
  try {
    const reponse = await fetch(
      `http://localhost:8080/document/telecharger/${idDocument}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    if (!reponse.ok) {
      const err = await reponse.text();
      console.error("Erreur API:", err);
      return;
    }
    let nomFichier = "document";

    //récupere le type exact du fichier
    const disposition = reponse.headers.get("Content-Disposition");
    if (disposition) {
      const match = disposition.match(/filename="?([^"]+)"?/);
      if (match && match[1]) {
        nomFichier = match[1];
      }
    }

    const typeFichier =
      reponse.headers.get("Content-Type") || "application/octet-stream";

    //fichier binaire
    const binaire = await reponse.blob();
    const objetBinaire = new Blob([binaire], { type: typeFichier });

    //Lien temporaire pour télécharger le fichier
    const url = window.URL.createObjectURL(objetBinaire);
    const lien = document.createElement("a");
    lien.href = url;

    //Information du fichier qui est télécharger
    lien.download = nomFichier;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);

    //libère la mémoire du lien
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.log("Erreur lors du téléchargement du document", err);
  }
};
