import { useState } from "react";
import "./APropos.css";
import logoCavaliers from "../../img/Logo_Noir.png";
import photoAlbert from "../../img/Albert.png";
import photoEspritEquipe from "../../img/espritEquipe.jpg";
import photoDepassementSoi from "../../img/depassementSoi.jpg";
import photoPerseverance from "../../img/perseverance.jpg";
import photoCoureurPlage from "../../img/coureurPlage.jpg";
import photoButFoot from "../../img/butFoot.jpg";
import photoTennis from "../../img/tennis.jpg";
import { NavbarGeneral } from "../../components/ui/NavbarGeneral/NavbarGeneral";
import Footer from "../../components/ui/Footer/Footer";

function APropos() {
  const [active, setActive] = useState("APROPOS");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const allignerCentre = "d-flex flex-column align-items-center";
  return (
    <>
      <div className={`pageAPropos ${allignerCentre}`}>
        <NavbarGeneral />

        <div className={`titresAPropos ${allignerCentre}`}>
          <h1> NOTRE HISTOIRE ET NOTRE EQUIPE </h1>
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

        {/* Le Collège */}
        <div className={`containerBdeb ${allignerCentre}`}>
          <h1>Le College de Bois-de-Boulogne</h1>
          <p className="descriptionBdeb">
            Le Collège de Bois-de-Boulogne est un établissement d'enseignement
            supérieur situé à Montréal, reconnu pour la qualité de ses
            programmes académiques et son engagement dans la réussite étudiante.
            Avec une vie étudiante dynamique, le collège offre un environnement
            où l'excellence scolaire et le développement personnel se
            rencontrent.
          </p>
        </div>

        {/* Notre Vision*/}
        <div className={`containerVision ${allignerCentre}`}>
          <h1>Notre vision</h1>

          <div className="ligneVision">
            <div className="rond gauche"></div>
            <div className="rond centre"></div>
            <div className="rond droite"></div>
          </div>
        </div>

        <div className="cartesVision">
          <div className="carteVision">
            <h2>Esprit d'equipe</h2>
            <img
              src={photoEspritEquipe}
              alt="Esprit d'équipe"
              className="imageVision"
            />
            <p>
              Unir les étudiants-athlètes dans un esprit de collaboration et de
              solidarité.
            </p>
          </div>

          <div className="carteVision">
            <h2>Depassement de soi</h2>
            <img
              src={photoDepassementSoi}
              alt="Dépassement de soi"
              className="imageVision"
            />
            <p>
              Repousser ses limites pour atteindre l'excellence sportive et
              personnelle.
            </p>
          </div>

          <div className="carteVision">
            <h2>Perseverance</h2>
            <img
              src={photoPerseverance}
              alt="Persévérance"
              className="imageVision"
            />
            <p>
              Se dépasser chaque jour grâce au travail acharné et à la
              discipline.
            </p>
          </div>
        </div>

        {/* Notre Histoire / Mission / Équipes */}
        <div className="containerSections">
          <div className="sectionBloc">
            <img
              src={photoCoureurPlage}
              alt="Coureur sur la plage"
              className="sectionImage"
            />
            <div className="sectionTexte">
              <h2>L'histoire des Cavaliers</h2>
              <p>
                Les Cavaliers de Bois-de-Boulogne ont été créés pour représenter
                fièrement le collège à travers plusieurs disciplines sportives.
                Depuis leur fondation, ils incarnent les valeurs de
                persévérance, d'esprit d'équipe et de fierté, inspirant toute la
                communauté de BdeB.
              </p>
            </div>
          </div>

          <div className="sectionBloc inverse">
            <img
              src={photoButFoot}
              alt="But de foot au coucher du soleil"
              className="sectionImage"
            />
            <div className="sectionTexte">
              <h2>Notre mission</h2>
              <p>
                Notre mission est de soutenir le développement des athlètes tout
                en représentant le Collège de Bois-de-Boulogne avec honneur. Les
                Cavaliers visent à inspirer la jeunesse, promouvoir un mode de
                vie actif et renforcer les liens communautaires grâce au sport.
              </p>
            </div>
          </div>

          <div className="sectionBloc" style={{ marginBottom: "5%" }}>
            <img
              src={photoTennis}
              alt="Balles de tennis"
              className="sectionImage"
            />
            <div className="sectionTexte">
              <h2>Nos equipes sportives</h2>
              <p>
                Les Cavaliers rassemblent des équipes dans plusieurs disciplines
                telles que le basketball, le soccer et le volleyball. Chaque
                équipe porte fièrement les couleurs du collège et représente la
                passion et la détermination de ses athlètes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default APropos;
