// src/Pages/Calendrier/components/VueMois.jsx
import "./VueMois.css";
import { Temporal } from "@js-temporal/polyfill";
import { getDateCalendrier } from "../../getDateCalendrier";
import { EventItem } from "../../../../components/ComposantsMajeur/StyledComponents/EventContainer.style";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";

export const VueMois = ({ jourSelectionner, aujActuel, events }) => {
  const jours = getDateCalendrier(jourSelectionner);

  const jourSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="vueMois-container">
      <div className="vueMois-JourSemaine">
        {jourSemaine.map((jour, index) => (
          <div key={index} className="jourSemaine-item">
            <StyledText size="1.6rem" color="white">
              <span>{jour}</span>
            </StyledText>
          </div>
        ))}
      </div>
      <div className="vueMois-JourCalendrier">
        {jours.map(({ date, estMoisCourant }, index) => (
          <div
            key={index}
            className={`jourCalendrier-item ${
              estMoisCourant ? "courant" : "autreMois"
            }`}
          >
            <StyledText
              size="1.5rem"
              color={estMoisCourant ? "#FFFFFF" : "#A1A1A1"}
              backgroundColor={date.equals(aujActuel) ? "#65C97A" : "none"}
              padding=" 0 10px"
              borderRadius="25px"
            >
              <span>{date.day}</span>
            </StyledText>
            {events.some((event) => {
              //regarde si il y a au moins un event dans la journée
              const jourDuCalendrier = Temporal.PlainDate.from({
                year: date.year,
                month: date.month,
                day: date.day,
              });
              return event.estDeLaMemeJournnee(jourDuCalendrier);
            }) && (
              //regarde si les deux date sont pareil
              <div className="eventsDuJour">
                {events
                  .filter((event) => {
                    const jourDuCalendrier = Temporal.PlainDate.from({
                      year: date.year,
                      month: date.month,
                      day: date.day,
                    });
                    return event.estDeLaMemeJournnee(jourDuCalendrier);
                  })
                  .map((event, i) => (
                    <EventItem key={i} titre={event.nom} />
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
