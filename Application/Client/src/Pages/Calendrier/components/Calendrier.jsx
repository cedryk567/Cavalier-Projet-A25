import { Temporal } from "@js-temporal/polyfill";
import "./Calendrier.css";
import React, { useState, useEffect } from "react";
import { getDateCalendrier } from "../getDateCalendrier.jsx";

import { calendrierViewModel } from "../viewModel/CalendrierViewModel.js";
import { CalendrierVue } from "../models/CalendrierVue.jsx";
import { NavbarCalendrier } from "./nav/NavbarCalendrier.jsx";

function Calendrier() {
  const {
    aujActuel,
    jourSelectionner,
    setJourSelectionner,
    vueChoisie,
    setVueChoisie,
    listEvents,
    setListEvents,
    allerAProchaineVue,
    revenirDerniereVue,
    selectionnerDateMini,
    miniCalendrierJourSelectionner,
    miniCalendrierMois,
    moisPrecedentMiniCalendrier,
    moisSuivantMiniCalendrier,
  } = calendrierViewModel();

  const AjouterEvent = () => {
    //ouvrir un modal et faire les choses
  };

  return (
    <div className="calendrier-container">
      <div className="sideBar">
        {/* sidebar de navigation */}
        <NavbarCalendrier
          aujActuel={aujActuel}
          jourSelectionner={jourSelectionner}
          miniCalendrierJourSelectionner={miniCalendrierJourSelectionner}
          miniCalendrierMois={miniCalendrierMois}
          allerAuProchainMois={moisSuivantMiniCalendrier}
          revenirAuDernierMois={moisPrecedentMiniCalendrier}
          onAjouterEvent={AjouterEvent}
          selectionnerJour={selectionnerDateMini}
        />
      </div>
      <div classname="calendrier">
        {/* Vue centrale : Mois, Semaine ou Jour */}
        <CalendrierVue
          vueChoisie={vueChoisie}
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          listEvents={listEvents}
        />
      </div>
    </div>
  );
}
export default Calendrier;
