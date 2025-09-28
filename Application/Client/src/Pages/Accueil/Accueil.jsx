import { useState } from "react";
function Accueil() {
  const [active, setActive] = useState("ACCUEIL");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const pageReset = {
    background: "black",
    minHeight: "100vh",
    margin: "0",
    padding: "0",
    position: "relative",
  };
  const headerStyle = {
    background: "rgba(0,0,0,0.60)",
    border: "2px solid #00FF76",
    borderRadius: "12px",
    display: "flex",
    gap: "80px",
    padding: "20px 70px",
    justifyContent: "space-around",
    boxShadow: "0 10px 24px rgba(0,0,0,0.45)",
  };
  const linkStyle = {
    position: "relative",
    color: "white",
    textDecoration: "none",
    fontSize: "1.7rem",
    transition: "all 0.3s ease",
    fontFamily: "'Gowun Dodum', sans-serif",
    fontWeight: "lighter",
  };
  const logoImg = {
    height: "auto",
    width: "150px",
    marginLeft: "100px",
  };
  const logoWrap = {
    position: "absolute",
    top: "24px",
    left: "60px",
  };
  const topBarStyle = {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    padding: "30px 60px",
    position: "fixed",
    top: "20px",
    right: "80px",
  };
  const content = {
    paddingTop: "300px",
  };
  const titleStyle = {
    color: "white",
    fontSize: "3.5rem",
    textAlign: "center",
    fontWeight: "lighter",
    margin: 0,
    fontFamily: "'Gowun Dodum', sans-serif",
  };
  const subtitleStyle = {
    color: "white",
    fontSize: "1.8rem",
    textAlign: "center",
    fontFamily: "'Gowun Dodum', sans-serif",
    marginTop: "20px",
    letterSpacing: "1px",
  };
  const buttonStyle = {
    display: "block",
    margin: "30px auto 0",
    padding: "14px 40px",
    fontSize: "1.4rem",
    color: "white",
    background: "transparent",
    border: "2px solid #00FF76",
    borderRadius: "40px",
    cursor: "pointer",
    fontFamily: "'Gowun Dodum', sans-serif",
    transition: "all 0.3s ease",
  };
  const buttonHover = {
    background: "#00FF76",
    color: "black",
  };
  const ImageWrapper = {
    width: "70%",
    aspectRation: "1/1",
    margin: "40px auto 0",
    borderRadius: "20px",
    overflow: "hidden",
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    disple: "block",
  };

  return (
    <>
      <div style={pageReset}>
        <div style={logoWrap}>
          <img src="src\img\Logo.png" alt="logo" style={logoImg} />
        </div>

        <div style={topBarStyle}>
          <nav style={headerStyle}>
            <a href="#" style={linkStyle}>
              ACCUEIL
            </a>
            <a href="#" style={linkStyle}>
              À PROPOS
            </a>
            <a href="#" style={linkStyle}>
              NOS ÉQUIPES
            </a>
          </nav>
        </div>

        <main style={content}>
          {/* Titre */}
          <h1 style={titleStyle}>LA PERFORMANCE COMME SEULE DESTINATION</h1>
          {/* soustitre */}
          <h2 style={subtitleStyle}>
            DEPASSE TES LIMITES, ATTEINT L'EXCELLENCE
          </h2>
          {/* Bouton */}
          <button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#00FF76";
              e.currentTarget.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Connexion
          </button>

          <div style={ImageWrapper}>
            <img
              src="src\img\ImageNageur.png"
              alt="nageur"
              style={imageStyle}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Accueil;
