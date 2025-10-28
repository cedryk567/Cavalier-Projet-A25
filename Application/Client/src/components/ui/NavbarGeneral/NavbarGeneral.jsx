import { NavLink } from "react-router-dom";

export const NavbarGeneral = () => {
  return (
    <div className="topBar">
      <nav className="header">
        <NavLink to="/" className="link">
          ACCUEIL
        </NavLink>
        <NavLink to="/APropos" className="link">
          À PROPOS
        </NavLink>
        <NavLink to="/Equipes" className="link">
          NOS ÉQUIPES
        </NavLink>
      </nav>
    </div>
  );
};
