import { useEffect } from "react";
import "./ImageChargement.css";
import { envoyerCourriel } from "../../../server/api/routeUtilisateur";
import { standAloneAsyncFonction } from "../../../helper";
const ImageChargement = ({
  estEnChargement,
  setReponseServeur,
  setEstEnChargement,
  courriel,
  setForm,
}) => {
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
    }
  }, [estEnChargement, courriel]);
  return (
    <>
      <div id="loading-spinning" />
    </>
  );
};
export default ImageChargement;
