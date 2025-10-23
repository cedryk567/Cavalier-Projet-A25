import React from "react";
import "./NavbarCalendrier.css";
import RightArrowSVG from "../../../../img/RightArrowSVG";
import LeftArrowSVG from "../../../../img/LeftArrowSVG";
import { StyledIcon } from "../../../../components/ComposantsMajeur/StyledComponents/Icon.style";
import { StyledButtonSimpleSVG } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledDropdown, StyledDropdownSansBordure } from "../../../../components/ComposantsMajeur/EquipeNavbar/DropDownButton.style";

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

  const vueCalendrier = [
    { label: "Jour", value: "jour" },
    { label: "Semaine", value: "semaine" },
    { label: "Mois", value: "mois" },
  ];

  return (
    <div className="cal-navbar">
      {/* Section gauche : date + navigation */}
      <div className="cal-navbar-gauche">
        <StyledButtonSimpleSVG
          margin="0"
          svgSize="2rem"
          onClick={revenirDerniereVue}
        >
          <StyledIcon size="24px" color="black">
            <LeftArrowSVG />
          </StyledIcon>
        </StyledButtonSimpleSVG>
        <StyledButtonSimpleSVG
          margin="0"
          svgSize="2rem"
          onClick={allerAProchaineVue}
        >
          <StyledIcon size="24px" color="black">
            <RightArrowSVG />
          </StyledIcon>
        </StyledButtonSimpleSVG>

        <StyledText size="1.2rem" color="black" margin="0 0.8rem">
          {moisNoms[jourSelectionner.month - 1]} {jourSelectionner.year}
        </StyledText>

        <button onClick={onAjouterEvent} className="cal-ajouter-event">
          + Ajouter un événement
        </button>
      </div>

      {/* Section droite : sélecteur de vue */}
      <div className="cal-navbar-droite">
        <StyledDropdownSansBordure
          label="Vue"
          items={vueCalendrier}
          defaultValue={vueChoisie}
          onChange={(e) => setVueChoisie(e.target.value)}
        />
        <label htmlFor="vue-select">Vue :</label>
        <select
          id="vue-select"
          value={vueChoisie}
          onChange={(e) => setVueChoisie(e.target.value)}
        >
          <option value="jour">Jour</option>
          <option value="semaine">Semaine</option>
          <option value="mois">Mois</option>
        </select>
      </div>
    </div>
  );
};
