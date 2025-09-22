import { useState } from "react";
import logoCavaliers from "../../img/Logo_Noir.png";
//@ts-ignore
import MessageUtilisateur from "../../components/MessageUtilisateur.jsx";
function Connexion() {
  const [courriel, setCourriel] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [reponseServeur, setReponseServeur] = useState({});

  const styleInputField = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderColor: "#65C97A",
    borderRadius: "5px",
    width: "100%",
    height: "3rem",
    color: "white",
    padding: "0 1rem",
  };

  async function postFormulaire() {
    try {
      console.log();
      const reponse = await fetch("http://127.0.0.1:8080/connexion", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courriel, mot_de_passe: motDePasse }),
      });
      const status = reponse.status;
      const donnees = await reponse.json();
      setReponseServeur({ status: status, message: donnees.message });
      console.log(reponseServeur);
      if (!reponse.ok) {
        console.error("Erreur lors de la connexion :", donnees.message);
        return;
      }

      console.log("Connexion réussie :", donnees);
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
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
        <h2 style={{ maxWidth: "70%", textAlign: "center" }}>
          Chaque connexion vous rapproche de la victoire.
        </h2>
        <MessageUtilisateur
          status={reponseServeur.status}
          message={reponseServeur.message}
        ></MessageUtilisateur>
        <div
          className="d-flex flex-column align-items-center"
          style={{ gap: "0.5rem", width: "70%" }}
        >
          <input
            type="email"
            placeholder="Adresse courriel"
            required
            value={courriel}
            onChange={(e) => setCourriel(e.target.value)}
            style={styleInputField}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            style={styleInputField}
          />
          <p style={{ color: "#65C97A", cursor: "pointer" }}>
            Mot de passe oublié?
          </p>
          <button
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderColor: "#65C97A",
              borderRadius: "15px",
              color: "white",
              height: "3rem",
              width: "100%",
            }}
            onClick={postFormulaire}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
