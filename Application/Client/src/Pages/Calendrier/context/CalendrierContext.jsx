import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Event } from "../models/Event";
import { Temporal } from "@js-temporal/polyfill";

export const CalendrierContext = createContext({
  // --- events ---
  events: [],
  ajouterEvent: () => {},
  supprimerEvent: () => {},
  getEvents: () => [],
  estCharge: false,
  //  --- calendrier ---
  aujActuel: null,
  jourSelectionner: null,
  setJourSelectionner: () => {},
  vueChoisie: "mois",
  setVueChoisie: () => {},
  allerProchaineVue: () => {},
  revenirDerniereVue: () => {},
  revenirAuj: () => {},
});

export const CalendrierProvider = ({ children }) => {
  //Etat des évènements
  const [events, setEvents] = useState([]);
  const [estCharge, setEstCharge] = useState(false);

  //État de la logique du calendrier
  const aujActuel = Temporal.Now.plainDateISO(); //jours actuel
  const [jourSelectionner, setJourSelectionner] = useState(aujActuel);
  const [vueChoisie, setVueChoisie] = useState("mois");

  //Fonction pour le Calendrier
  const allerProchaineVue = useCallback(() => {
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
  }, [jourSelectionner, vueChoisie]);

  const revenirDerniereVue = useCallback(() => {
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
  }, [jourSelectionner, vueChoisie]);

  const revenirAuj = useCallback(() => {
    setJourSelectionner(aujActuel)
  },[jourSelectionner])

  //Fonction pour les Events

  const ajouterEvent = useCallback((eventData) => {
    //logique pour créer un event
  }, []);

  const supprimerEvent = useCallback((id) => {
    //logique pour supprimer un event
  }, []);

  const getEvents = useCallback(async () => {
    //retourne les events de la personne
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const valeur = useMemo(
    () => ({
      events,
      estCharge,
      aujActuel,
      jourSelectionner,
      vueChoisie,
      ajouterEvent,
      supprimerEvent,
      getEvents,
      allerProchaineVue,
      revenirDerniereVue,
      revenirAuj,
    }),
    [
      events,
      estCharge,
      aujActuel,
      jourSelectionner,
      vueChoisie,
      ajouterEvent,
      supprimerEvent,
      getEvents,
      allerProchaineVue,
      revenirDerniereVue,
      revenirAuj,
    ]
  );

  return (
    <CalendrierContext.Provider value={valeur}>
      {children}
    </CalendrierContext.Provider>
  );
};
