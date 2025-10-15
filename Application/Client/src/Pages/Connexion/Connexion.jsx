import React, { useState } from "react";
import "./Connexion.css";
import logoCavaliers from "../../img/Logo_Noir.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

//@ts-ignore
import MessageUtilisateur from "../../components/MessageUtilisateur.jsx";
import { postFormulaire, gereChangementForm } from "./helper.jsx";
function Connexion() {
  const [reponseServeur, setReponseServeur] = useState({});
  const [erreurs, setErreurs] = useState({});
  const [form, setForm] = useState({});
  const [formEstInvalide, setFormEstInvalide] = useState();
  const navigate = useNavigate();


  return (
    <div className="d-flex flex-column align-items-center text-white pageConnexion">     
      <div className="d-flex flex-column align-items-center containerConnexion">
        <img
          src={logoCavaliers}
          alt="Logo Cavaliers"
          style={{ height: "7rem" }}
        />
        <h1>Connectez-Vous</h1>
        <h2> Chaque connexion vous rapproche de la victoire.</h2>

        <MessageUtilisateur
          status={reponseServeur.status}
          message={reponseServeur.message}
        ></MessageUtilisateur>

        <Form
          className="d-flex flex-column align-items-center needs-validation connexionFormulaire"
          onSubmit={(e) => {
            postFormulaire(
              e,
              setReponseServeur,
              navigate,
              form,
              erreurs,
              setFormEstInvalide
            );
          }}
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
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mot de passe
            </Form.Control.Feedback>
          </Form.Group>

          <p className = "motDePasseOublie">
            Mot de passe oublié?
          </p>

          <Button
            type="submit"
            variant="none" // pour que le css s'applique
            className="justify-content-center boutonConnexion"
          >
            Se connecter
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Connexion;
