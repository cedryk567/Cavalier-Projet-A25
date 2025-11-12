import { useEffect, useRef, useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import ButtonConnexion from "../../components/ui/ButtonRelatedComponents/ButtonConnexion.jsx";
import {
  contientErreur,
  gereChangementForm,
  postFormulaire,
} from "../../helper.jsx";
import { Checkbox, FormControlLabel } from "@mui/material";
import { activerCompte } from "../../server/api/routeUtilisateur.jsx";
import { objetEstVide } from "../../helper.jsx";
import MessageUtilisateur from "../../components/ComposantsMajeur/MessageUtilisateur/MessageUtilisateur.jsx";
function ActivationCompte() {
  const navigate = useNavigate();
  const formRef = useRef();

  const [form, setForm] = useState({
    nouveau_mot_de_passe: "",
    mot_de_passe_temporaire: "",
  });
  const [motDePasseEstInvalide, setMotDePasseEstInvalide] = useState(false);
  const [montrerMotDePasse, setMontrerMotDePasse] = useState(false);
  const [reponseServeur, setReponseServeur] = useState({});
  const [mot_de_passe_confirmation, set_mot_de_passe_confirmation] =
    useState("");
  const [erreurs, setErreurs] = useState({
    mot_de_passe_temporaire: false,
    nouveau_mot_de_passe: false,
    courriel: false,
  });
  const { state } = useLocation();
  const { courriel } = state;
  useEffect(() => {
    gereChangementForm("courriel", courriel, setForm, form);
    if (objetEstVide(reponseServeur)) return;
    setErreurs(
      contientErreur(reponseServeur, [
        "mot_de_passe_temporaire",
        "nouveau_mot_de_passe",
      ])
    );
    if (reponseServeur.status === 200) {
      navigate("/DashBoard");
    }
  }, [reponseServeur]);
  return (
    <>
      <div
        className="text-white"
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <ButtonConnexion
          contenue={"Retour"}
          action={() => {
            navigate(-1);
          }}
        />
        <div id="backgroundForm">
          <Form
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              if (mot_de_passe_confirmation !== form.nouveau_mot_de_passe)
                return;
              setReponseServeur(await postFormulaire(activerCompte(form)));
            }}
            noValidate
          >
            <MessageUtilisateur
              status={reponseServeur?.status}
              message={reponseServeur?.message}
            />
            <h2 className="mb-3">Entrez vos informations de compte</h2>
            <Form.Group>
              <div className="mb-2">
                <Form.Control
                  className="mb-2"
                  type={montrerMotDePasse ? "text" : "password"}
                  placeholder="Mot de Passe"
                  required
                  value={
                    form.mot_de_passe_temporaire
                      ? form.mot_de_passe_temporaire
                      : ""
                  }
                  isInvalid={erreurs.mot_de_passe_temporaire}
                  onChange={(e) => {
                    gereChangementForm(
                      "mot_de_passe_temporaire",
                      e.target.value,
                      setForm,
                      form
                    );
                  }}
                />
                <Form.Control.Feedback className="mb-2" type="invalid">
                  Vous devez entrer un mot de passe valide!
                </Form.Control.Feedback>
              </div>

              <div className="mb-2">
                <Form.Control
                  type={montrerMotDePasse ? "text" : "password"}
                  placeholder="Confirmez votre mot de passe"
                  required
                  value={
                    form.nouveau_mot_de_passe ? form.nouveau_mot_de_passe : ""
                  }
                  isInvalid={erreurs.nouveau_mot_de_passe}
                  onChange={(e) => {
                    gereChangementForm(
                      "nouveau_mot_de_passe",
                      e.target.value,
                      setForm,
                      form
                    );
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Vous devez entrer un mot de passe valide!
                </Form.Control.Feedback>
              </div>
              <div className="mb-2">
                <Form.Control
                  className="mb-2"
                  type={montrerMotDePasse ? "text" : "password"}
                  placeholder="Confirmez votre mot de passe"
                  required
                  value={mot_de_passe_confirmation}
                  isInvalid={erreurs.nouveau_mot_de_passe}
                  onChange={(e) => {
                    set_mot_de_passe_confirmation(e.target.value);
                  }}
                />
                <Form.Control.Feedback className="mb-2" type="invalid">
                  Vous devez entrer un mot de passe valide!
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <ButtonConnexion
              contenue={"Confirmer"}
              action={() => {
                if (formRef) {
                  formRef.current.requestSubmit();
                }
              }}
            />
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
