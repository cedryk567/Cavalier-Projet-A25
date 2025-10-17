//@ts-ignore
import FormActivationCompte from "../FormActivationCompte/FormActivationCompte.jsx";
import ImageChargement from "../ImageChargement/ImageChargement.jsx";
const GererEtatFormActivationCompte = ({
  estEnChargement,
  setEstEnChargement,
  setRequeteEstReussi,
  setReponseServeur,
}) => {
  if (!estEnChargement) {
    return (
      <FormActivationCompte
        setRequeteEstReussi={setRequeteEstReussi}
        setEstEnChargement={setEstEnChargement}
        setReponseServeur={setReponseServeur}
      />
    );
  } else {
    return <ImageChargement />;
  }
};
export default GererEtatFormActivationCompte;
