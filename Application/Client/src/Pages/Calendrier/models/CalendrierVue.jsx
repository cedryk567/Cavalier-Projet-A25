import React from "react";
import { VueJour } from "../components/VueJour";
import { VueMois } from "../components/VueMois";
import { VueSemaine } from "../components/VueSemaine";

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
