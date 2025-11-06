import { useState } from "react";
import "./TableauStats.css";

export const TableauStats = ({ statsTableau }) => {
  // vérifier si le tableau est vide
  if (!statsTableau || statsTableau.length === 0) {
    return <p>Aucune statistique disponible pour cette équipe ...</p>;
  }

  // recuperer les colonnes (infos du haut)
  const colonnes = Object.keys(statsTableau[0]);

  return (
    <table className="tableau-stats">
      <thead>
        <tr>
          {colonnes.map((colonne) => (
            <th key={colonne}>{colonne}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {statsTableau.map((ligne, i) => (
          <tr key={i}>
            {colonnes.map((colonne) => (
              <td key={colonne}>{ligne[colonne]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
