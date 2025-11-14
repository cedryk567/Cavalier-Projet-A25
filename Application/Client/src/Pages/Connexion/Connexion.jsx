import React, { useState, useEffect } from "react";
import logoCavaliers from "../../img/Logo_Noir.png";
import Button from "../../components/ui/Button/Button.jsx";
import Form from "react-bootstrap/Form";
import "./Connexion.css";

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
  const [courrielEstInvalide, setCourrielEstInvalide] = useState(false);
  const [motDePasseEstInvalide, setMotDePasseEstInvalide] = useState(false);
  const allignerCentre = "d-flex flex-column align-items-center";
  const navigate = useNavigate();

  useEffect(() => {
    console.log(reponseServeur);
    if (objetEstVide(reponseServeur)) return;
    if (objetEstVide(form)) {
      setCourrielEstInvalide(true);
      return;
    }
    const erreurs = reponseServeur.erreurs;
    setCourrielEstInvalide(contientErreur(erreurs, "courriel"));
    setMotDePasseEstInvalide(contientErreur(erreurs, "mot_de_passe"));
    if (reponseServeur.status === 200) {
      navigate("/DashBoard");
    }
  }, [reponseServeur]);

  return (
    <div className={`text-white pageConnexion ${allignerCentre}`}>
      <Button
        contenue={"Retour"}
        action={() => {
          navigate(-1);
          console.log("retour click");
        }}
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
          onSubmit={async (e) => {
            e.preventDefault();
            setReponseServeur(await postFormulaire(connexion(form)));
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

          <Link to="/DemanderMotDePasseTemporaire" className="motDePasseOublie">
            Mot de passe oublié?
          </Link>

          <Button
            type="submit"
            contenue={"Se connecter"}
            gererClic={null}
            variant="none" // pour que le css s'applique
            className="justify-content-center boutonConnexion"
          />
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
