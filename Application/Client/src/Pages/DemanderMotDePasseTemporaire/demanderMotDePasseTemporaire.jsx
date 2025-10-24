import { useEffect, useState } from "react";
import FormActivationCompte from "../../components/ComposantsMajeur/FormActivationCompte/FormActivationCompte.jsx";
import ImageChargement from "../../components/ComposantsMajeur/ImageChargement/ImageChargement.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

import "./demanderMotDePasseTemporaire.css";
function ActivationCompte() {
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [reponseServeur, setReponseServeur] = useState({});
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    console.log(form);
  }, [form]);
  return (
    <>
      <div
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <Button
          contenue={"Retour"}
          action={() => {
            navigate("/");
          }}
        />
        <div id="backgroundForm">
          {!estEnChargement ? (
            <FormActivationCompte
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
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
