import { useState } from "react";
import "./Accueil.css";

function Accueil() {
  const [active, setActive] = useState("ACCUEIL");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const imageWrapper = {
    width: "50%",
    height: "50%",
    // aspectRatio: "1 / 1",
    margin: "40px auto 0",
    borderRadius: "20px",
    overflow: "hidden",
    background: "black",
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    display: "block",
  };

  return (
    <>
      <div className="pageReset">
        <div className="logoWrap">
          <img src="src\img\Logo.png" alt="logo" className="logoImg" />
        </div>

        <div className="topBar">
          <nav className="header">
            <a href="#" className="link">
              ACCUEIL
            </a>
            <a href="#" className="link">
              À PROPOS
            </a>
            <a href="#" className="link">
              NOS ÉQUIPES
            </a>
          </nav>
        </div>

        <main className="content">
          <div className="textBlock">
            {/* Titre */}
            <h1 className="title">LA PERFORMANCE COMME SEULE DESTINATION</h1>
            {/* soustitre */}
            <h5 className="subtitle">
              DEPASSE TES LIMITES, ATTEINT L'EXCELLENCE
            </h5>
            {/* Bouton */}
            <button className="connexionBtn">Connexion</button>
          </div>

          <div style={imageWrapper}>
            <img src="src\img\blabla.png" alt="nageur" style={imageStyle} />
          </div>
        </main>
      </div>
    </>
  );
}

export default Accueil;
