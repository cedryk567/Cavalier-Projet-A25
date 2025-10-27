import { useEffect } from "react";
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
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (estEnChargement && courriel) {
      console.log(`Courriel live : ${courriel}`);
      if (!courriel) {
      }
      standAloneAsyncFonction(async () =>
        setReponseServeur(await envoyerCourriel(courriel))
      );
      setEstEnChargement(false);
      setForm({});
      navigate("/ActivationCompte");
    }
  }, [estEnChargement, courriel]);
  return (
    <>
      <div id="loading-spinning" />
    </>
  );
};
export default ImageChargement;
