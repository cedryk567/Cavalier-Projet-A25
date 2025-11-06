import "./Document.css";
import { NavDocumentFiltre } from "./Composante/NavFiltre/NavDocumentFiltre";
import { DocumentTableau } from "./Composante/DocumentTableau/DocumentTableau";
import { StyledText } from "../../components/ComposantsMajeur/StyledComponents/Text.style";

function Document() {
  return (
    <div className="DocumentContainer">
      <div className="DocumentTitre">
        <StyledText size="1.8rem">
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
  );
}

export default Document;
