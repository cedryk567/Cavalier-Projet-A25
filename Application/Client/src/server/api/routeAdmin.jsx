export const retournerUtilisateurs = async () => {
  return await fetch("http://localhost:8080/admin/retournerUtilisateurs", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
