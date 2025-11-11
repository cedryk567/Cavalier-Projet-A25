import { useEffect, useState } from "react";
import { postFormulaire } from "../../helper";
import { retournerUtilisateurs } from "../../server/api/routeAdmin.jsx";
import Table from "../../components/ui/Table/Table.jsx";
import "./Admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loaderUsers(setUsers);
  }, []);
  return (
    <div className="ContainerTable">
      <Table tableAffiche={users} />
    </div>
  );
};
export default Admin;

async function loaderUsers(setUsers) {
  const resultat = await postFormulaire(retournerUtilisateurs());
  setUsers(resultat.users);
}
