import { useState } from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { postFormulaire } from "../helper";
function Inscription() {
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
        <div id="backgroundForm">
          <Form
            onSubmit={(e) => {
              postFormulaire(
                e,
                setReponseServeur,
                erreurs,
                setFormEstInvalide,
                async () => {
                  return fetch(
                    `http://127.0.0.1:8080/utilisateur/envoyerCourriel/${form.courriel}`,
                    {
                      method: "POST",
                      credentials: "include",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: {},
                    }
                  );
                },
                setRequeteEstReussi
              );
            }}
            noValidate
          >
            <h1>Inscription</h1>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Inscription;
