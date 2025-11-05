import { VueJour } from "../components/Jour/VueJour";
import { VueMois } from "../components/Mois/VueMois";
import { VueSemaine } from "../components/Semaine/VueSemaine";
import { CalendrierContext } from "../context/CalendrierContext";
import React, { useContext } from "react";

export const CalendrierVue = () => {
  const {
    aujActuel,
    jourSelectionner,
    vueChoisie,
    events,
    setJourSelectionner
  } = useContext(CalendrierContext);
  return (
    <div className="calendrier-main-vue" style={{height: "100%"}}>
      {vueChoisie === "mois" && (
        <VueMois
          jourSelectionner={jourSelectionner}
          aujActuel={aujActuel}
          events={events}
        />
      )}
      {vueChoisie === "semaine" && (
        <VueSemaine
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          events={events}
        />
      )}
      {vueChoisie === "jour" && (
        <VueJour
          jourSelectionner={jourSelectionner}
          setJourSelectionner={setJourSelectionner}
          events={events}
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
