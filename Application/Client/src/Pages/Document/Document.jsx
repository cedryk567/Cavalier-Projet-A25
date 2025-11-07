import "./Document.css";
import { NavDocumentFiltre } from "./Composante/NavFiltre/NavDocumentFiltre";
import { DocumentTableau } from "./Composante/DocumentTableau/DocumentTableau";
import { StyledText } from "../../components/ComposantsMajeur/StyledComponents/Text.style";
import { DocumentsProvider } from "./Context/DocumentContext";

function Document() {
  return (
    <DocumentsProvider>
      <div className="DocumentContainer">
        <div className="DocumentTitre">
          <StyledText size="1.8rem">
            {/**Ajouter le fait que ca affiche le nom de l'équipe */}
            {/**Exemple: Document > Natation2025 */}
            <span>Documents</span>
          </StyledText>
        </div>
        <div className="DocumentFiltre">
          <NavDocumentFiltre />
        </div>
        <div className="DocumentTableau">
          <DocumentTableau />
        </div>
      </div>
    </DocumentsProvider>
  );
}

export default Document;
