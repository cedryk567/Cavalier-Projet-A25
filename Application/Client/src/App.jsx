import React, { useEffect } from "react";
import Accueil from "./Accueil/Accueil.jsx";
import Inscription from "./Inscription/Inscription.jsx";
const router = createBrowserRouter([
  { path: "/", element: <Accueil /> },
  { path: "/Inscription", element: <Inscription /> },
]);
function App() {
  useEffect(() => {
    document.title = "Appli-cavalier"; // Aider par ChatGPT pour le titre de l'onglet
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = ""; // Aider par ChatGPT pour l'icône de l'onglet
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
