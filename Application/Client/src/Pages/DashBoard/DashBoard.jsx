import { Outlet, NavLink } from "react-router-dom";
import "./DashBoard.css";
import MessageSVG from "../../img/MessageSVG";
import CalendrierSVG from "../../img/CalendrierSVG";
import StatistiqueSVG from "../../img/StatistiqueSVG";
import DocumentSVG from "../../img/DocumentSVG";
import AccountSVG from "../../img/AccountSVG";
import ParametreSVG from "../../img/ParametreSVG";
import LogOutSVG from "../../img/LogOutSVG";
import { EquipeNav } from "../../components/ComposantsMajeur/equipeNavbar/equipeNav";
import {
  StyledButton,
  StyledNavLink,
} from "../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";

export const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <div className="user-profile">
            <div className="avatar-box">
              <AccountSVG />
            </div>
            <div className="user-info">
              <span className="user-name">Jean Dupont</span>
              <span className="user-email">jean.dupont@gmail.com</span>
            </div>
          </div>
          <ul className="dashboard-menu">
            <li>
              <StyledNavLink to="/DashBoard/messages">
                <MessageSVG />
                <span>Messages</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/DashBoard/calendrier">
                <CalendrierSVG />
                <span>Messages</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/DashBoard/statistiques">
                <StatistiqueSVG />
                <span>Statistiques</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/DashBoard/documents">
                <DocumentSVG />
                <span>Documents</span>
              </StyledNavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="notification-card">
            <div className="notification-badge">
              <span>nouveau</span>
            </div>
            <p className="notification-text">message</p>
          </div>
          <div className="menu-item">
            <ParametreSVG className="menu-icon" />
            <span className="menu-text">Paramètres</span>
          </div>
          <div className="menu-item">
            <LogOutSVG className="menu-icon" />
            <span className="menu-text">Déconnexion</span>
          </div>
        </div>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-content">
          <EquipeNav />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
