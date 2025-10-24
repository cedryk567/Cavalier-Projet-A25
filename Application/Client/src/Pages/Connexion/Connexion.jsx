import React, { useState, useEffect } from "react";
import logoCavaliers from "../../img/Logo_Noir.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { connexion } from "../../server/api/routeUtilisateur.jsx";
//@ts-ignore
import MessageUtilisateur from "../../components/ComposantsMajeur/MessageUtilisateur/MessageUtilisateur.jsx";
import { postFormulaire, gereChangementForm } from "../../helper.jsx";
function Connexion() {
  const [reponseServeur, setReponseServeur] = useState({});
  const [erreurs, setErreurs] = useState({});
  const [form, setForm] = useState({});
  const [formEstInvalide, setFormEstInvalide] = useState();
  const [estEnChargement, setEstEnChargement] = useState(false);
  const [requeteEstReussi, setRequeteEstReussi] = useState(false);
  const styleInputField = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    border: "1.5px solid #65C97A",
    borderRadius: "8px",
    width: "300px",
    height: "3rem",
    color: "white",
    padding: "0 1rem",
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (requeteEstReussi) {
      navigate("/DashBoard");
    }
  }, [requeteEstReussi]);
  return (
    <div
      className="d-flex flex-column align-items-center text-white"
      style={{
        backgroundColor: "#0D0D0D",
        height: "100%",
        minHeight: "120vh",
        width: "100%",
      }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          backgroundColor: "#1A1A1A",
          borderRadius: "1rem",
          margin: "3rem",
          maxWidth: "500px",
          width: "40%",
        }}
      >
        <img
          src={logoCavaliers}
          alt="Logo Cavaliers"
          style={{ height: "7rem" }}
        />
        <h1 style={{ color: "#65C97A", fontFamily: "Koulen" }}>
          Connectez-Vous
        </h1>
        <h2
          style={{
            maxWidth: "72%",
            textAlign: "center",
            fontFamily: "Graduate",
          }}
        >
          Chaque connexion vous rapproche de la victoire.
        </h2>

        <MessageUtilisateur
          status={reponseServeur.status}
          message={reponseServeur.message}
        />

        <Form
          className="d-flex flex-column align-items-center needs-validation"
          style={{ gap: "1rem", width: "70%", marginTop: "1rem" }}
          onSubmit={(e) => {}}
          noValidate
        >
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
              style={styleInputField}
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un email valide
            </Form.Control.Feedback>
            <Form.Control.Feedback>
              Veuillez entrer un email valide
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="mot_de_passe">
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              isInvalid={formEstInvalide}
              required
              value={form.mot_de_passe ? form.mot_de_passe : ""}
              onChange={(e) =>
                gereChangementForm(
                  "mot_de_passe",
                  e.target.value,
                  setForm,
                  setErreurs,
                  form,
                  erreurs,
                  setFormEstInvalide
                )
              }
              style={styleInputField}
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mot de passe
            </Form.Control.Feedback>
          </Form.Group>

          <p style={{ color: "#65C97A", cursor: "pointer" }}>
            Mot de passe oublié?
          </p>

          <Button
            type="submit"
            className="justify-content-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              border: "1.5px solid #65C97A",
              borderRadius: "15px",
              color: "white",
              height: "3rem",
              padding: "0.6rem 1.4rem",
            }}
          >
            Se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Connexion;

const classNameRandom = "d-flex flex-column align-items-center text-white";
