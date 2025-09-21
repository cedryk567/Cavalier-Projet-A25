import { useState } from "react";
import logoCavaliers from '../../img/Logo_Noir.png';
const classNameRandom = "d-flex flex-column align-items-center text-white";
function Connexion() {
  return (
  
    <div className="d-flex flex-column align-items-center text-white" style={{backgroundColor: "#0D0D0D", height: "100%", minHeight: "120vh", width: "100%"}}>
      
      {/* Container du formulaire */}
      <div className="d-flex flex-column align-items-center" style={{paddingTop:"2rem", paddingBottom:"2rem", backgroundColor: "#1A1A1A", borderRadius: "1rem", margin: "3rem", gap: "1rem", width: "40%"}}>
        {/* <div className="d-flex flex-column align-items-center" style={{paddingTop:"3rem", paddingBottom:"3rem", backgroundColor: "#1A1A1A", borderRadius: "1rem", margin: "6rem", gap: "1.5rem", width: "40%"}}>*/}
        
        <img src={logoCavaliers} style={{height: "7rem"}} />
        <h1 style={{color:"#65C97A", fontFamily:"Koulen"}}> CONNECTEZ-VOUS</h1>
        <h3 style={{maxWidth: "72%", textAlign:"center", fontFamily:"Graduate"}}>  CHAQUE CONNECTION VOUS RAPPROCHE DE LA VICTOIRE.  </h3>

        <form className="d-flex flex-column align-items-center" style={{gap: "1rem", width: "70%", marginTop: "1rem"}}>
          <input type="email" placeholder="Adresse courriel" required style={{backgroundColor:"rgba(0, 0, 0, 0.4)", border:"1.5px solid #65C97A", borderRadius:"8px", borderWidth:"medium", width:"100%", height:"3.5rem", color:"white", padding: "0 1rem"}}/>
          <input type="password" placeholder="Mot de passe" required style={{backgroundColor:"rgba(0, 0, 0, 0.4)", border:"1.5px solid #65C97A", borderRadius:"8px", borderWidth:"medium", width:"100%", height:"3.5rem", color:"white", padding: "0 1rem"}}/>
          <p style={{color:"#65C97A"}} >Mot de passe oublié?</p>          
          <button className="justify-content-center" type="submit" style={{backgroundColor:"rgba(0, 0, 0, 0.4)", border:"1.5px solid #65C97A", borderRadius:"25px", color: "white", height:"3rem", padding: "0.6rem 1.4rem"}}>Se connecter</button>
        </form>

      </div>

    </div>
  );
}

export default Connexion;
