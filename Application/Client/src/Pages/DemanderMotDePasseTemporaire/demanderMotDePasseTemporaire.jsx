import { useEffect, useRef, useState } from "react";
import FormDemanderMotDePasseTemporaire from "../../components/ComposantsMajeur/FormDemanderMotDePasseTemporaire/FormDemanderMotDePasseTemporaire.jsx";
import ImageChargement from "../../components/ComposantsMajeur/ImageChargement/ImageChargement.jsx";
import ButtonConnexion from "../../components/ui/ButtonRelatedComponents/ButtonConnexion.jsx";
import { useNavigate } from "react-router-dom";

import "./demanderMotDePasseTemporaire.css";
import { contientErreur } from "../../helper.jsx";
function ActivationCompte() {
  const iterationImageChargement = useRef(0);
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [reponseServeur, setReponseServeur] = useState({});
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  useEffect(() => {}, [form]);
  return (
    <>
      <div
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <ButtonConnexion
          contenue={"Retour"}
          action={() => {
            navigate(-1);
          }}
        />
        <div id="backgroundForm">
          {!estEnChargement ? (
            <FormDemanderMotDePasseTemporaire
              setEstEnChargement={setEstEnChargement}
              reponseServeur={reponseServeur}
              setReponseServeur={setReponseServeur}
              form={form}
              setForm={setForm}
            />
          ) : (
            <ImageChargement
              estEnChargement={estEnChargement}
              setReponseServeur={setReponseServeur}
              setEstEnChargement={setEstEnChargement}
              courriel={form.courriel}
              setForm={setForm}
              form={form}
              iteration={iterationImageChargement}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
