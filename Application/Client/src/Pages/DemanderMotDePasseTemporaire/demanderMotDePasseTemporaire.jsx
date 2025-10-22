import Button from "react-bootstrap/Button";
import { useState } from "react";
import FormActivationCompte from "../../components/ComposantsMajeur/FormActivationCompte/FormActivationCompte.jsx";
import ImageChargement from "../../components/ComposantsMajeur/ImageChargement/ImageChargement.jsx";
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
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderColor: "#65C97A",
            borderRadius: "15px",
            color: "white",
            maxHeight: "50px",
            width: "100px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Retour
        </Button>
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
