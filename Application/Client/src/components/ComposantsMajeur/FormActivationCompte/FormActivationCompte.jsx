import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { gereChangementForm } from "../../../helper.jsx";
import { postFormulaire } from "../../../helper.jsx";
import Button from "react-bootstrap/Button";
import { envoyerCourriel } from "../../../server/api/routeUtilisateur.jsx";
const FormActivationCompte = ({
  setEstEnChargement,
  setRequeteEstReussi,
  setReponseServeur,
}) => {
  const [erreurs, setErreurs] = useState({});
  const [form, setForm] = useState({});
  const [formEstInvalide, setFormEstInvalide] = useState(false);
  useEffect(() => {
    if (!form.courriel) {
      setErreurs({
        ...erreurs,
        ["courriel"]: true,
      });
    }
  }, []);
  return (
    <>
      <Form
        onSubmit={(e) => {
          postFormulaire(
            e,
            setReponseServeur,
            erreurs,
            setFormEstInvalide,
            envoyerCourriel(form),
            setRequeteEstReussi,
            setEstEnChargement
          );
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
            value={form.courriel ? form.courriel : ""}
            isInvalid={formEstInvalide}
            onChange={(e) => {
              gereChangementForm(
                "courriel",
                e.target.value,
                setForm,
                setErreurs,
                form,
                erreurs,
                setEstEnChargement
              );
            }}
            onBeforeInput={(e) => {
              gereChangementForm(
                "courriel",
                e.target.value,
                setForm,
                setErreurs,
                form,
                erreurs,
                setEstEnChargement
              );
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
};
export default FormActivationCompte;
