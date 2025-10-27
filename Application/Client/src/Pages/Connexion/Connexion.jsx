import React, { useState, useEffect } from "react";
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
  const [courrielEstInvalide, setCourrielEstInvalide] = useState(false);
  const [motDePasseEstInvalide, setMotDePasseEstInvalide] = useState(false);
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
    <div
      className="d-flex flex-column align-items-center text-white"
      style={{
        backgroundColor: "#0D0D0D",
        height: "100%",
        minHeight: "120vh",
        width: "100%",
      }}
    >
      <Button
        gererClic={() => {
          navigate(-1);
          console.log("retour clicke");
        }}
        contenue={"Retour"}
      />
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
              style={styleInputField}
            />
            <Form.Control.Feedback type="invalid">
              Veuillez entrer un mot de passe
            </Form.Control.Feedback>
          </Form.Group>

          <Link
            to="/DemanderMotDePasseTemporaire"
            style={{ color: "#65C97A", cursor: "pointer" }}
          >
            Mot de passe oublié?
          </Link>

          <Button type="submit" contenue={"Se connecter"} gererClic={null} />
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
