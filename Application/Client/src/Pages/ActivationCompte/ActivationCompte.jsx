import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "../../components/ui/Button/Button.jsx";
import { gereChangementForm } from "../../helper.jsx";
import { Checkbox, FormControlLabel } from "@mui/material";
function ActivationCompte() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [motDePasseEstInvalide, setMotDePasseEstInvalide] = useState({});
  const [montrerMotDePasse, setMontrerMotDePasse] = useState(false);
  return (
    <>
      <div
        className="text-white"
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <Button
          contenue={"Retour"}
          action={() => {
            navigate(-1);
          }}
        />
        <div id="backgroundForm">
          <Form>
            <h2>Entrez vos informations de compte</h2>
            <Form.Group>
              <Form.Control
                type={montrerMotDePasse ? "text" : "password"}
                placeholder="Mot de Passe"
                required
                value={form.mot_de_passe ? form.mot_de_passe : ""}
                isInvalid={motDePasseEstInvalide}
                onChange={(e) => {
                  gereChangementForm(
                    "mot_de_passe",
                    e.target.value,
                    setForm,
                    form
                  );
                }}
              />
              <Form.Control.Feedback type="invalid">
                placeholder
              </Form.Control.Feedback>
              <Form.Control
                type={montrerMotDePasse ? "text" : "password"}
                placeholder="Confirmez votre mot de passe"
                required
                value={
                  form.mot_de_passe_confirmation
                    ? form.mot_de_passe_confirmation
                    : ""
                }
                isInvalid={motDePasseEstInvalide}
                onChange={(e) => {
                  gereChangementForm(
                    "mot_de_passe_confirmation",
                    e.target.value,
                    setForm,
                    form
                  );
                }}
              />
              <Form.Control.Feedback type="invalid">
                placeholder
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <FormControlLabel
            control={
              <Checkbox
                checked={montrerMotDePasse}
                onChange={() => {
                  setMontrerMotDePasse(!montrerMotDePasse);
                }}
              />
            }
            label={
              montrerMotDePasse
                ? "Cacher le mot de passe"
                : "Montrer le mot de passe"
            }
          />
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
