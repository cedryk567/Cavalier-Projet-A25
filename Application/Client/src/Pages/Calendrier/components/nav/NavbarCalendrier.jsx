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
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import { CalendrierContext } from "../../context/CalendrierContext";
import React, { useContext } from "react";

export const NavbarCalendrier = () => {
  const {
    jourSelectionner,
    allerProchaineVue,
    revenirDerniereVue,
    ajouterEvent,
    vueChoisie,
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
  );
};
