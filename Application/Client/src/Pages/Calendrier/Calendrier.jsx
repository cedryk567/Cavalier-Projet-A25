import { Temporal } from "@js-temporal/polyfill";
import "./Calendrier.css";
import React, { useState, useEffect } from "react";
import { getDateCalendrier } from "./getDateCalendrier.jsx";

function Calendrier() {
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
  const [moisActuel, setMoisActuel] = useState(
    Temporal.Now.plainDateISO().with({ day: 1 })
  );
  const jours = getDateCalendrier(moisActuel);

  const moisProchain = () => {
    setMoisActuel(moisActuel.add({ months: 1 }));
  };
  const moisPrecedent = () => {
    setMoisActuel(moisActuel.subtract({ months: 1 }));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <button onClick={moisPrecedent}>← Mois précédent</button>
        <h2>
          {moisNoms[moisActuel.month - 1]} {moisActuel.year}
        </h2>
        <button onClick={moisProchain}>Mois suivant →</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {/* En-têtes de jours */}
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map(
          (jour, index) => (
            <div
              key={index}
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              {jour}
            </div>
          )
        )}

        {/* Jours du calendrier */}
        {jours.map((jour, index) => (
          <div
            key={index}
            style={{
              padding: 10,
              textAlign: "center",
              backgroundColor: jour.estMoisCourant ? "#f0f0f0" : "black",
              borderRadius: 4,
              border: jour.estMoisCourant
                ? "0px solid black"
                : "1px solid #f0f0f0",
              color: jour.estMoisCourant ? "black" : "#f0f0f0",
              with: "5rem",
              height: "7rem",
            }}
          >
            {jour.date.day}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendrier;
