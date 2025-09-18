import { useState } from "react";
import logoCavaliers from '../../img/Logo_Noir.png';

function Connexion() {
  return (
  
    <div className="d-flex flex-column align-items-center text-white" style={{backgroundColor: "#0D0D0D", height: "100%", width: "100%"}}>
      
      {/* Container du formulaire */}
      <div className="d-flex flex-column align-items-center" style={{paddingTop:"3rem", paddingBottom:"3rem", backgroundColor: "#1A1A1A", borderRadius: "1rem", margin: "6rem", gap: "1.5rem"}}>
        
        <img src={logoCavaliers} style={{height: "10rem"}} />
        <h1 style={{color:"#65C97A"}}> Connectez-Vous</h1>
        <h2 style={{maxWidth: "70%", textAlign:"center"}}> Chaque connexion vous rapproche de la victoire. </h2>

        <form className="d-flex flex-column align-items-center" style={{gap: "0.5rem", width: "70%"}}>
          <input type="email" placeholder="Adresse courriel" required style={{backgroundColor:"rgba(0, 0, 0, 0.4)", borderColor:"#65C97A", borderRadius:"5px", width:"100%", height:"3rem"}}/>
          <input type="password" placeholder="Mot de passe" required style={{backgroundColor:"rgba(0, 0, 0, 0.4)", borderColor:"#65C97A", borderRadius:"5px", width:"100%", height:"3rem"}}/>
          <p style={{color:"#65C97A"}} >Mot de passe oublié?</p>          
          <button type="submit" style={{backgroundColor:"rgba(0, 0, 0, 0.4)", borderColor:"#65C97A", borderRadius:"15px", color: "white", height:"3rem"}}>Se connecter</button>
        </form>

      </div>

    </div>
  );
}

export default Connexion;
