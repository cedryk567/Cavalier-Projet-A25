import "./EquipeNav.css";
import { StyledRondIcon } from "../StyledComponents/Icon.style";
import { StyledText } from "../StyledComponents/Text.style";
import { StyledDropdown } from "../../ui/ButtonRelatedComponents/DropDownButton.style";
import AccountSVG from "../../../img/AccountSVG";
import ParametreSVG from "../../../img/ParametreSVG";

export const EquipeNav = () => {
  const option = [
    { label: "Automne 2025", value: 1 },
    { label: "Hiver 2025", value: 2 },
    { label: "Automne 2026", value: 3 },
    { label: "Hiver 2026", value: 4 },
    { label: "Automne 2027", value: 5 },
    { label: "Hiver 2027", value: 6 },
  ];

  return (
    <div className="equipe-content">
      <div className="choix-equipe">
        <div className="titre">
          <StyledText size="1.5rem">Equipe</StyledText>
        </div>
        <div className="equipe-icon">
          {/* exemple d'icon de l'utilisateur */}
          <StyledRondIcon
            size="40px"
            borderColor="#ccc"
            horverBorder="#fff"
            hoverColor="#fff"
            margin="0 0.3rem"
            hoverScale
          >
            <ParametreSVG />
          </StyledRondIcon>
          <StyledRondIcon
            size="40px"
            borderColor="#ccc"
            horverBorder="#fff"
            hoverColor="#fff" //Évites les couleurs forcées, à faire. Peut-être synchroniser les couleurs css et faire un "enum" COlor
            margin="0 0.3rem"
            hoverScale
          >
            <AccountSVG />
          </StyledRondIcon>
        </div>
      </div>
      <div className="choix-session">
        {/**Bouton temporaire*/}
        <StyledDropdown label="Sessions" items={option} />
      </div>
    </div>
  );
};
