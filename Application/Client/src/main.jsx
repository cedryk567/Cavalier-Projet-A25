import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./Pages/Accueil/Accueil.jsx";
//@ts-ignore
import Inscription from "./Pages/inscription/Inscription.jsx";
import PageErreur from "./Pages/pageErreur/PageErreur.jsx";
import Connexion from "./Pages/Connexion/Connexion.jsx";
import DashBoard from "./Pages/dashBoard/DashBoard.jsx";
import ActivationCompte from "./Pages/ActivationCompte/ActivationCompte.jsx";
import "bootstrap/dist/css/bootstrap.css";
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
  {
    path: "/ActivationCompte",
    element: <ActivationCompte />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
