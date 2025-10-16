import { Outlet, NavLink } from "react-router-dom";
import "./DashBoard.css";

function DashBoard() {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <nav>
          <ul className="dashboard-menu">
            <li>
              <NavLink to="/DashBoard/messages">Messages</NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/calendrier">Calendrier</NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/statistiques">Statistiques</NavLink>
            </li>
            <li>
              <NavLink to="/DashBoard/documents">Documents</NavLink>
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
