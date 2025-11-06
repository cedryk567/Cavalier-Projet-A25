import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { postFormulaire } from "../../../helper.jsx";
import { verifierCourriel } from "../../../server/api/routeUtilisateur.jsx";
import MessageUtilisateur from "../MessageUtilisateur/MessageUtilisateur.jsx";
import { gereChangementForm, objetEstVide } from "../../../helper.jsx";
import Button from "../../ui/Button/Button.jsx";
function FormDemanderMotDePasseTemporaire({
  setEstEnChargement,
  reponseServeur,
  setReponseServeur,
  form,
  setForm,
}) {
  const [courrielEstInvalide, setCourrielEstInvalide] = useState(false);
  useEffect(() => {
    if (objetEstVide(reponseServeur)) return;
    if (objetEstVide(form)) {
      setCourrielEstInvalide(true);
      return;
    }
    const contientErreur = reponseServeur.erreurs?.some(
      (erreur) => erreur.length !== 0
    );
    setCourrielEstInvalide(contientErreur);

    if (!contientErreur && reponseServeur.status === 200) {
      setEstEnChargement(true);
    }
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
          />

          <Form.Control.Feedback type="invalid">
            Veuillez entrer un email valide
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" contenue={"Confirmer"} action={() => {}} />
      </Form>
    </>
  );
}

export default FormDemanderMotDePasseTemporaire;
