import React, { createContext, useEffect, useState, useRef } from "react";
import { retournerSession } from "../../../server/api/routeUtilisateur";
import { postFormulaire } from "../../../helper";
import { stateConnexion } from "./stateConnexion.js";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [currentConnexionState, setCurrentConnexionState] = useState(
    stateConnexion.LOADING
  );
  const refRender = useRef(0);
  useEffect(() => {
    if (refRender.current > 0) return;
    refRender.current += 1;
    loadUser();
  }, []);

  const logout = () => {
    setUserData(null);
    setCurrentConnexionState(stateConnexion.UNAUTHORIZED);
    //enlever le cookie
  };

  const updateUser = (newUserData) => {
    //donne le userData pour le changer dans la bd
  };

  const loadUser = async () => {
    const result = await postFormulaire(retournerSession());
    if (result.status !== 200) {
      setCurrentConnexionState(stateConnexion.UNAUTHORIZED);
      return;
    }
    setUserData(result.donneesUtilisateur);
    setCurrentConnexionState(stateConnexion.AUTHORIZED);
  };

  const valeur = {
    userData,
    currentConnexionState,
    logout,
    updateUser,
  };

  return <UserContext.Provider value={valeur}>{children}</UserContext.Provider>;
};
