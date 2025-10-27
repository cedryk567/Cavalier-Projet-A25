import React, { useState } from "react";
import "./Connexion.css";
import logoCavaliers from "../../img/Logo_Noir.png";
import Button from "../../components/ui/Button/Button.jsx";
import Form from "react-bootstrap/Form";

import { Link, useNavigate } from "react-router-dom";
import { connexion } from "../../server/api/routeUtilisateur.jsx";
//@ts-ignore
import MessageUtilisateur from "../../components/ComposantsMajeur/MessageUtilisateur/MessageUtilisateur.jsx";
import {
  postFormulaire,
  gereChangementForm,
  objetEstVide,
} from "../../helper.jsx";
function Connexion() {
  const [reponseServeur, setReponseServeur] = useState({});
  const [form, setForm] = useState({});
  const [formEstInvalide, setFormEstInvalide] = useState();
  const navigate = useNavigate();
  const allignerCentre = "d-flex flex-column align-items-center";

  return (
    <div className={`text-white pageConnexion ${allignerCentre}`}>
      <Button
        gererClic={() => {
          navigate(-1);
          console.log("retour click");
        }}
        contenue={"Retour"}
      />

      <div className={`containerConnexion ${allignerCentre}`}>
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
        />

        <Form
          className={`needs-validation connexionFormulaire ${allignerCentre}`}
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
              isInvalid={courrielEstInvalide}
              onChange={(e) =>
                gereChangementForm("courriel", e.target.value, setForm, form)
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
              isInvalid={motDePasseEstInvalide}
              required
              value={form.mot_de_passe ? form.mot_de_passe : ""}
              onChange={(e) =>
                gereChangementForm(
                  "mot_de_passe",
                  e.target.value,
                  setForm,
                  form
                )
              }
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mot de passe
            </Form.Control.Feedback>
          </Form.Group>

          <p className="motDePasseOublie">Mot de passe oublié?</p>

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
const contientErreur = (erreurs, valeur) => {
  for (let i = 0; i < erreurs.length; i++) {
    if (erreurs[i].includes(valeur)) {
      return true;
    }
  }
  return false;
};
export default Connexion;
