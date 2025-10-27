import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Accueil.css";
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
  const imageList1 = [
    "src/img/image1.png",
    "src/img/image2.png",
    "src/img/image3.png",
    "src/img/image4.png",
    "src/img/image5.png",
    "src/img/image6.png",
    "src/img/image7.png",
    "src/img/image8.png",
    "src/img/image9.png",
    "src/img/image10.png",
    "src/img/image1.png",
    "src/img/image2.png",
    "src/img/image3.png",
    "src/img/image4.png",
    "src/img/image5.png",
    "src/img/image6.png",
    "src/img/image7.png",
    "src/img/image8.png",
    "src/img/image9.png",
    "src/img/image10.png",
  ];
  const imageList2 = [
    "src/img/image11.png",
    "src/img/image12.png",
    "src/img/image13.png",
    "src/img/image14.png",
    "src/img/image15.png",
    "src/img/image16.png",
    "src/img/image17.png",
    "src/img/image18.png",
    "src/img/image19.png",
    "src/img/image20.png",
    "src/img/image11.png",
    "src/img/image12.png",
    "src/img/image13.png",
    "src/img/image14.png",
    "src/img/image15.png",
    "src/img/image16.png",
    "src/img/image17.png",
    "src/img/image18.png",
    "src/img/image19.png",
    "src/img/image20.png",
  ];
  // function randomArrayImages(array) {
  //   const randomized = [...array];
  //   for (let i = randomized.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
  //   }
  //   return randomized;
  // }
  const [gallery1, setGallery1] = useState([]);
  const [gallery2, setGallery2] = useState([]);

  useEffect(() => {
    setGallery1(imageList1);
    setGallery2(imageList2);
  }, []);

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
            {/*YA UNE ERREUR CA SE RELIS MEME PAS WTF🤬🤬🤬*/}
            <h5 className="subtitle">
              DEPASSE TES LIMITES, ATTEINT L'EXCELLENCE
            </h5>
            {/* Bouton */}
            <div className="btnContainer">
              <button
                className="connexionBtn"
                onClick={() => navigate("/connexion")}
              >
                Connexion
              </button>
              <button className="connexionBtn">Activer son compte</button>
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

          {/* Section gallery */}
          <div className="gallerySection">
            <h2 className="subtitleTitle">
              des visages derriere chaque victoire
            </h2>
            {/* Première gallerie */}
            <div className="gallery">
              <div className="galleryCard">
                {gallery1.map((src, i) => (
                  <img key={i} src={src} alt={`illustration ${i}`} />
                ))}
                {gallery1.map((src, i) => (
                  <img key={i} src={src} alt={`illustration ${i}`} />
                ))}
              </div>
            </div>
            {/* Deuxième gallerie */}
            <div className="gallery">
              <div className="galleryCard">
                {gallery2.map((src, i) => (
                  <img key={i} src={src} alt={`illustration ${i}`} />
                ))}
                {gallery2.map((src, i) => (
                  <img key={i} src={src} alt={`illustration ${i}`} />
                ))}
              </div>
            </div>
            <script>fillGallery("gallery1"); fillGallery("gallery2");</script>
          </div>

          {/* end of page */}
          <img
            src="src\img\LogoCollegeCavaliers.png"
            alt="Logo cavaliers"
            className="logoCavaliers"
          />
        </main>
      </div>
    </>
  );
}

export default Accueil;
