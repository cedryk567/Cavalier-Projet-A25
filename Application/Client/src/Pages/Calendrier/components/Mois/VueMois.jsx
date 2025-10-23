// src/Pages/Calendrier/components/VueMois.jsx
import React from "react";
import { getDateCalendrier } from "../../getDateCalendrier";

export const VueMois = ({ jourSelectionner, setJourSelectionner, events }) => {
  const jours = getDateCalendrier(jourSelectionner);

  const moisNoms = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];

  const moisProchain = () => {
    setJourSelectionner(jourSelectionner.add({ months: 1 }));
  };

  const moisPrecedent = () => {
    setJourSelectionner(jourSelectionner.subtract({ months: 1 }));
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
        }}
      >
        {/* En-têtes de jours */}
        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((jour, index) => (
          <div
            key={index}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {jour}
          </div>
        ))}

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
              width: "5rem",
              height: "7rem",
            }}
          >
            {jour.date.day}
          </div>
        ))}
      </div>
    </div>
  );
};
