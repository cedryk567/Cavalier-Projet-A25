import { useState } from "react";
import FormActivationCompte from "../../components/ComposantsMajeur/FormActivationCompte/FormActivationCompte.jsx";
import ImageChargement from "../../components/ComposantsMajeur/ImageChargement/ImageChargement.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

import "./demanderMotDePasseTemporaire.css";
function ActivationCompte() {
  const [estEnChargement, setEstEnChargement] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <Button
          contenue={"Retour"}
          action={() => {
            navigate("/Accueil");
          }}
        />
        <div id="backgroundForm">
          {!estEnChargement ? (
            <FormActivationCompte setEstEnChargement={setEstEnChargement} />
          ) : (
            <ImageChargement />
          )}
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
