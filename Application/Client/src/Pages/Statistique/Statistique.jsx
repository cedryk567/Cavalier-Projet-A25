import React, { useState } from "react";
import { fakeUser, fakeEquipes, fakeStats } from "./donnees/faussesStats";
import { StyledText } from "../../components/ComposantsMajeur/StyledComponents/Text.style";
import { TableauStats } from "./components/TableauStats";
import "./Statistique.css";

function Statistiques() {
  const [equipeSelectionnee] = useState(fakeUser.equipes[5]); // 1ere equipe par defaut (id 0)

  // trouver info de equipeSelectionnee
  const equipeActuelle = fakeEquipes.find((eq) => eq.id === equipeSelectionnee);

  // garder que les stats de l'euqipe selectionnee (avk le bon user)
  const statsEquipeActuelle = fakeStats.find(
    (statDonnee) =>
      statDonnee.equipeId === equipeSelectionnee &&
      statDonnee.joueurId === fakeUser.id
  );

  const mesStats =
    statsEquipeActuelle?.matchs || statsEquipeActuelle?.epreuves || [];

  return (
    <>
      <div className="statistiques-page">
        <StyledText size="1.8rem" margin="0 0 25px 0" fontFamily="Koulen">
          Statistiques
        </StyledText>

        <div className="info-equipe">
          <StyledText size="1.3rem" color="#00BF74" weight="700">
            {equipeActuelle?.sport}
          </StyledText>

          <div className="info-lignes">
            <div class="info-cellule">
              <StyledText weight="700">Coach :</StyledText>
              <StyledText color="#9b9b9b" margin="0 0 0 4px">
                {equipeActuelle?.coach}
              </StyledText>
            </div>
            <div class="info-cellule">
              <StyledText weight="700">Session :</StyledText>
              <StyledText color="#9b9b9b" margin="0 0 0 4px">
                {equipeActuelle?.session}
              </StyledText>
            </div>
            <div class="info-cellule">
              <StyledText weight="700">Catégorie :</StyledText>
              <StyledText color="#9b9b9b" margin="0 0 0 4px">
                {equipeActuelle?.categorie}
              </StyledText>
            </div>
          </div>
        </div>

        <TableauStats statsTableau={mesStats} />
      </div>
    </>
  );
}

export default Statistiques;
