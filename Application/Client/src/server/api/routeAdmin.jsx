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

export const updateUtilisateur = async (body) => {
  return await fetch(`${url}/updateUtilisateur`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
export const deleteUtilisateur = async (id) => {
  return await fetch(`${url}/deleteUtilisateur/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
