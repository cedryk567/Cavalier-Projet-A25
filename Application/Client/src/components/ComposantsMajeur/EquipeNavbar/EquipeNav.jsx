import "./EquipeNav.css";
import AccountSVG from "../../../img/AccountSVG";
import ParametreSVG from "../../../img/ParametreSVG";

export const EquipeNav = () => {
  return (
    <div className="equipe-content">
      <div className="choix-equipe">
        <div className="titre">
          {/* la balise va changer pour une styled */}
          <h2>Equipe </h2>
        </div>
        <div className="equipe-icon">
          {/* exemple d'icon de l'utilisateur */}
          <ParametreSVG className="icon"/>
          <AccountSVG className="icon"/>
        </div>
      </div>
      <div className="choix-session">
       {/**ca va etre un bouton */}
        <h2>Session</h2>
      </div>
    </div>
  );
};
