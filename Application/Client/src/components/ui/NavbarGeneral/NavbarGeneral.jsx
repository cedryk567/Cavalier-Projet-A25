import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavbarGeneral.css";
import LogoImage from "../../../img/LogoImage";

export const NavbarGeneral = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="logoWrap">
        <button onClick={() => navigate("/")}>
          <LogoImage />
        </button>
      </div>
      <div className="topBar">
        <NavLink to="/" className="link">
          ACCUEIL
        </NavLink>
        <NavLink to="/APropos" className="link">
          À PROPOS
        </NavLink>
        <NavLink to="/Equipes" className="link">
          ÉQUIPES
        </NavLink>
      </div>
    </>
  );
};
