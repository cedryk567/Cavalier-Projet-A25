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
import { deconnexion } from "../../server/api/routeUtilisateur";

export const DashBoard = () => {
  return (
    <UserProvider>
      <DashboardContent />
    </UserProvider>
  );
};

//Composant qui prend le context
const DashboardContent = () => {
  const { userData, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const dashBoardRef = useRef(0);
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
                {userData?.nom_utilisateur ?? "En Chargement..."}
              </span>
              <span className="user-email">
                {userData?.courriel ?? "En Chargement..."}
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
          <StyledButton
            onClick={() => {
              logout;
              dashBoardRef.current = 0;
              navigate("/");
            }}
            margin="0rem 0"
          >
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
