import React from "react";

export const VueJour = ({ jourSelectionner, events }) => {
  const eventsDuJour = events.filter(e => e.date === jourSelectionner.toString());

  return (
    <div>
      <h3>{jourSelectionner.toString()}</h3>
      {eventsDuJour.length === 0 ? (
        <p>Aucun événement ce jour-là.</p>
      ) : (
        <ul>
          {eventsDuJour.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
