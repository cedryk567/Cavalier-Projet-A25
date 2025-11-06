import { useEffect, useRef } from "react";
import "./ImageChargement.css";
import { envoyerCourriel } from "../../../server/api/routeUtilisateur";
import { standAloneAsyncFonction } from "../../../helper";
import { useNavigate } from "react-router-dom";
const ImageChargement = ({
  estEnChargement,
  setReponseServeur,
  setEstEnChargement,
  courriel,
  setForm,
  iteration,
}) => {
  const navigate = useNavigate();
  const appelEnvoyeRef = useRef(false);
  useEffect(() => {
    if (!estEnChargement || !courriel || appelEnvoyeRef.current) {
      return;
    }
    console.log(appelEnvoyeRef.current);
    appelEnvoyeRef.current = true;
    console.log(`Courriel live : ${courriel}`);
    if (!courriel) {
      return;
    }
    standAloneAsyncFonction(async () =>
      setReponseServeur(await envoyerCourriel(courriel))
    );
    setEstEnChargement(false);
    setForm({});
    navigate("/ActivationCompte", { state: { courriel } });
  }, []);
  return (
    <>
      <div id="loading-spinning" />
    </>
  );
};
export default ImageChargement;
