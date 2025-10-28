import { useNavigate } from "react-router-dom";

import "./Accueil.css";
import {
  Card,
  CardImage,
} from "../../components/ComposantsMajeur/StyledComponents/Card.style";
import { NavbarGeneral } from "../../components/ui/NavbarGeneral/NavbarGeneral";
import LogoImage from "../../../src/img/LogoImage";
import LogoVarianteText from "../../../src/img/LogoVarianteText";
import { useEffect, useState } from "react";

function Accueil() {
  const navigate = useNavigate();
  const [active, setActive] = useState("ACCUEIL");
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

  const [gallery1, setGallery1] = useState([]);
  const [gallery2, setGallery2] = useState([]);

  useEffect(() => {
    setGallery1(imageList1);
    setGallery2(imageList2);
  }, []);

  return (
    <div className="pageReset">
      <div className="logoWrap">
        <LogoImage />
      </div>

      <NavbarGeneral />
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
              onClick={() => navigate("/connexion")}
            >
              Connexion
            </button>
            <button className="connexionBtn">Activer son compte</button>
          </div>
        </div>

        {/**besoin d'un className et d'un css*/}
        <div className="card-principal">
          <Card variation="image" width="60%" height="30%">
            <CardImage
              src="src\img\blabla.png"
              alt="nageur"
              variation="image"
            />
          </Card>
        </div>

        <div>
          <h2 className="subtitleTitle">Toutes les options disponibles</h2>
        </div>

        {/* Section des trucs offerts */}
        <div className="infoSection">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src\img\exampleImg.png"
              alt="nageur"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Planifierz votre victoire</h2>
            <p>
              Visualisez toutes vos pratiques,
              <br /> matchs et evenements importants <br /> en un seul endroit.
            </p>
          </div>
        </div>
        <div className="infoSection reverse">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src\img\exampleImg.png"
              alt="nageur"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Gagnez ensemble</h2>
            <p>
              Discutez en direct avec vos <br /> coequipiers, echangez vos
              strategies <br /> et restez motives a chaque etape de <br /> votre
              parcours.
            </p>
          </div>
        </div>
        <div className="infoSection">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src\img\exampleImg.png"
              alt="nageur"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Preparez-vous comme un pro</h2>
            <p>
              Telechargez vos plans d'entrainement, <br /> strategies et
              documents partages par <br /> le coach. Chaque detail compte pour{" "}
              <br /> atteindre vos objectifs.
            </p>
          </div>
        </div>
        <div className="infoSection reverse">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src\img\exampleImg.png"
              alt="nageur"
              variation="image"
            />
          </Card>
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
            <div className="top-galleryCard">
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
            <div className="bottom-galleryCard">
              {gallery2.map((src, i) => (
                <img key={i} src={src} alt={`illustration ${i}`} />
              ))}
              {gallery2.map((src, i) => (
                <img key={i} src={src} alt={`illustration ${i}`} />
              ))}
            </div>
          </div>
        </div>

        {/* end of page */}
        <div className="LogoFin">
          <LogoVarianteText />
        </div>
      </main>
    </div>
  );
}

export default Accueil;
