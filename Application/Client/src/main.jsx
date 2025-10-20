import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./Pages/Accueil/Accueil.jsx";
import Inscription from "./Pages/inscription/Inscription.jsx";
import PageErreur from "./Pages/pageErreur/PageErreur.jsx";
import Connexion from "./Pages/Connexion/Connexion.jsx";
import {DashBoard} from "./Pages/DashBoard/DashBoard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Messages from "./Pages/Message/Message.jsx";
import Calendrier from "./Pages/Calendrier/Calendrier.jsx";
import Statistiques from "./Pages/Statistique/Statistiques.jsx";
import Document from "./Pages/Document/Document.jsx"

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
    children: [
      {
        path: "messages",
        element: <Messages/>
      },
      {
        path: "calendrier",
        element: <Calendrier/>
      },
      {
        path: "statistiques",
        element: <Statistiques/>
      },
      {
        path: "documents",
        element: <Document/>
      },
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
