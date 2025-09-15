import { useState } from "react";
function Accueil() {
  const [active, setActive] = useState("ACCUEIL");
  const links = ["ACCUEIL", "APROPOS", "EQUIPES"];
  const styles = `:root{
          --green: #00FF76;
          --text: #FFFFFF;
          --bg: rgba(0,0,0,0.60);
          }

          .a-wrap{padding: 8px 16px;}
          .a-header{
          display:flex; align-items:center; gap:24px;
          background:var(--bg);
          border:1px; solid var(--green);
          border-radius: 16px;
          padding: 10px 18px;
          backdrop-filter: saturate(120%) blur(2px);
          box-shadow:0 0 0 1px rgba(0,255,118,0.05), inset 0 0 18px rgba(0,255,118,0.08);
          }
          .a-brand{display:grid; place-items:enter;}
          .a-logo{
            width:28px; height:28px; border-radius:50%;
            border:1px solid var(--green);
            box-shadow: inset 0 0 10px rgba(0,255,118,0.3);
          }
          .a-nav{display:flex; gap:clamp(16px, 5w, 56px); justifiy-centent: flex:1;}
          .a-link{
          position:relative; text-decoration:none;
          color:var(--text); text-transform:uppercase;
          font-weight:500; letter-spacing:0.04em; opacity: .9;
          text-shadow:0 0 6px rgba(0,0,0,.4);
          transition:color .16s ease, opacity .16s ease, filter .16s ease;
          
          }
          .a-link::after{
    content:""; position:absolute; left:0; right:0; bottom:-8px; height:2px;
    background:transparent; transition:background .16s ease, box-shadow .16s ease;
  }
  .a-link:hover{ opacity:1; filter:brightness(1.04); }
  .a-link:hover::after{ background:var(--green); box-shadow:0 0 10px rgba(0,255,118,.6); }
  .a-link.is-active{ color:var(--green); text-shadow:0 0 8px rgba(0,255,118,.35); }
  .a-link.is-active::after{ background:var(--green); box-shadow:0 0 10px rgba(0,255,118,.6); }

    @media (max-width:520px){
    .a-header{ flex-wrap:wrap; row-gap:8px; }
    .a-nav{ width:100%; justify-content:space-between; }
  }

  .a-bg{
    min-height:100vh;
    background-image:url('/ton-fond.jpg');
    background-size:cover; background-position:center;
    display:flex; align-items:flex-start;
  }
  `;

  return (
    <>
      {/* partie css */}
      <style>{styles}</style>

      <div className="a-bg">
        <div className="a-wrap" style={{ width: "100%" }}>
          <header className="a-header">
            <div className="a-brand">
              <span className="a-logo" aria-hidden="true" />
            </div>
            <nav className="a-nav" aria-label="Navigation principale">
              {links.map((label) => (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  className={`a-link ${active === label ? "is-active" : ""}`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 10,
                  }}
                >
                  {label}
                </button>
              ))}
            </nav>
          </header>
          <main style={{ color: "white", padding: "32px 18px" }}>
            <h1>Bienvenue</h1>
            <p>Remplace ce texte par ton contenu d’accueil.</p>
          </main>
        </div>
      </div>
    </>
  );
}

export default Accueil;
