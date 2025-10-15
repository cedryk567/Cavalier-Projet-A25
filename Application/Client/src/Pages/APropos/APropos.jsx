import { useState } from "react";
import "./APropos.css";
import logoCavaliers from "../../img/Logo_Noir.png";
import photoAlbert from "../../img/Albert.png";

function APropos() {
  const [active, setActive] = useState("APROPOS");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const allignerCentre = "d-flex flex-column align-items-center";
  return (
    <>
      <div className={`pageAPropos ${allignerCentre}`}>
        {/* Barre Navigation + Logo */}
        <div className="barreNavigation">
          <img
            src={logoCavaliers}
            alt="Logo Cavaliers"
            className="logoCavaliers"
            style={{ height: "4rem" }}
          />

          <nav className="menuNav">
            <a href="#" className="navLink active">
              ACCUEIL
            </a>
            <a href="#" className="navLink">
              À PROPOS
            </a>
            <a href="#" className="navLink">
              NOS ÉQUIPES
            </a>
          </nav>
        </div>

        <div className={`titresAPropos ${allignerCentre}`}>
          <h2> A PROPOS </h2>
          <h1> NOTRE HISTOIRE, NOTRE EQUIPE </h1>
        </div>

        {/* Albert */}
        <div className={`containerAPropos ${allignerCentre}`}>
          <div className="containerAlbert">
            <img
              src={photoAlbert}
              alt="Chien Cavaliers"
              className="photoChien"
            />
            <p className="legendeAlbert">
              Albert de Boulogne - Avril 2024 <br />
              <span>Josianne Milliard</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default APropos;
