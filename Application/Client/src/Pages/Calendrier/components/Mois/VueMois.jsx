// src/Pages/Calendrier/components/VueMois.jsx
import "./VueMois.css";
import { getDateCalendrier } from "../../getDateCalendrier";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";

export const VueMois = ({ jourSelectionner, events }) => {
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
            <StyledText size="1.5rem">
              <span>{date.day}</span>
            </StyledText>
          </div>
        ))}
      </div>
    </div>
  );
};
