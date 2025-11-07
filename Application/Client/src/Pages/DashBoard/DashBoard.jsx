import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./DashBoard.css";
import MessageSVG from "../../img/MessageSVG";
import CalendrierSVG from "../../img/CalendrierSVG";
import StatistiqueSVG from "../../img/StatistiqueSVG";
import DocumentSVG from "../../img/DocumentSVG";
import AccountSVG from "../../img/AccountSVG";
import ParametreSVG from "../../img/ParametreSVG";
import LogOutSVG from "../../img/LogOutSVG";
import { EquipeNav } from "../../components/ComposantsMajeur/EquipeNavbar/EquipeNav";
import {
  StyledButton,
  StyledNavLink,
} from "../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext, UserProvider } from "./Context/UserContext";
import { stateConnexion } from "./Context/stateConnexion";

export const DashBoard = () => {
  return (
    <UserProvider>
      <DashboardContent />
    </UserProvider>
  );
};

//Composant qui prend le context
const DashboardContent = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const dashBoardRef = useRef(0);
  useEffect(() => {
    // if (dashBoardRef.current > 0) return;
    if (user.currentConnexionState === stateConnexion.UNAUTHORIZED) {
      navigate("/PageErreur");
    }
    dashBoardRef.current += 1;
    console.log(user.userData);
  });
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <div className="user-profile">
            <div className="avatar-box">
              <AccountSVG />
            </div>
            <div className="user-info">
              <span className="user-name">
                {user.userData ? user.nom : "En Chargement..."}
              </span>
              <span className="user-email">
                {user ? user.courriel : "En Chargement..."}
              </span>
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
                <span>Calendrier</span>
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
          <StyledButton margin="0rem 0">
            <ParametreSVG />
            <span>Paramètre</span>
          </StyledButton>
          <StyledButton margin="0rem 0">
            <LogOutSVG />
            <span>Déconnexion</span>
          </StyledButton>
        </div>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-content">
          <EquipeNav />
          <div className="outlet-wrapper">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
