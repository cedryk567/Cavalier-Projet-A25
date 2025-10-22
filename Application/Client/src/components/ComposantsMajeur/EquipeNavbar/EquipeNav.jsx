import "./EquipeNav.css";
import { StyledRondIcon } from "../StyledComponents/Icon.style";
import { StyledButton } from "../StyledComponents/ButtonDashboard.style";
import { StyledText } from "../StyledComponents/Text.style";
import AccountSVG from "../../../img/AccountSVG";
import ParametreSVG from "../../../img/ParametreSVG";

export const EquipeNav = () => {
  return (
    <div className="equipe-content">
      <div className="choix-equipe">
        <div className="titre">
          {/* la balise va changer pour une styled */}
          <StyledText size="1.5rem">Equipe</StyledText>
        </div>
        <div className="equipe-icon">
          {/* exemple d'icon de l'utilisateur */}
          <StyledRondIcon
            size="40px"
            borderColor="#ccc"
            horverBorder="#fff"
            hoverColor="#fff"
            margin="0 0.2rem"
            hoverScale
          >
            <ParametreSVG />
          </StyledRondIcon>
          <StyledRondIcon
            size="40px"
            borderColor="#ccc"
            horverBorder="#fff"
            hoverColor="#fff"
            margin="0 0.2rem"
            hoverScale
          >
            <AccountSVG />
          </StyledRondIcon>
        </div>
      </div>
      <div className="choix-session">
        {/**Bouton temporaire*/}
        <StyledButton margin="0 2rem">
          <span>Sessions</span>
        </StyledButton>
      </div>
    </div>
  );
};
