import { useState } from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { postFormulaire } from "../../helper.jsx";
function ActivationCompte() {
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
          <Form>
            <h1>Inscription</h1>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ActivationCompte;
