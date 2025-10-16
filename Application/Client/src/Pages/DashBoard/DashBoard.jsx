import { Outlet, NavLink } from "react-router-dom";
function DashBoard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "200px", backgroundColor: "#f8f9fa", padding: "1rem" }}>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><NavLink to="/DashBoard/messages">Messages</NavLink></li>
            <li><NavLink to="/DashBoard/calendrier">Calendrier</NavLink></li>
            <li><NavLink to="/DashBoard/statistiques">Statistiques</NavLink></li>
            <li><NavLink to="/DashBoard/documents">Documents</NavLink></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashBoard;
