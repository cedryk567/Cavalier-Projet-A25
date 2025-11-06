import "./DocumentTableau.css";
import { TableauContainer, Cellule } from "./DocumentTableau.style";

export const DocumentTableau = () => {
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
      <TableauContainer>
        {colonnes.map(({ label, span }, index) => {
          return (
            <Cellule key={index} span={span}>
              {label}
            </Cellule>
          );
        })}
      </TableauContainer>
      <div className="Tableau"></div>
    </div>
  );
};
