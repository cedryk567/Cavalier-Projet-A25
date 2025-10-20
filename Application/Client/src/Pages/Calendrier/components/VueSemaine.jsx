import React from "react";
import { Temporal } from "@js-temporal/polyfill";

export const VueSemaine = ({ jourSelectionner, setJourSelectionner, events }) => {
  const dayOfWeek = jourSelectionner.dayOfWeek; // 1 (lundi) à 7 (dimanche)
  const startOfWeek = jourSelectionner.subtract({ days: dayOfWeek - 1 });

  const semaine = Array.from({ length: 7 }, (_, i) => startOfWeek.add({ days: i }));

  const getEventsForDate = (date) =>
    events.filter(e => e.date === date.toString());

  return (
    <div className="vue-semaine" style={{ display: "flex", gap: "10px" }}>
      {semaine.map((date, index) => {
        const eventsDuJour = getEventsForDate(date);
        const estSelectionne = date.equals(jourSelectionner);

        return (
          <div
            key={index}
            onClick={() => setJourSelectionner(date)}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: estSelectionne ? "#cce5ff" : "#f9f9f9",
              border: "1px solid #ccc",
              minHeight: "100px"
            }}
          >
            <div><strong>{date.day}/{date.month}</strong></div>
            {eventsDuJour.map((event, i) => (
              <div key={i} style={{ fontSize: "12px", marginTop: "4px" }}>{event.title}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
