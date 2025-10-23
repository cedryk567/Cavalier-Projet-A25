import React from "react";
import "./NavbarCalendrier.css";
import RightArrowSVG from "../../../../img/RightArrowSVG";
import LeftArrowSVG from "../../../../img/LeftArrowSVG";
import { StyledIcon } from "../../../../components/ComposantsMajeur/StyledComponents/Icon.style";
import {
  StyledButtonSimpleSVG,
  StyledButtonSimpleBorder,
} from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledDropdownSansBordure } from "../../../../components/ComposantsMajeur/EquipeNavbar/DropDownButton.style";
import { vueCalendrier } from "../../models/CalendrierVue";

export const NavbarCalendrier = ({
  jourSelectionner,
  allerAProchaineVue,
  revenirDerniereVue,
  vueChoisie,
  setVueChoisie,
  onAjouterEvent,
}) => {
  const moisNoms = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  return (
    <div className="cal-navbar">
      {/* Section gauche : date + navigation */}
      <div className="cal-navbar-gauche">
        <StyledButtonSimpleBorder
          border="1px solid black"
          borderRadius="25px"
          padding="0.1rem 0.5rem"
        >
          <StyledText>Today</StyledText>
        </StyledButtonSimpleBorder>
        <StyledButtonSimpleSVG
          margin="0"
          svgSize="2rem"
          onClick={revenirDerniereVue}
        >
          <StyledIcon size="24px" color="black" bgHover="#ccc">
            <LeftArrowSVG />
          </StyledIcon>
        </StyledButtonSimpleSVG>
        <StyledButtonSimpleSVG
          margin="0"
          svgSize="2rem"
          onClick={allerAProchaineVue}
        >
          <StyledIcon size="24px" color="black" bgHover="#ccc">
            <RightArrowSVG />
          </StyledIcon>
        </StyledButtonSimpleSVG>

        <StyledText size="1.2rem" color="black" margin="0 0.8rem">
          {moisNoms[jourSelectionner.month - 1]} {jourSelectionner.year}
        </StyledText>

        {/**
         * button qui est ajouté si on est un coach
         * <button onClick={onAjouterEvent} className="cal-ajouter-event">
          + Ajouter un événement
          </button>
         */}
      </div>

      {/* Section droite : sélecteur de vue */}
      <div className="cal-navbar-droite">
        <StyledDropdownSansBordure
          label="Vue"
          items={vueCalendrier}
          defaultValue={vueChoisie}
          onChange={(e) => setVueChoisie(e.target.value)}
        />
      </div>
    </div>
  );
};
