import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { mockListDocuments } from "./MockUpListe";

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

export const DocumentsProvider = ({ children }) => {
  //Etat
  const [documents, setDocuments] = useState([]);
  const [filtreSelectionner, setFiltreSelectionner] = useState("");

  //Etat (unique)

  const chargerDocuments = useCallback(async () => {
    try {
      //appel a la bd
      //avec un setDocuments
    } catch (error) {
      console.error("Erreur fetch documents", error);
      setDocuments(mockListDocuments);
    }
    setDocuments(mockListDocuments);
  },[]);

  //Type de document présent dans la liste
  const typeDocumentDisponible = useMemo(() => {
    const types = documents.map((doc) => doc.typeDeFichier.toLocaleLowerCase());
    return [...new Set(types)];
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
  }, [documents]);

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
