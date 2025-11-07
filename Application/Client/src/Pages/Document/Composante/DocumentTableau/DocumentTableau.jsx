import "./DocumentTableau.css";
import {
  TableauTitreValue,
  Cellule,
} from "../../StyledComposante/DocumentTableau.style";
import { DocumentItem } from "../DocumentRowItem/DocumentItem";
import { DocumentContext } from "../../Context/DocumentContext";
import { useContext } from "react";

export const DocumentTableau = () => {
  const { documents } = useContext(DocumentContext);

  const colonnes = [
    { label: "Type", span: 1 },
    { label: "Nom", span: 4 },
    { label: "Equipe", span: 1 },
    { label: "Créateur", span: 2 },
    { label: "Taille", span: 2 },
    { label: "Date", span: 2 },
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
        {documents.map((document) => (
          <DocumentItem key={document.id} document={document} />
        ))}
      </div>
    </div>
  );
};
