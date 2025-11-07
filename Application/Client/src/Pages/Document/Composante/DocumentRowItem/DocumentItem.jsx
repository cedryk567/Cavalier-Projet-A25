import "./DocumentItem.css";
import {
  TableauRowItem,
  Cellule,
} from "../../StyledComposante/DocumentTableau.style";
import { IconSimpleDictionnaire } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonFiltre.style";
import { FaUser } from "react-icons/fa";

export const DocumentItem = ({ document }) => {
  if (!document) return null;

  const {
    id,
    nomDocument,
    typeDeFichier,
    tailleFichier,
    equipe,
    nomCreateur,
    dateDeCreation,
  } = document;

  return (
    <TableauRowItem key={id} className="Row-Container">
      {/** Type de fichier */}
      <Cellule span={1} className="TexteCentrer">
        <IconSimpleDictionnaire type={typeDeFichier}  />
      </Cellule>

      {/** Nom du document */}
      <Cellule span={4} className="TexteGauche">
        {nomDocument}
      </Cellule>

      {/** Équipe */}
      {/** Équipe (cercle blanc) */}
      <Cellule span={1} className="TexteCentrer">
        <div className="team-circle"></div>
      </Cellule>

      {/** Créateur avec icône */}
      <Cellule span={2} className="TexteCentrer">
        {nomCreateur}
      </Cellule>

      {/** Taille du fichier */}
      <Cellule span={2} className="TexteCentrer">
        {tailleFichier}
      </Cellule>

      {/** Date de création */}
      <Cellule span={2} className="TexteCentrer">
        {dateDeCreation}
      </Cellule>
    </TableauRowItem>
  );
};
