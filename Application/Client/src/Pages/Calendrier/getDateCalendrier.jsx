import { Temporal } from '@js-temporal/polyfill';
export const getDateCalendrier = (dateMois) => {
  const annee = dateMois.year;
  const mois = dateMois.month;

  const premierJourMois = Temporal.PlainDate.from({year: annee,month: mois, day: 1 });
  const dernierJourMois = dateMois.with({ day: dateMois.daysInMonth });

  //entier qui dit la journnée de la semaine
  const premierJourDeSemaine = premierJourMois.dayOfWeek;

  //entier qui dit combien de jour on doit combler
  const jourAvantLeMois = premierJourDeSemaine - 1;

  const celluleAffiché = 42; //6 semaines de 7 jours
  const days = [];

  let calendrierCommence = premierJourMois.subtract({ days: jourAvantLeMois });

  for (let i = 0; i < celluleAffiché; i++) {
    const date = calendrierCommence.add({ days: i });
    const estMoisCourant = date.month === mois;

    days.push({
      date,
      estMoisCourant, //boolean
    });
  }

  return days;
};
