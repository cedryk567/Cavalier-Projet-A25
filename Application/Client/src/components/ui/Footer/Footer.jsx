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