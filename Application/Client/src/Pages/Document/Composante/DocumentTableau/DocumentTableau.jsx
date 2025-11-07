import "./DocumentTableau.css";
import {
  TableauTitreValue,
  Cellule,
} from "../../StyledComposante/DocumentTableau.style";
import { DocumentItem } from "../DocumentRowItem/DocumentItem";

export const DocumentTableau = () => {
  const colonnes = [
    { label: "Type", span: 1 },
    { label: "Nom", span: 4 },
    { label: "Equipe", span: 1 },
    { label: "Créateur", span: 2 },
    { label: "Taille", span: 2 },
    { label: "Date", span: 2 },
  ];

  const mockList = [
    {
      id: 1,
      typeDeFichier: "pdf",
      nomDocument: "Rapport Annuel 2025",
      equipe: "Finance",
      nomCreateur: "Alice Dupont",
      tailleFichier: "2.3 MB",
      dateDeCreation: "2025-11-01",
    },
    {
      id: 2,
      typeDeFichier: "word",
      nomDocument: "Plan Marketing Q4",
      equipe: "Marketing",
      nomCreateur: "Bob Martin",
      tailleFichier: "1.8 MB",
      dateDeCreation: "2025-10-28",
    },
    {
      id: 3,
      typeDeFichier: "excel",
      nomDocument: "Budget Prévisionnel",
      equipe: "Finance",
      nomCreateur: "Clara Dubois",
      tailleFichier: "3.2 MB",
      dateDeCreation: "2025-09-15",
    },
    {
      id: 4,
      typeDeFichier: "powerpoint",
      nomDocument: "Présentation Produit",
      equipe: "Ventes",
      nomCreateur: "David Leroy",
      tailleFichier: "4.1 MB",
      dateDeCreation: "2025-08-22",
    },
    {
      id: 5,
      typeDeFichier: "pdf",
      nomDocument: "Procès-Verbal Réunion",
      equipe: "RH",
      nomCreateur: "Eva Moreau",
      tailleFichier: "0.9 MB",
      dateDeCreation: "2025-07-30",
    },
  ];

  return (
    <div className="TableauDocumentContainer">
      <div className="TitreColonne">
        {/**Header */}
        <TableauTitreValue>
          {colonnes.map(({ label, span }, index) => {
            const estNom = label === "Nom";
            return (
              <Cellule
                key={index}
                span={span}
                className={estNom ? "TitreGauche" : "TitreCentrer"}
              >
                {label}
              </Cellule>
            );
          })}
        </TableauTitreValue>
        {/**Item de tableau */}
      </div>
      <div className="Tableau">
        {mockList.map((document) => (
          <DocumentItem key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
};
