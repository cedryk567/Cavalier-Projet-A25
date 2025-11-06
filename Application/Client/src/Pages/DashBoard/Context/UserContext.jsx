import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [estConnecter, setEstConnecter] = useState(false);

  useEffect(() => {
    //charger le user depuis la base de donnée
  }, []);

  const logout = () => {
    setUser(null);
    setEstConnecter(false);
    //enlever le cookie
  };

  const updateUser = (newUserData) => {
    //donne le userData pour le changer dans la bd
  };

  const valeur = {
    user,
    estConnecter,
    logout,
    updateUser,
  };

  return (<UserContext.Provider value={valeur}>{children}</UserContext.Provider>);
};
