import React from "react";
import { getDateCalendrier } from "../getDateCalendrier";

export const VueMois = ({ jourSelectionner, setJourSelectionner, events }) => {
  const jours = getDateCalendrier(jourSelectionner); // génère 42 jours

  const getEventsForDate = (date) => {
    return events.filter((e) => e.date === date.toString());
  };

  return (
    <div className="vue-mois-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "4px" }}>
      {jours.map(({ date, estMoisCourant }, index) => {
        const estSelectionne = date.equals(jourSelectionner);
        const eventsDuJour = getEventsForDate(date);

        return (
          <div
            key={index}
            className={`cellule-jour ${estMoisCourant ? "" : "hors-mois"} ${estSelectionne ? "selectionne" : ""}`}
            onClick={() => setJourSelectionner(date)}
            style={{
              padding: "6px",
              border: "1px solid #ddd",
              backgroundColor: estSelectionne ? "#cce5ff" : estMoisCourant ? "#fff" : "#eee",
              minHeight: "80px"
            }}
          >
            <div style={{ fontWeight: "bold" }}>{date.day}</div>
            {eventsDuJour.map((event, i) => (
              <div key={i} style={{ fontSize: "12px", marginTop: "4px" }}>{event.title}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
