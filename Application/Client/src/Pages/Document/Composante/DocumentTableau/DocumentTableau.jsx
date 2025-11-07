import "./DocumentTableau.css";
import {
  TableauTitreValue,
  Cellule,
} from "../../StyledComposante/DocumentTableau.style";


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
      <div className="TitreColonne">
        {/**Header */}
        <TableauTitreValue>
          {colonnes.map(({ label, span }, index) => {
            return (
              <Cellule key={index} span={span}>
                {label}
              </Cellule>
            );
          })}
        </TableauTitreValue>
        {/**Item de tableau */}
      </div>
      <div className="Tableau"></div>
    </div>
  );
};
