import "./NavbarCalendrier.css";
import RightArrowSVG from "../../../../img/RightArrowSVG";
import LeftArrowSVG from "../../../../img/LeftArrowSVG";
import PlusSVG from "../../../../img/PlusSVG";
import {
  StyledButtonSimpleSVG,
  StyledButtonSimpleBorder,
} from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { getDateCalendrier } from "../../getDateCalendrier";
import { background } from "@cloudinary/url-gen/qualifiers/focusOn";

export const NavbarCalendrier = ({
  aujActuel,
  jourSelectionner,
  miniCalendrierJourSelectionner,
  miniCalendrierMois,
  allerAuProchainMois,
  revenirAuDernierMois,
  onAjouterEvent,
  selectionnerJour,
}) => {
  const joursDuMois = getDateCalendrier(miniCalendrierMois);
  const moisNoms = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  const jourSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="cal-navbar">
      {/** bouton créer event*/}
      <div className="create-bouton">
        <StyledButtonSimpleBorder
          fontSize="1.3rem"
          colorText="white"
          svgSize="1.5rem"
          border="1px solid white"
          borderRadius="15px"
          padding="0.8rem 0.6rem"
          margin="0 1rem "
          marginText="0 0.6rem 0 0"
        >
          <span>Nouveau</span>
          <PlusSVG />
        </StyledButtonSimpleBorder>
      </div>
      {/** mini calendrier*/}
      <div className="mini-calendrierContainer">
        <div className="mini-calendrierNav">
          {/**nav du mini-calendrier */}
          <div className="mini-calendrierTitre">
            <StyledText size="1.2rem" margin="1.5rem" color="black">
              <span>
                {moisNoms[miniCalendrierMois.month - 1]}{" "}
                {miniCalendrierMois.year}
              </span>
            </StyledText>
          </div>
          <div className="mini-calendrierBouton">
            <StyledButtonSimpleSVG
              svgSize="1.5rem"
              onClick={revenirAuDernierMois}
              borderRadius="25px"
            >
              <LeftArrowSVG />
            </StyledButtonSimpleSVG>
            <StyledButtonSimpleSVG
              svgSize="1.5rem"
              onClick={allerAuProchainMois}
              borderRadius="25px"
            >
              <RightArrowSVG />
            </StyledButtonSimpleSVG>
          </div>
        </div>
        <div className="mini-calendrierContenue">
          {jourSemaine.map((jour, index) => (
            <div key={index} style={{ textAlign: "center", margin: "5px 0" }}>
              <StyledText color="black">{jour}</StyledText>
            </div>
          ))}
          {joursDuMois.map((jour, index) => {
            const isSelected = jour.date.equals(jourSelectionner);
            const isToday = jour.date.equals(aujActuel);
            const dayStr = jour.date.day.toString();
            const paddingValue =
              dayStr.length === 1 ? "0.3rem 0.6rem" : "0.3rem 0.3rem";

            let backgroundColor = "transparent";
            let textColor = "black";

            if (isSelected) {
              backgroundColor = "lightblue";
              textColor = "white";
            }

            if (isToday) {
              backgroundColor = "green";
              textColor = "white";
            }

            return (
              <div
                key={index}
                style={{ textAlign: "center", margin: "5px 0" }}
                onClick={() => selectionnerJour(jour.date)}
              >
                <StyledText
                  color={textColor}
                  borderRadius="15px"
                  backgroundColor={backgroundColor}
                  padding={paddingValue}
                >
                  <span>{jour.date.day}</span>
                </StyledText>
              </div>
            );
          })}
        </div>
      </div>
      {/** Type event (à voir)*/}
      {/** event favoris (à voir)*/}
    </div>
  );
};
