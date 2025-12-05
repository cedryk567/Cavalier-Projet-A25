import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { mockListDocuments } from "./MockUpListe";
import { documentData } from "./../../../server/api/routeUtilisateur/";

export const DocumentContext = createContext({
  documents: [],
  documentsFiltrer: [],
  typeDocumentDisponible: [],
  filtreSelectionner: "",
  ajouterDocument: () => {},
  supprimerDocument: () => {},
  setFiltreSelectionner: () => {},
  chargerDocuments: () => {},
});

const typeFichierMap = {
  // Word
  "application/msword": "word",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "word",

  // Excel
  "application/vnd.ms-excel": "excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "excel",

  // PowerPoint
  "application/vnd.ms-powerpoint": "powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "powerpoint",

  // Texte
  "text/plain": "texte",

  // PDF
  "application/pdf": "texte",
};

const transformerDocument = (
  doc,
  index = 1,
  equipeName = "Nom équipe défaut",
  createur = "Nom créateur défaut"
) => {
  const typeDeFichier = doc.type.startsWith("image/")
    ? "image"
    : typeFichierMap[doc.type] || "inconnue";
  let tailleFichier = "";
  if (doc.taille >= 0.01) {
    tailleFichier = `${doc.taille.toFixed(2)} MB`;
  } else {
    tailleFichier = `${(doc.taille * 1024).toFixed(2)} KB`;
  }
  console.log("MongoId document:", doc._id);
  return {
    id: index,
    mongoId: doc._id,
    typeDeFichier,
    nomDocument: doc.nom,
    equipe: equipeName,
    nomCreateur: createur,
    tailleFichier: tailleFichier,
    dateDeCreation: new Date(doc.date).toISOString().split("T")[0],
  };
};

export const DocumentsProvider = ({ children }) => {
  //Etat
  const [documents, setDocuments] = useState([]);
  const [filtreSelectionner, setFiltreSelectionner] = useState("");

  const chargerDocuments = useCallback(async () => {
    try {
      const resultat = await documentData();

      if (!resultat.ok) {
        const err = await resultat.text();
        console.log("Erreur Api:", err);
        setDocuments([]);
        return;
      }

      const data = await resultat.json();

      const documentsTransformee = data.map((doc, id) =>
        //Créateur et nom équipe par défaut
        transformerDocument(doc, id + 1, "Mark", "Bob")
      );

      setDocuments(documentsTransformee);
      console.log("Document récupéré:", documentsTransformee);
    } catch (error) {
      console.error("Erreur fetch documents", error);
      setDocuments(mockListDocuments);
    }
  }, []);

  //Type de document présent dans la liste
  const typeDocumentDisponible = useMemo(() => {
    const types = documents
      .map((doc) => doc.typeDeFichier?.toLocaleLowerCase())
      //Pour retirer les type == null/undefined
      .filter(Boolean);
    const uniqueTypes = [...new Set(types)];
    return uniqueTypes.sort((a, b) => a.localeCompare(b));
  }, [documents]);

  //Liste filtrées
  const documentsFiltrer = useMemo(() => {
    if (filtreSelectionner.length === 0) return documents;
    return documents.filter((doc) =>
      filtreSelectionner.includes(doc.typeDeFichier.toLocaleLowerCase())
    );
  }, [documents, filtreSelectionner]);

  //ajoute a la liste seulement (touche pas encore a la bd)
  const ajouterDocument = useCallback((nouveauDocument) => {
    setDocuments((prev) => [...prev, nouveauDocument]);
  }, []);

  //supprime a la liste seulement (touche pas encore a la bd)
  const supprimerDocument = useCallback((id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  }, []);

  useEffect(() => {
    chargerDocuments();
    setFiltreSelectionner("");
  }, [chargerDocuments]);

  const valeur = useMemo(
    () => ({
      documents,
      documentsFiltrer,
      typeDocumentDisponible,
      filtreSelectionner,
      ajouterDocument,
      supprimerDocument,
      setFiltreSelectionner,
    }),
    [
      documents,
      documentsFiltrer,
      typeDocumentDisponible,
      filtreSelectionner,
      ajouterDocument,
      supprimerDocument,
      setFiltreSelectionner,
    ]
  );

  return (
    <DocumentContext.Provider value={valeur}>
      {children}
    </DocumentContext.Provider>
  );
};
