import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ButtonConnexion from "../../components/ui/ButtonRelatedComponents/ButtonConnexion";
import "./Accueil.css";
import {
  Card,
  CardImage,
} from "../../components/ComposantsMajeur/StyledComponents/Card.style";
import { NavbarGeneral } from "../../components/ui/NavbarGeneral/NavbarGeneral";
import Footer from "../../components/ui/Footer/Footer";
import LogoVarianteText from "../../../src/img/LogoVarianteText";
import { postFormulaire, standAloneAsyncFonction } from "../../helper";
import { retournerSession } from "../../server/api/routeUtilisateur";

// Déplacer les listes d'images hors du composant pour éviter les re-rendus
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

function Accueil() {
  const navigate = useNavigate();
  const [active, setActive] = useState("ACCUEIL");
  const [gallery1, setGallery1] = useState([]);
  const [gallery2, setGallery2] = useState([]);
  const refReponseServeur = useRef({});
  const [estConnecte, setEstConnecte] = useState(false);
  const refChargement = useRef(0);
  useEffect(() => {
    if (refChargement.current > 0) return;
    refChargement.current++;
    setGallery1(imageList1);
    setGallery2(imageList2);
    const resultat = async () => {
      const resultat = await postFormulaire(retournerSession());
      refReponseServeur.current = resultat;
      console.log(refReponseServeur.current);
      if (refReponseServeur.current.status === 200) {
        setEstConnecte(true);
      }
    };
    resultat();
  }, []); // Dépendances vides maintenant que les listes sont hors du composant

  return (
    <div className="pageReset">
      <NavbarGeneral estConnecte={estConnecte} />
      <main className="content">
        <div className="textBlock">
          {/* Titre */}
          <h1 className="title">LA PERFORMANCE COMME SEULE DESTINATION</h1>
          {/* Sous-titre */}
          <h5 className="subtitle">
            DEPASSE TES LIMITES, ATTEINT L'EXCELLENCE
          </h5>
          {/* Boutons */}
          <div className="btnContainer">
            <ButtonConnexion
              contenue={"Connexion"}
              action={() => {
                navigate("/Connexion");
              }}
            />
            <ButtonConnexion
              contenue={"Activer son compte"}
              action={() => {
                navigate("/DemanderMotDePasseTemporaire");
              }}
            />
          </div>
        </div>

        {/* Card principal */}
        <div className="card-principal">
          <Card variation="image" width="60%" height="30%">
            <CardImage
              src="src/img/blabla.png"
              alt="nageur"
              variation="image"
            />
          </Card>
        </div>

        {/* Section des services offerts */}
        <div className="infoSection">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src/img/pexel-ameriacanFootball.jpg"
              alt="football américain"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Planifiez votre victoire</h2>
            <p>
              Visualisez toutes vos pratiques,
              <br /> matchs et événements importants <br /> en un seul endroit.
            </p>
          </div>
        </div>

        <div className="infoSection reverse">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src/img/pexel-equipeBasketball.jpg"
              alt="équipe de basketball"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Gagnez ensemble</h2>
            <p>
              Discutez en direct avec vos <br /> coéquipiers, échangez vos
              stratégies <br /> et restez motivés à chaque étape de <br /> votre
              parcours.
            </p>
          </div>
        </div>

        <div className="infoSection">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src/img/pexel-football.jpg"
              alt="football"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Préparez-vous comme un pro</h2>
            <p>
              Téléchargez vos plans d'entraînement, <br /> stratégies et
              documents partagés par <br /> le coach. Chaque détail compte pour{" "}
              <br /> atteindre vos objectifs.
            </p>
          </div>
        </div>

        <div className="infoSection reverse">
          <Card variation="image" width="30rem" height="30rem">
            <CardImage
              src="src/img/pexel-badminton.jpg"
              alt="badminton"
              variation="image"
            />
          </Card>
          <div className="textBox">
            <h2>Mesurez votre impact</h2>
            <p>
              Suivez vos performances,
              <br /> comparez vos résultats et <br /> repoussez vos limites.{" "}
              <br />
              Chaque chiffre raconte votre <br /> parcours vers la victoire
            </p>
          </div>
        </div>

        {/* Section gallery */}
        <div className="gallerySection">
          <h2 className="subtitleTitle">
            Des visages derrière chaque victoire
          </h2>
          {/* Première galerie */}
          <div className="gallery">
            <div className="top-galleryCard">
              {gallery1.map((src, i) => (
                <img key={`top-${i}`} src={src} alt={`illustration ${i}`} />
              ))}
              {gallery1.map((src, i) => (
                <img key={`top-dup-${i}`} src={src} alt={`illustration ${i}`} />
              ))}
            </div>
          </div>
          {/* Deuxième galerie */}
          <div className="gallery">
            <div className="bottom-galleryCard">
              {gallery2.map((src, i) => (
                <img key={`bottom-${i}`} src={src} alt={`illustration ${i}`} />
              ))}
              {gallery2.map((src, i) => (
                <img
                  key={`bottom-dup-${i}`}
                  src={src}
                  alt={`illustration ${i}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fin de page */}
        <div className="LogoFin">
          <LogoVarianteText />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Accueil;
