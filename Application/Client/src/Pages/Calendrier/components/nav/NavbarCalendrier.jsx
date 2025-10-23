import React from "react";
import "./NavbarCalendrier.css";
import PlusSVG from "../../../../img/PlusSVG";
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
      {/** bouton créer event*/}
      <div className="create-bouton">
        <StyledButtonSimpleBorder
          fontSize="1.3rem"
          colorText="white"
          svgSize="1.5rem"
          border="1px solid white"
          borderRadius="15px"
          padding="0.8rem 0.6rem"
          margin="0 1rem "
          marginText= "0 0.6rem 0 0"
        >
          <span>Nouveau</span>
          <PlusSVG />
        </StyledButtonSimpleBorder>
      </div>
      {/** mini calendrier*/}
      <div className="mini-calendrier">
        <h2>mini-calendrier</h2>
      </div>
      {/** Type event (à voir)*/}
      {/** event favoris (à voir)*/}
    </div>
  );
};
