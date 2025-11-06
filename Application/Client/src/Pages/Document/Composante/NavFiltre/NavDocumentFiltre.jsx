import "./NavDocumentFiltre.css";
import PlusSVG from "../../../../img/PlusSVG";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledButtonSimpleSVG } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { IconFiltreType } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonFiltre.style";

export const NavDocumentFiltre = () => {
  return (
    <div className="NavbarDocument">
      <div className="boutonCreer">
        <StyledButtonSimpleSVG svgSize="1.6rem" backgroundColor="#65C97A">
          <PlusSVG />
        </StyledButtonSimpleSVG>
      </div>
      <StyledText size="1.5rem" margin="0px 20px">
        <span>Récent</span>
      </StyledText>
      <div className="boutonFiltre">
        <IconFiltreType type="pdf"/>
        <IconFiltreType type="word"/>
      </div>
    </div>
  );
};
