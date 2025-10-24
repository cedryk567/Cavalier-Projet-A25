import { useState } from "react";
import "http";

function Accueil() {
  const navigate = useNavigate();
  const [active, setActive] = useState("ACCUEIL");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const imageWrapper = {
    width: "50%",
    height: "50%",
    // aspectRatio: "1 / 1",
    margin: "40px auto 100px",
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
            <div className="btnContainer">
              <button
                className="connexionBtn"
                onClick={() => {
                  navigate("/Connexion");
                }}
              >
                Connexion
              </button>
              <button
                className="connexionBtn"
                onClick={() => {
                  navigate("/DemanderMotDePasseTemporaire");
                }}
              >
                Activer son compte
              </button>
            </div>
          </div>

          <div style={imageWrapper}>
            <img src="src\img\blabla.png" alt="nageur" style={imageStyle} />
          </div>
          <div>
            <h2 className="subtitleTitle">Toutes les options disponibles</h2>
          </div>

          {/* Section des trucs offerts */}
          <div className="infoSection">
            <div className="imageBox">
              <img src="src\img\exampleImg.png" alt="illustration 1" />
            </div>
            <div className="textBox">
              <h2>Planifierz votre victoire</h2>
              <p>
                Visualisez toutes vos pratiques,
                <br /> matchs et evenements importants <br /> en un seul
                endroit.
              </p>
            </div>
          </div>
          <div className="infoSection reverse">
            <div className="imageBox">
              <img src="src\img\exampleImg.png" alt="illustration 1" />
            </div>
            <div className="textBox">
              <h2>Gagnez ensemble</h2>
              <p>
                Discutez en direct avec vos <br /> coequipiers, echangez vos
                strategies <br /> et restez motives a chaque etape de <br />{" "}
                votre parcours.
              </p>
            </div>
          </div>
          <div className="infoSection">
            <div className="imageBox">
              <img src="src\img\exampleImg.png" alt="illustration 1" />
            </div>
            <div className="textBox">
              <h2>Preparez-vous comme un pro</h2>
              <p>
                Telechargez vos plans d'entrainement, <br /> strategies et
                documents partages par <br /> le coach. Chaque detail compte
                pour <br /> atteindre vos objectifs.
              </p>
            </div>
          </div>
          <div className="infoSection reverse">
            <div className="imageBox">
              <img src="src\img\exampleImg.png" alt="illustration 1" />
            </div>
            <div className="textBox">
              <h2>Mesurez votre impact</h2>
              <p>
                Suivez vos performances,
                <br /> comparez vos resultats et <br /> repoussez vos limites.{" "}
                <br />
                Chaque chiffre raconte votre <br /> parcours vers la victoire
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Accueil;
