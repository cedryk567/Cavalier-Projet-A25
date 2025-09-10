import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accueil from "./Accueil/Accueil.jsx";
import Inscription from "./Inscription/Inscription.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accueil />
  </StrictMode>
);
