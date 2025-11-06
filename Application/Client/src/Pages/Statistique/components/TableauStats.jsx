import { useState } from "react";
import "./TableauStats.css";

export const TableauStats = ({ statsTableau }) => {
  // vérifier si le tableau est vide
  if (!statsTableau || statsTableau.length === 0) {
    return <p>Aucune statistique disponible pour cette équipe ...</p>;
  }

  // exclure joueur et equipeId des colonnes affichees
  const colonnes = Object.keys(statsTableau[0]).filter(
    (colonneAffichee) => !["joueur", "equipeId"].includes(colonneAffichee)
  );

  return (
    <table className="tableau-stats">
      //En-tete
      <thead>
        <tr>
          {colonnes.map((colonne) => (
            <th key={colonne}>{colonne}</th>
          ))}
        </tr>
      </thead>
      //Informations
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
