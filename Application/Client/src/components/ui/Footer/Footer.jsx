import { useState } from "react";
import { NavLink } from "react-router-dom";
import { color } from "@cloudinary/url-gen/qualifiers/background";
import logoYoutube from "../../../img/youtube.png";
import logoFacebook from "../../../img/facebook.png";
import logoTwitter from "../../../img/twitter.png";
import logoInstagram from "../../../img/instagram.png";
import logoTikTok from "../../../img/tiktok.png";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerLigne" />
        <div className="footerContainer">
          <div className="footerGauche">
            <h3>Suivez-nous</h3>
            <ul>
              <li>
                <img src={logoYoutube} alt="Logo YouTube" />
                YouTube
              </li>
              <li>
                <img src={logoFacebook} alt="Logo Facebook" />
                Facebook
              </li>
              <li>
                <img src={logoTwitter} alt="Logo Twitter" />
                Twitter
              </li>
              <li>
                <img src={logoInstagram} alt="Logo Instagram" />
                Instagram
              </li>
              <li>
                <img src={logoTikTok} alt="Logo TikTok" />
                TikTok
              </li>
            </ul>
          </div>

          <div className="footerDroite">
            <h3>Compte</h3>
            <ul>
              <li>
                <NavLink to="/Connexion" target="_blank">
                  Se connecter
                </NavLink>
              </li>
              <li>
                <NavLink to="/DemanderMotDePasseTemporaire" target="_blank">
                  Activer son compte
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;