import React from "react";
import { VueJour } from "../components/Jour/VueJour";
import { VueMois } from "../components/Mois/VueMois";
import { VueSemaine } from "../components/Semaine/VueSemaine";

export const CalendrierVue = ({
  vueChoisie,
  jourSelectionner,
  setJourSelectionner,
  listEvents,
}) => {
  return (
    <div className="calendrier-main-vue">
      {vueChoisie === "mois" && (
        <VueMois
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          events={listEvents}
        />
      )}
      {vueChoisie === "semaine" && (
        <VueSemaine
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          events={listEvents}
        />
      )}
      {vueChoisie === "jour" && (
        <VueJour
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          events={listEvents}
        />
      )}
    </div>
  );
};

export const vueCalendrier = [
  { label: "Jour", value: "jour" },
  { label: "Semaine", value: "semaine" },
  { label: "Mois", value: "mois" },
];
