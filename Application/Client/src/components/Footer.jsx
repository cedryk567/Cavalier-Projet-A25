import { useState } from "react";
import { color } from "@cloudinary/url-gen/qualifiers/background";
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
              <li>YouTube</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>

          <div className="footerDroite">
            <h3>Compte</h3>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Se connecter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Activer son compte
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
