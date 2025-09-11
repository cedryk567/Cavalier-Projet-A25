import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./Pages/Accueil/Accueil.jsx";
import Inscription from "./Pages/Inscription/Inscription.jsx";
import PageErreur from "./Pages/PageErreur/PageErreur.jsx";
import Connexion from "./Pages/Connexion/Connexion.jsx";
import DashBoard from "./Pages/DashBoard/DashBoard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <PageErreur />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },
  {
    path: "/Connexion",
    element: <Connexion />,
  },
  {
    path: "/DashBoard",
    element: <DashBoard />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
