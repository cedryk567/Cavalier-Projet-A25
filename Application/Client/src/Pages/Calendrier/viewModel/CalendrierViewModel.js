import {useState} from 'react'
import { Temporal } from '@js-temporal/polyfill';

export const calendrierViewModel = () => {

    const aujActuel = Temporal.Now.plainDateISO(); //jours actuel
    const [jourSelectionner, setJourSelectionner] = useState(aujActuel);
    const [vueChoisie, setVueChoisie] = useState("semaine");
    const [listEvents, setListEvents] = useState([]);

    const allerAProchaineVue = () =>{
        /**
         * méthode pour avancer d'une semaine(7 jours)
         * ou de 1 jour. Selon la vue.
        */
        const nouvelleDate = vueChoisie === "semaine"
        ? jourSelectionner.add({days: 7})
        : jourSelectionner.add({days: 1})

        setJourSelectionner(nouvelleDate)
    };

    const revenirDerniereVue = () =>{
        /**
         * méthode pour reculer d'une semaine(7 jours)
         * ou de 1 jour. Selon la vue.
        */
        const nouvelleDate = vueChoisie === "semaine"
        ? jourSelectionner.subtract({days: 7})
        : jourSelectionner.subtract({days: 1})
        setJourSelectionner(nouvelleDate)
    };

    return{
        aujActuel,
        jourSelectionner,
        setJourSelectionner,
        vueChoisie,
        setVueChoisie,
        listEvents,
        setListEvents,
        allerAProchaineVue,
        revenirDerniereVue
    }
}