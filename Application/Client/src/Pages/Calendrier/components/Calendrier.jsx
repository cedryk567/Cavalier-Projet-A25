import { Temporal } from "@js-temporal/polyfill";
import "./Calendrier.css";
import React, { useState, useEffect } from "react";
import { getDateCalendrier } from "../getDateCalendrier.jsx";

import { calendrierViewModel } from "../viewModel/CalendrierViewModel.js";
import { CalendrierVue } from "../models/CalendrierVue.jsx";
import { NavbarCalendrier } from "./nav/NavbarCalendrier.jsx";

function Calendrier() {
  const {
    jourSelectionner,
    setJourSelectionner,
    vueChoisie,
    setVueChoisie,
    listEvents,
    allerAProchaineVue,
    revenirDerniereVue,
  } = calendrierViewModel();

  const AjouterEvent = () => {
    //ouvrir un modal et faire les choses
  };

  return (
    <div className="calendrier-container">
      {/* Header de navigation */}
      <NavbarCalendrier
        jourSelectionner={jourSelectionner}
        allerAProchaineVue={allerAProchaineVue}
        revenirDerniereVue={revenirDerniereVue}
        vueChoisie={vueChoisie}
        setVueChoisie={setVueChoisie}
        onAjouterEvent={AjouterEvent}
      />

      {/* Vue centrale : Mois, Semaine ou Jour */}
      <CalendrierVue
        vueChoisie={vueChoisie}
        jourSelectionner={jourSelectionner}
        setJourSelectionner={setJourSelectionner}
        listEvents={listEvents}
      />
    </div>
  );
}
export default Calendrier;
