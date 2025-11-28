import { useEffect, useState } from "react";
import { postFormulaire } from "../../helper";
import { retournerUtilisateurs } from "../../server/api/routeAdmin.jsx";
import Table from "../../components/ui/Table/Table.jsx";
import TextArea from "../../components/ui/TextArea/TextArea.jsx";
import Presentoire from "../../components/ui/Presentoire/Presentoire.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import Modal from "../../components/ui/Modal/Modal.jsx";
import { updateUtilisateur } from "../../server/api/routeAdmin.jsx";
import "./Admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const test = [1, 2, 3];
  const [modalEstAffiche, setModalEstAffiche] = useState(false);
  const [tableModifier, setTableModifier] = useState({});
  const [filtreBlurry, setFiltreBlurry] = useState("");
  useEffect(() => {
    loaderUsers(setUsers);
  }, [modalEstAffiche]);
  return (
    <div className="ContainerAdmin">
      <Modal
        style={"ModalAdmin"}
        estActif={modalEstAffiche}
        donneesElement={tableModifier}
        setEstAffiche={setModalEstAffiche}
        setFiltreBlurry={setFiltreBlurry}
        enregistrerItem={updateUtilisateur}
      />
      <div className={`ContainerItems ${filtreBlurry}`}>
        <Presentoire items={test} />
        <div className="TextAreaButton">
          <Button onClick={() => {setModalEstAffiche(true)}} contenue={"+ Ajouter"} style={"buttonAdmin"} />
        </div>
        <Table
          tableAffiche={users}
          setModalAffiche={setModalEstAffiche}
          setFiltreBlurry={() => {
            setFiltreBlurry("ContainerItemsBlur");
          }}
          modalEstAffiche={modalEstAffiche}
          setTableModifier={setTableModifier}
        />
      </div>
    </div>
  );
};
export default Admin;

async function loaderUsers(setUsers) {
  const resultat = await postFormulaire(retournerUtilisateurs());
  setUsers(resultat.users);
}
