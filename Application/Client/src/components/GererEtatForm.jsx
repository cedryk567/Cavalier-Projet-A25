//@ts-ignore
import FormActivationCompte from "./FormActivationCompte.jsx";
import ImageChargement from "./ImageChargement/ImageChargement.jsx";
const GererEtatForm = ({
  estEnChargement,
  setEstEnChargement,
  setRequeteEstReussi,
  setReponseServeur,
}) => {
  if (!estEnChargement) {
    return (
      <>
        <FormActivationCompte
          setRequeteEstReussi={setRequeteEstReussi}
          setEstEnChargement={setEstEnChargement}
          setReponseServeur={setReponseServeur}
        />
      </>
    );
  } else {
    return (
      <>
        <ImageChargement />
      </>
    );
  }
};
export default GererEtatForm;
