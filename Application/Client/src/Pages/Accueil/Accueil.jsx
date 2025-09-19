import { useState } from "react";
function Accueil() {
  const [active, setActive] = useState("ACCUEIL");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const pageReset = {
    margin: "0",
    padding: "0",
  };
  const headerStyle = {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60%",
    background: "rgba(0,0,0,0.60)",
    border: "2px solid #00FF76",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 24px",
    zIndex: 10,
  };
  const navStyle = {
    display: "flex",
    gap: "40px",
  };
  const linkStyle = {
    position: "relative",
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    fontFamily: "'Gowun Dodum', sans-serif",
    fontWeight: "lighter",
  };
  const logoImg = {
    height: "50px",
    display: "block",
    alignItems: "center",
    marginTop: "-2px",
  };
  const placeHolder = {
    width: "40px",
  };
  const hero = {
    position: "relative",
    width: "100%",
    height: "900px",
    overflow: "hidden",
  };
  const heroImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };
  const heroOverlay = {
    zIndex: "1",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,1) 27%, rgba(0,0,0,0.7) 47%, rgba(0,0,0,0.46) 60%, rgba(0,0,0,0) 75%)",
  };
  const heroContent = {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: "2",
    padding: "0 24px",
    pointerEvents: "none",
  };
  const heroTitle = {
    color: "white",
    zIndex: "2",
    fontSize: "clamp(28px, 4vw, 56px)",
    fontWeight: "800",
    letterSpacing: "1px",
    lineHeight: "1.15",
    textTransform: "uppercase",
    textShadow: "0 2px 12px rgba(0,0,0,.5)",
    fontFamily: "'Gowun Dodum', sans-serif",
  };
  const arrowBase = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.55)",
    border: "1px solid rgba(255,255,255,0.6)",
    color: "white",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    zIndex: "3",
    userSelect: "none",
    transition: "transform .15s ease, background .2s ease",
  };
  const arrowLeft = { ...arrowBase, left: "16px" };
  const arrowRight = { ...arrowBase, right: "16px" };

  return (
    <>
      <div>
        <div>
          <header style={headerStyle}>
            <div style={logoImg}>
              <img src="src\img\Logo.png" alt="logo" />
            </div>
            <nav style={navStyle}>
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
            <div style={placeHolder}></div>
          </header>
          <section style={hero}>
            <img src="src\img\Image Nageur.png" alt="Hero" style={heroImg} />
            <div style={heroOverlay}></div>

            {/* Titre */}
            <h1 style={heroTitle}>
              LA PERFORMANCE COMME SEULE
              <br />
              DESTINATION
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default Accueil;
