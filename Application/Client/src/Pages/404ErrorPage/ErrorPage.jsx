import "./ErrorPage.css";
import { NavLink } from "react-router-dom";
import { StyledText } from "../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledButtonSimpleBorder } from "../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";

function ErrorPage() {
  return (
    <div className="ErrorContaier">
      <StyledText margin="10px 0">
        <span>Erreur 404</span>
      </StyledText>
      <StyledText size="2rem" weight="800">
        <span>Désolé! Aucune Page Trouvée</span>
      </StyledText>
      <StyledText margin=" 0  0 20px 0">
        <span>
          La page que vous cherchez n'existe pas. Cliquez sur le bouton pour
          revenir à l'accueil.
        </span>
      </StyledText>
      <StyledButtonSimpleBorder to="/" colorText="white">
        <span>Accueil</span>
      </StyledButtonSimpleBorder>
    </div>
  );
}

export default ErrorPage;
