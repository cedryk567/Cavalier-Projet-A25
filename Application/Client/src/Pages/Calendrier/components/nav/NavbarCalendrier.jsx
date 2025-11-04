import "./NavbarCalendrier.css";
import RightArrowSVG from "../../../../img/RightArrowSVG";
import LeftArrowSVG from "../../../../img/LeftArrowSVG";
import PlusSVG from "../../../../img/PlusSVG";
import {
  StyledButtonSimpleSVG,
  StyledButtonSimpleBorder,
} from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { getDateCalendrier } from "../../getDateCalendrier";
import { StyledDropdown } from "../../../../components/ui/Button/DropDownButton.style";
import { CalendrierContext } from "../../context/CalendrierContext";
import { vueCalendrier } from "../../models/CalendrierVue";
import React, { useContext } from "react";

export const NavbarCalendrier = () => {
  const {
    jourSelectionner,
    vueChoisie,
    allerProchaineVue,
    revenirDerniereVue,
    ajouterEvent,
    revenirAuj,
  } = useContext(CalendrierContext);

  const moisNoms = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <div className="navbarCalendrier-container">
      <div className="zoneGauche">
        <div className="dateAfficher">
          <StyledText size="1.8rem">
            <span>{moisNoms[jourSelectionner.month - 1]}</span>
          </StyledText>
          <StyledText size="1.8rem">
            <span>{jourSelectionner.year}</span>
          </StyledText>
        </div>
        <div className="fleche">
          <StyledButtonSimpleSVG
            svgSize="2rem"
            color="white"
            onClick={revenirDerniereVue}
          >
            <LeftArrowSVG />
          </StyledButtonSimpleSVG>
          <StyledButtonSimpleSVG
            svgSize="2rem"
            color="white"
            onClick={allerProchaineVue}
          >
            <RightArrowSVG />
          </StyledButtonSimpleSVG>
        </div>
      </div>
      <div className="zoneDroite">
        <div className="boutonAuj">
          <StyledButtonSimpleBorder
            border="1px solid white"
            colorText="white"
            padding="0.5rem 0.6rem"
            onClick={revenirAuj}
          >
            <span>Aujourd'hui</span>
          </StyledButtonSimpleBorder>
        </div>
        <div className="boutonVue">
          <StyledDropdown
            label={vueChoisie}
            items={[{ label: "mois", value: "mois" }]}
          />
        </div>
        <div className="boutonCreer">
          <StyledButtonSimpleSVG
            svgSize="1.6rem"
            backgroundColor="#65C97A"
            onClick={ajouterEvent}
          >
            <PlusSVG />
          </StyledButtonSimpleSVG>
        </div>
      </div>
    </div>
  );
};
