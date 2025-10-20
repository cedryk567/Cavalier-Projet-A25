import { useState } from "react";
import "./Equipes.css";
import TeamCard from "./CarteEquipe";

function Equipes() {
  const equipes = [
    {
      nom: "Nageurs",
      image: "src/img/ImageNageur.png",
    },
    {
      nom: "Coureurs",
      image: "src/img/ImageNageur.png",
    },
    {
      nom: "Artilleurs",
      image: "src/img/ImageNageur.png",
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
