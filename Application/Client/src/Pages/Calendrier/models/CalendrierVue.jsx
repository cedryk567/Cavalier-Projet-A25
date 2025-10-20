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
  const renderVuePrincipale = () => {
    switch (vueChoisie) {
      case "mois":
        return (
          <VueMois
            jourSelectionner={jourSelectionner}
            setJourSelectionner={setJourSelectionner}
            events={listEvents}
          />
        );
      case "semaine":
        return (
          <VueSemaine
            jourSelectionner={jourSelectionner}
            setJourSelectionner={setJourSelectionner}
            events={listEvents}
          />
        );
      case "jour":
        return (
          <VueJour
            jourSelectionner={jourSelectionner}
            setJourSelectionner={setJourSelectionner}
            events={listEvents}
          />
        );
      default:
        return null;
    }
  };

  return(
    <div clasaName="calendrier-main-vue">
        {renderVuePrincipale()}
    </div>
  );
};
