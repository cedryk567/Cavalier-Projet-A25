import { useState } from "react";
import volleyball from "../../img/volleyball.jpg";
import natation from "../../img/natation.jpg";
import soccer from "../../img/soccer.jpg";
import basketball from "../../img/basketball.jpg";
import fustal from "../../img/futsal.jpg";
import badminton from "../../img/badminton.jpg";
import flagfootball from "../../img/flagfootball.png";
import frisbee from "../../img/frisbee.jpg";
import iconeVolleyball from "../../img/iconeVolleyball.png";
import iconeNatation from "../../img/iconeNatation.png";
import iconeSoccer from "../../img/iconeFoot.png";
import iconeBasketball from "../../img/iconeBasketball.png";
import iconeFustal from "../../img/iconeFoot.png";
import iconeBadminton from "../../img/iconeBadminton.png";
import iconeFlagfootball from "../../img/iconeFlagfootball.png";
import iconeFrisbee from "../../img/iconeFrisbee.png";
import "./Equipes.css";
import TeamCard from "./CarteEquipe";
import { NavbarGeneral } from "../../components/ui/NavbarGeneral/NavbarGeneral";

function Equipes() {
  const equipes = [
    {
      nom: "Natation",
      image: natation,
      icone: iconeNatation,
      equipes: ["Mixte"],
    },

    {
      nom: "Soccer",
      image: soccer,
      icone: iconeSoccer,
      equipes: ["Feminin D3", "Masculin exterieur D1"],
    },

    {
      nom: "Basketball",
      image: basketball,
      icone: iconeBasketball,
      equipes: ["Feminin D13", "Masculin D3"],
    },

    {
      nom: "Futsal",
      image: fustal,
      icone: iconeFustal,
      equipes: ["Feminin D3"],
    },

    {
      nom: "Volleyball",
      image: volleyball,
      icone: iconeVolleyball,
      equipes: ["Feminin D3", "Masculin D3"],
    },

    {
      nom: "Badminton",
      image: badminton,
      icone: iconeBadminton,
      equipes: ["Mixte D1"],
    },

    {
      nom: "Flag-Football",
      image: flagfootball,
      icone: iconeFlagfootball,
      equipes: ["Feminin D3"],
    },

    {
      nom: "Ultimate-Frisbee",
      image: frisbee,
      icone: iconeFrisbee,
      equipes: ["Mixte"],
    },
  ];
  return (
    <>
      <div className="backgroudPage">
        <NavbarGeneral />
        <div className="cartesContainer">
          {equipes.map((equipe, index) => (
            <TeamCard
              key={index}
              nom={equipe.nom}
              image={equipe.image}
              icone={equipe.icone}
              equipes={equipe.equipes}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Equipes;
