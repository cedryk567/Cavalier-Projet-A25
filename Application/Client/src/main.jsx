import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./Pages/Accueil/Accueil.jsx";
import ActivationCompte from "./Pages/ActivationCompte/ActivationCompte.jsx";
import PageErreur from "./Pages/pageErreur/PageErreur.jsx";
import Connexion from "./Pages/Connexion/Connexion.jsx";
import { DashBoard } from "./Pages/dashBoard/DashBoard.jsx";
import Equipes from "./Pages/Equipes/Equipes.jsx";
import APropos from "./Pages/APropos/APropos.jsx";
import DemanderMotDePasseTemporaire from "./Pages/DemanderMotDePasseTemporaire/demanderMotDePasseTemporaire.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messages from "./Pages/Message/Message.jsx";
import Calendrier from "./Pages/Calendrier/components/Calendrier.jsx";
import Statistique from "./Pages/Statistique/Statistique.jsx";
import Document from "./Pages/Document/Document.jsx";
import ErrorPage from "./Pages/404ErrorPage/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <PageErreur />,
  },
  {
    path: "/PageErreur",
    element: <PageErreur />,
  },
  {
    path: "/ActivationCompte",
    element: <ActivationCompte />,
  },
  {
    path: "/Connexion",
    element: <Connexion />,
  },
  {
    path: "/DashBoard",
    element: <DashBoard />,
    children: [
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "calendrier",
        element: <Calendrier />,
      },
      {
        path: "statistiques",
        element: <Statistique />,
      },
      {
        path: "documents",
        element: <Document />,
      },
    ],
  },
  {
    path: "/Equipes",
    element: <Equipes />,
  },
  {
    path: "/APropos",
    element: <APropos />,
  },
  {
    path: "/DemanderMotDePasseTemporaire",
    element: <DemanderMotDePasseTemporaire />,
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
