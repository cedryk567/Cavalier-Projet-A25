import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import { StyledText } from "../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledButtonSimpleBorder } from "../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="ErrorContaier">
      <div className="ErrorTextContainer">
        <StyledText margin="10px 0">
          <span>Erreur 404</span>
        </StyledText>
        <StyledText size="3rem" weight="800">
          <span>Désolé! Aucune Page Trouvée</span>
        </StyledText>
        <div className="ErrorParagraphe">
          <StyledText>
            <span>
              La page que vous cherchez n'existe pas. Cliquez sur le bouton pour
              revenir à l'accueil.
            </span>
          </StyledText>
        </div>
        <StyledButtonSimpleBorder
          onClick={() =>  navigate("/")}
          colorText="white"
          border="2px solid #00ff76"
          marginText="5px 20px"
          borderRadius="25px"
          backgroundColor="#00ff76"
        >
          <span>Accueil</span>
        </StyledButtonSimpleBorder>
      </div>
    </div>
  );
}

export default ErrorPage;
