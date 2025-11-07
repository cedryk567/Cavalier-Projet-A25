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
    <TableauRowItem>
      {/**Type de fichier */}
      <Cellule span={1}>
        <IconSimpleDictionnaire type={typeDeFichier} />
      </Cellule>

      {/**nom du document */}
      <Cellule span={4}>{nomCreateur}</Cellule>

      {/**Équipe */}
      <Cellule span={1}>{equipe}</Cellule>

      {/**Createur */}
      <Cellule>
        {/**essaie avec l'icon */}
        <FaUser style={{ marginRight: "6px" }} />
      </Cellule>
    </TableauRowItem>
  );
};
