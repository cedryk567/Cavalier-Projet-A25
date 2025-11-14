const url = "http://localhost:8080/admin";
export const retournerUtilisateurs = async () => {
  return await fetch(`${url}/retournerUtilisateurs`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateUtilisateur = async () => {
  return await fetch(`${url}/updateUtilisateur`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
