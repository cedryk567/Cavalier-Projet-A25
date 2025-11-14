import React, { createContext, useEffect, useState, useRef } from "react";
import {
  deconnexion,
  retournerSession,
} from "../../../server/api/routeUtilisateur";
import { postFormulaire } from "../../../helper";
import { stateConnexion } from "./stateConnexion.js";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [currentConnexionState, setCurrentConnexionState] = useState(
    stateConnexion.LOADING
  );
  const refRender = useRef(0);
  useEffect(() => {
    loadUser();
    if (currentConnexionState === stateConnexion.UNAUTHORIZED) {
      navigate("/PageErreur");
    }
  }, [currentConnexionState]);

  const logout = () => {
    setUserData(null);
    setCurrentConnexionState(stateConnexion.UNAUTHORIZED);
    refRender.current = 0;
    deconnexion();
  };

  const updateUser = (newUserData) => {
    //donne le userData pour le changer dans la bd
  };

  const loadUser = async () => {
    const result = await postFormulaire(retournerSession());
    console.log(JSON.stringify(result));
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
