import React, { useState } from "react";
import { fakeUser, fakeEquipes, fakeStats } from "./donnees/faussesStats";
import { TableauStats } from "./components/TableauStats";
import GraphiqueStats from "./components/GraphiqueStats";
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
        <h2>Statistiques</h2>

        <div className="info-equipe">
          <h3>{equipeActuelle?.sport}</h3>

          <div className="info-lignes">
            <div class="info-cellule">
              <strong>Coach :</strong> {equipeActuelle?.coach}
            </div>
            <div class="info-cellule">
              <strong>Session :</strong> {equipeActuelle?.session}
            </div>
            <div class="info-cellule">
              <strong>Catégorie :</strong> {equipeActuelle?.categorie}
            </div>
          </div>
        </div>

        <TableauStats statsTableau={mesStats} />
        <GraphiqueStats sport={equipeActuelle.sport} data={mesStats} />
      </div>
    </>
  );
}

export default Statistiques;
