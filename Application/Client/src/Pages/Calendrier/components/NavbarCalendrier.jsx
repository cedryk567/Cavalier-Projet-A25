import React from "react";
import "./NavbarCalendrier.css"; 

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
        <button onClick={revenirDerniereVue}>←</button>
        <span className="cal-navbar-date">
          {moisNoms[jourSelectionner.month - 1]} {jourSelectionner.year}
        </span>
        <button onClick={allerAProchaineVue}>→</button>

        <button onClick={onAjouterEvent} className="cal-ajouter-event">
          + Ajouter un événement
        </button>
      </div>

      {/* Section droite : sélecteur de vue */}
      <div className="cal-navbar-droite">
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
