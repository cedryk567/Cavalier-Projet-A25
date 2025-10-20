import { useState } from "react";
import { Temporal } from "@js-temporal/polyfill";

export const calendrierViewModel = () => {
  const aujActuel = Temporal.Now.plainDateISO(); //jours actuel
  const [jourSelectionner, setJourSelectionner] = useState(aujActuel);
  const [vueChoisie, setVueChoisie] = useState("semaine");
  const [listEvents, setListEvents] = useState([]);

  const allerAProchaineVue = () => {
    /**
     * méthode pour avancer d'une semaine(7 jours)
     * ou de 1 jour. Selon la vue.
     */
    let nouvelleDate;
    if (vueChoisie === "mois") {
      nouvelleDate = jourSelectionner.add({ months: 1 });
    } else if (vueChoisie === "semaine") {
      nouvelleDate = jourSelectionner.add({ days: 7 });
    } else if (vueChoisie === "jour") {
      nouvelleDate = jourSelectionner.add({ days: 1 });
    }
    setJourSelectionner(nouvelleDate);
  };

  const revenirDerniereVue = () => {
    /**
     * méthode pour reculer d'une semaine(7 jours)
     * ou de 1 jour. Selon la vue.
     */
    let nouvelleDate;
    if (vueChoisie === "mois") {
      nouvelleDate = jourSelectionner.subtract({ months: 1 });
    } else if (vueChoisie === "semaine") {
      nouvelleDate = jourSelectionner.subtract({ days: 7 });
    } else if (vueChoisie === "jour") {
      nouvelleDate = jourSelectionner.subtract({ days: 1 });
    }
    setJourSelectionner(nouvelleDate);
  };

  return {
    aujActuel,
    jourSelectionner,
    setJourSelectionner,
    vueChoisie,
    setVueChoisie,
    listEvents,
    setListEvents,
    allerAProchaineVue,
    revenirDerniereVue,
  };
};
