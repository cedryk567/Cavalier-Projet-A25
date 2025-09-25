import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoCavaliers from "../../img/Logo_Noir.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//@ts-ignore
import MessageUtilisateur from "../../components/MessageUtilisateur.jsx";

function Connexion() {
  const [reponseServeur, setReponseServeur] = useState({});
  const [erreurs, setErreurs] = useState({});
  const [form, setForm] = useState({});
  const styleInputField = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderColor: "#65C97A",
    borderRadius: "5px",
    width: "300px",
    height: "3rem",
    color: "white",
    padding: "0 1rem",
  };

  const navigate = useNavigate();

  async function postFormulaire(e) {
    e.preventDefault();
    try {
      console.log("allo");
      for (var cle in erreurs) {
        if (erreurs.hasOwnProperty(cle)) {
          var val = erreurs[cle];
          if (val) {
            return;
          }
        }
      }
      console.log("Pas d'erreurs");
      const reponse = await fetch("http://127.0.0.1:8080/connexion", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courriel: form.courriel,
          mot_de_passe: form.mot_de_passe,
        }),
      });

      const status = reponse.status;
      const donnees = await reponse.json();

      setReponseServeur({ status: status, message: donnees.message });

      if (status !== 200) {
        console.error("Erreur lors de la connexion :", donnees.message);
        return;
      }

      console.log("Connexion réussie ");
      navigate("/DashBoard");
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  }
  //si une valeur est undefined on la defini comme une erreur pour indiquer a l'utilisateur qu'il doit rentrer quelque chose
  function gereChangementForm(entree, valeur) {
    setForm({
      ...form,
      [entree]: valeur,
    });
    if (!valeur) {
      setErreurs({
        ...erreurs,
        [entree]: true,
      });
      return;
    }
    if (!gererCasSpecial(entree, valeur)) {
      setErreurs({
        ...erreurs,
        [entree]: true,
      });
      return;
    }
    setErreurs({
      ...erreurs,
      [entree]: null,
    });
  }
  function gererCasSpecial(entree, valeur) {
    if (entree == "courriel") {
      return valeur
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    return true;
  }
  return (
    <div
      className="d-flex flex-column align-items-center text-white"
      style={{ backgroundColor: "#0D0D0D", height: "100vh", width: "100%" }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{
          padding: "3rem",
          backgroundColor: "#1A1A1A",
          borderRadius: "1rem",
          margin: "6rem",
          gap: "1.5rem",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <img
          src={logoCavaliers}
          alt="Logo Cavaliers"
          style={{ height: "10rem" }}
        />
        <h1 style={{ color: "#65C97A" }}>Connectez-Vous</h1>
        <h2 style={{ maxWidth: "100%", textAlign: "center" }}>
          Chaque connexion vous rapproche de la victoire.
        </h2>
        <MessageUtilisateur
          status={reponseServeur.status}
          message={reponseServeur.message}
        ></MessageUtilisateur>

        <Form
          className="d-flex flex-column align-items-center needs-validation"
          style={{ gap: "0.5rem", width: "100%" }}
          onSubmit={postFormulaire}
          noValidate
        >
          <Form.Group controlId="courriel">
            <Form.Control
              type="email"
              placeholder="Adresse courriel"
              required
              value={form.courriel ? form.courriel : ""}
              isInvalid={!!erreurs.courriel}
              onChange={(e) => gereChangementForm("courriel", e.target.value)}
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
              isInvalid={erreurs.mot_de_passe ? true : false}
              required
              value={form.mot_de_passe ? form.mot_de_passe : ""}
              onChange={(e) =>
                gereChangementForm("mot_de_passe", e.target.value)
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
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderColor: "#65C97A",
              borderRadius: "15px",
              color: "white",
              height: "3rem",
              width: "100%",
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
