import { Outlet, NavLink } from "react-router-dom";
import "./DashBoard.css";
import MessageSVG from "../../img/MessageSVG";
import CalendrierSVG from "../../img/CalendrierSVG";
import StatistiqueSVG from "../../img/StatistiquesSVG";
import DocumentSVG from "../../img/DocumentSVG";
import AccountSVG from "../../img/AccountSVG";

function DashBoard() {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <div className="user-profile">
          <div className="avatar-box">
            <AccountSVG />
          </div>
          <div className="user-info">
            <span className="user-name">Jean Dupont</span>
            <span className="user-email">Jean.Dupont5@gmail.com</span>
          </div>
        </div>
        <nav>
          <ul className="dashboard-menu">
            <li>
              <NavLink to="/DashBoard/messages" className="menu-item">
                <MessageSVG className="menu-icon" />
                <span className="menu-text">Messages</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/calendrier" className="menu-item">
                <CalendrierSVG className="menu-icon" />
                <span className="menu-text">Calendrier</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/statistiques" className="menu-item">
                <StatistiqueSVG className="menu-icon" />
                <span className="menu-text">Statistiques</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/documents" className="menu-item">
                <DocumentSVG className="menu-icon" />
                <span className="menu-text">Documents</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-main">
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
