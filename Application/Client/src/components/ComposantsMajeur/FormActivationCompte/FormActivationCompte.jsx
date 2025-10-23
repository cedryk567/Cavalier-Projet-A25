import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postFormulaire } from "../../../helper.jsx";
import {
  envoyerCourriel,
  verifierCourriel,
} from "../../../server/api/routeUtilisateur.jsx";
import MessageUtilisateur from "../MessageUtilisateur/MessageUtilisateur.jsx";
import { gereChangementForm } from "../../../helper.jsx";
function FormActivationCompte({ setEstEnChargement }) {
  const [reponseServeur, setReponseServeur] = useState({});
  const [courrielEstInvalide, setCourrielEstInvalide] = useState(false);
  const [form, setForm] = useState({});
  useEffect(() => {
    if (!reponseServeur) {
      console.log("Pas de form");
      return;
    }
    console.log("alo");
    for (let i = 0; i < reponseServeur.erreurs?.length; i++) {
      if (reponseServeur.erreurs[i].length !== 0) {
        console.log("Le courriel est invalid");
        setCourrielEstInvalide(true);
        return;
      }
    }
    if (reponseServeur?.status !== 200) {
      console.log(reponseServeur.message);
      return;
    }
    setEstEnChargement(true);
    const envoyer = async (courriel) => {
      await postFormulaire(envoyerCourriel(courriel));
      setEstEnChargement(false);
    };
    console.log(form.courriel);
    envoyer(form.courriel);
  }, [reponseServeur]);
  return (
    <>
      <MessageUtilisateur
        status={reponseServeur?.status}
        message={reponseServeur?.message}
      />
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          setForm(e);
          setReponseServeur(await postFormulaire(verifierCourriel(form)));
        }}
        noValidate
      >
        <h2>Veuillez entrer votre email d'athlète </h2>
        <Form.Group controlId="courriel">
          <Form.Control
            style={{ marginTop: "10px" }}
            type="email"
            placeholder="Adresse courriel"
            required
            value={form?.courriel ? form.courriel : ""}
            isInvalid={courrielEstInvalide}
            onChange={(e) => {
              gereChangementForm("courriel", e.target.value, setForm, form);
            }}
            onBeforeInput={(e) => {
              gereChangementForm("courriel", e.target.value, setForm, form);
            }}
          />

          <Form.Control.Feedback type="invalid">
            Veuillez entrer un email valide
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          type="submit"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderColor: "#65C97A",
            borderRadius: "15px",
            color: "white",
            height: "3rem",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Confirmer
        </Button>
      </Form>
    </>
  );
}

export default FormActivationCompte;
