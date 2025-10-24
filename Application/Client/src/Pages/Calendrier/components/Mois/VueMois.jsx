// src/Pages/Calendrier/components/VueMois.jsx
import React from "react";
import "./VueMois.css";
import { getDateCalendrier } from "../../getDateCalendrier";

export const VueMois = ({ jourSelectionner, setJourSelectionner, events }) => {
  const jours = getDateCalendrier(jourSelectionner);

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
  const jourSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const moisProchain = () => {
    setJourSelectionner(jourSelectionner.add({ months: 1 }));
  };

  const moisPrecedent = () => {
    setJourSelectionner(jourSelectionner.subtract({ months: 1 }));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        gap: "5px",
        height: "95%",
        boxSizing: "border-box",
      }}
    >
      {/* Jours du mois */}
      {jours.map((jour, index) => {
        const premiereRangee = index < 7;
        return premiereRangee ? (
          <div
            key={`day-${index}`}
            style={{
              textAlign: "center",
              border: "1px solid #999",
              backgroundColor: jour.estMoisCourant ? "#f0f0f0" : "#2b2b2b",
              borderRadius: "4px",
              color: jour.estMoisCourant ? "black" : "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {jour.date.day}
          </div>
        ) : (
          <div
            key={`day-${index}`}
            style={{
              textAlign: "center",
              border: "1px solid #999",
              backgroundColor: jour.estMoisCourant ? "#f0f0f0" : "#2b2b2b",
              borderRadius: "4px",
              color: jour.estMoisCourant ? "black" : "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {jour.date.day}
          </div>
        );
      })}
    </div>
  );
};
