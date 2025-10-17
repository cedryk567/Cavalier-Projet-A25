import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import GererEtatForm from "../../components/ComposantsMajeur/GererEtatFormActivationCompte/GererEtatFormActivationCompte.jsx";
import MessageUtilisateur from "../../components/ComposantsMajeur/MessageUtilisateur/MessageUtilisateur.jsx";
import "./ActivationCompte.css";
function ActivationCompte() {
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [requeteEstReussi, setRequeteEstReussi] = useState(false);
  const [reponseServeur, setReponseServeur] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`Requete reussi : ${requeteEstReussi}`);
    if (requeteEstReussi) {
      setTimeout(() => {}, 500);
    }
  }, [requeteEstReussi]);

  return (
    <>
      <div
        className="d-flex  text-white"
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
          <MessageUtilisateur
            status={reponseServeur.status}
            message={reponseServeur.message}
          />
          <GererEtatForm
            estEnChargement={estEnChargement}
            setRequeteEstReussi={setRequeteEstReussi}
            setEstEnChargement={setEstEnChargement}
            setReponseServeur={setReponseServeur}
          />
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
