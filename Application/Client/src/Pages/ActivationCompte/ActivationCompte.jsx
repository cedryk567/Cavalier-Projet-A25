import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { gereChangementForm } from "../Connexion/helper.jsx";
import { postFormulaire } from "./helper.jsx";
import { useNavigate } from "react-router-dom";
import MessageUtilisateur from "../../components/MessageUtilisateur.jsx";
function ActivationCompte() {
  const [reponseServeur, setReponseServeur] = useState({});
  const [requeteEstReussi, setRequeteEstReussi] = useState(false);
  const [erreurs, setErreurs] = useState({});
  const [form, setForm] = useState({});
  const [formEstInvalide, setFormEstInvalide] = useState();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="d-flex  text-white"
        style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
      >
        <Button
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderColor: "#65C97A",
            borderRadius: "15px",
            color: "white",
            maxHeight: "50px",
            width: "100px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Retour
        </Button>
        <div
          className="d-flex flex-column align-items-center"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "3rem",
            backgroundColor: "#1A1A1A",
            borderRadius: "1rem",
            maxWidth: "800px",
            maxHeight: "250px",
          }}
        >
          <Form
            onSubmit={(e) => {
              postFormulaire(
                e,
                setReponseServeur,
                erreurs,
                setFormEstInvalide,
                async () => {
                  return fetch(
                    "http://127.0.0.1:8080/activationCompte/verifierExistanceUtilisateur",
                    {
                      method: "PUT",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        courriel: form.courriel,
                      }),
                    }
                  );
                },
                setRequeteEstReussi
              );
            }}
            noValidate
          >
            <h2>Veuillez entrer votre email d'athlète</h2>
            <MessageUtilisateur
              status={reponseServeur.status}
              message={reponseServeur.message}
            />
            <Form.Group controlId="courriel">
              <Form.Control
                type="email"
                placeholder="Adresse courriel"
                required
                value={form.courriel ? form.courriel : ""}
                isInvalid={formEstInvalide}
                onChange={(e) =>
                  gereChangementForm(
                    "courriel",
                    e.target.value,
                    setForm,
                    setErreurs,
                    form,
                    erreurs
                  )
                }
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
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
