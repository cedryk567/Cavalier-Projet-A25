import { Temporal } from "@js-temporal/polyfill";
import "./Calendrier.css";
import React, { useState, useEffect } from "react";
import { getDateCalendrier } from "./getDateCalendrier.jsx";

import { calendrierViewModel } from "./viewModel/CalendrierViewModel.js";
import { CalendrierVue } from "./models/CalendrierVue.jsx";

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
    <div className="calendrier-container">
      {/* Header de navigation */}
      <div className="calendrier-header" style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <button onClick={revenirDerniereVue}>←</button>
        <h2>{moisNoms[jourSelectionner.month - 1]} {jourSelectionner.year}</h2>
        <button onClick={allerAProchaineVue}>→</button>

        <select
          value={vueChoisie}
          onChange={(e) => setVueChoisie(e.target.value)}
        >
          <option value="mois">Mois</option>
          <option value="semaine">Semaine</option>
          <option value="jour">Jour</option>
        </select>
      </div>

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
