import React from "react";
import "./VueMois.css"; 
import { getDateCalendrier } from "../getDateCalendrier";
import { Temporal } from "@js-temporal/polyfill";

export const VueMois = ({ jourSelectionner, setJourSelectionner, events }) => {
  const jours = getDateCalendrier(jourSelectionner);
  const today = Temporal.Now.plainDateISO();

  const getEventsForDate = (date) => {
    return events.filter((e) => e.date === date.toString());
  };

  return (
    <div className="vue-mois">
      {/* En-têtes des jours */}
      <div className="jours-header">
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((jour, i) => (
          <div key={i} className="jour-header-cell">
            {jour}
          </div>
        ))}
      </div>

      {/* Grille des jours */}
      <div className="grille-jours">
        {jours.map(({ date, estMoisCourant }, index) => {
          const isToday = date.equals(today);
          const isSelected = date.equals(jourSelectionner);
          const eventsDuJour = getEventsForDate(date);

          return (
            <div
              key={index}
              className={`cellule-jour 
                ${estMoisCourant ? "" : "hors-mois"} 
                ${isToday ? "aujourdhui" : ""} 
                ${isSelected ? "selectionne" : ""}
              `}
              onClick={() => setJourSelectionner(date)}
            >
              <div className="numero-jour">{date.day}</div>

              <div className="events">
                {eventsDuJour.slice(0, 2).map((e, i) => (
                  <div key={i} className="event">{e.title}</div>
                ))}
                {eventsDuJour.length > 2 && (
                  <div className="more-events">+{eventsDuJour.length - 2} événements</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
