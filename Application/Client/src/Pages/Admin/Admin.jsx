import { useEffect, useState } from "react";
import { postFormulaire } from "../../helper";
import { retournerUtilisateurs } from "../../server/api/routeAdmin.jsx";
import Table from "../../components/ui/Table/Table.jsx";
import TextArea from "../../components/ui/TextArea/TextArea.jsx";
import Presentoire from "../../components/ui/Presentoire/Presentoire.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import Modal from "../../components/ui/Modal/Modal.jsx";
import "./Admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const test = [1, 2, 3];
  const [recherche, setRecherche] = useState("");
  const [modalEstAffiche, setModalEstAffiche] = useState(false);
  const [tableModifier, setTableModifier] = useState({});
  useEffect(() => {
    loaderUsers(setUsers);
  }, []);
  return (
    <>
      <div className="ContainerAdmin">
        <Modal
          style={"ModalAdmin"}
          estActif={modalEstAffiche}
          donneesElement={tableModifier}
          setEstAffiche={setModalEstAffiche}
        />

        <div className="ContainerItems">
          <Presentoire items={test} />
          <div className="TextAreaButton">
            <TextArea
              textRecherche={recherche}
              setTextRecherche={setRecherche}
              style={"textAreaAdmin"}
              placeHolder={"dddddddddd"}
            />
            <Button contenue={"Rechercher"} style={"buttonAdmin"} />
          </div>
          <Table
            tableAffiche={users}
            setModalAffiche={setModalEstAffiche}
            modalEstAffiche={modalEstAffiche}
            setTableModifier={setTableModifier}
          />
        </div>
      </div>
    </>
  );
};
export default Admin;

async function loaderUsers(setUsers) {
  const resultat = await postFormulaire(retournerUtilisateurs());
  setUsers(resultat.users);
}
