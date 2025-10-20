import { useState } from "react";
import volleyball from "../../img/volleyball.png";
import natation from "../../img/natation.png";
import soccer from "../../img/soccer.png";
import basketball from "../../img/basketball.png";
import fustal from "../../img/futsal.png";
import badminton from "../../img/badminton.png";
import flagfootball from "../../img/flagfootball.png";
import frisbee from "../../img/frisbee.png";
import iconeVolleyball from "../../img/iconeVolleyball.png";
import iconeNatation from "../../img/iconeNatation.png";
import iconeSoccer from "../../img/iconeSoccer.png";
import iconeBasketball from "../../img/iconeBasketball.png";
import iconeFustal from "../../img/iconeFustal.png";
import iconeBadminton from "../../img/iconeBadminton.png";
import iconeFlagfootball from "../../img/iconeFlagfootball.png";
import iconeFrisbee from "../../img/iconeFrisbee.png";
import "./Equipes.css";
import TeamCard from "./CarteEquipe";

function Equipes() {
  const equipes = [
    {
      nom: "Natation",
      image: natation,
    },

    {
      nom: "Soccer",
      image: soccer,
    },

    {
      nom: "Basketball",
      image: basketball,
    },

    {
      nom: "Futsal",
      image: fustal,
    },

    {
      nom: "Volleyball",
      image: volleyball,
    },

    {
      nom: "Badminton",
      image: badminton,
    },

    {
      nom: "Flag-Football",
      image: flagfootball,
    },

    {
      nom: "Ultimate-Frisbee",
      image: frisbee,
    },
  ];
  return (
    <>
      <div className="backgroudPage">
        <div className="logoWrap">
          <img src="src\img\Logo.png" alt="logo" className="logoImg" />
        </div>

        <div className="topBar">
          <nav className="header">
            <a href="#home" className="link">
              ACCUEIL
            </a>
            <a href="#aboutus" className="link">
              À PROPOS
            </a>
            <a href="#teams" className="link">
              NOS ÉQUIPES
            </a>
          </nav>
        </div>
        <div className="cartesContainer">
          {equipes.map((equipe, index) => (
            <TeamCard key={index} nom={equipe.nom} image={equipe.image} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Equipes;
