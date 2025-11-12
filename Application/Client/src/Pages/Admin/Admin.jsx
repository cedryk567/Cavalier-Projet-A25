import { useEffect, useState } from "react";
import { postFormulaire } from "../../helper";
import { retournerUtilisateurs } from "../../server/api/routeAdmin.jsx";
import Table from "../../components/ui/Table/Table.jsx";
import "./Admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const [recherche, setRecherche] = useState("");
  useEffect(() => {
    loaderUsers(setUsers);
  }, []);
  return (
    <div className="ContainerTable">
      <textarea
        value={recherche}
        onChange={(e) => {
          setRecherche(e.target.value);
        }}
      ></textarea>
      <Table tableAffiche={users} />
    </div>
  );
};
export default Admin;

async function loaderUsers(setUsers) {
  const resultat = await postFormulaire(retournerUtilisateurs());
  setUsers(resultat.users);
}
