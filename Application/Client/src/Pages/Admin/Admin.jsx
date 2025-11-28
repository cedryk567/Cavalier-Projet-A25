import { useCallback, useEffect, useState } from "react";
import { postFormulaire } from "../../helper";
import { retournerUtilisateurs } from "../../server/api/routeAdmin.jsx";
import Table from "../../components/ui/Table/Table.jsx";
import TextArea from "../../components/ui/TextArea/TextArea.jsx";
import Presentoire from "../../components/ui/Presentoire/Presentoire.jsx";
import Button from "../../components/ui/Button/Button.jsx";
import Modal from "../../components/ui/Modal/Modal.jsx";
import {
  updateUtilisateur,
  insertUtilisateur,
} from "../../server/api/routeAdmin.jsx";
import "./Admin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const [usersType, setUsersType] = useState([]);
  const [modalEstAffiche, setModalEstAffiche] = useState(false);
  const [callbackFunctionModal, setCallBackFunctionModal] = useState(
    () => () => {
      updateUtilisateur;
    }
  );
  const [typeFonctionModal, setTypeFonctionModal] = useState("Modifier");
  const tableInitial = {
    id_utilisateur: 0,
    nom_utilisateur: "",
    compte_est_actif: 0,
    type_utilisateur: "Étudiant",
    mot_de_passe: "",
    courriel: "",
  };
  const [tableModifier, setTableModifier] = useState(tableInitial);
  const [filtreBlurry, setFiltreBlurry] = useState("");
  useEffect(() => {
    loaderUsers(setUsers);
  }, [modalEstAffiche]);
  useEffect(() => {
    if (users.length > 0) {
      calculerNbTypeMembre(setUsersType, users);
      console.log("Test value: ", usersType);
    }
  }, [users]);
  return (
    <div className="ContainerAdmin">
      <Modal
        style={"ModalAdmin"}
        estActif={modalEstAffiche}
        donneesElement={tableModifier}
        setEstAffiche={setModalEstAffiche}
        setFiltreBlurry={setFiltreBlurry}
        enregistrerItem={
          typeFonctionModal == "Modifier"
            ? updateUtilisateur
            : insertUtilisateur
        }
      />
      <div className={`ContainerItems ${filtreBlurry}`}>
        <Presentoire items={usersType} />
        <div className="TextAreaButton">
          <Button
            onClick={() => {
              setTypeFonctionModal("Ajouter");
              setTableModifier(tableInitial)
              setModalEstAffiche(true);
              //ajout pour changer la fonction
            }}
            contenue={"+ Ajouter"}
            style={"buttonAdmin"}
          />
        </div>
        <Table
          tableAffiche={users}
          setModalAffiche={setModalEstAffiche}
          setFiltreBlurry={() => {
            setFiltreBlurry("ContainerItemsBlur");
          }}
          modalEstAffiche={modalEstAffiche}
          setTableModifier={setTableModifier}
          setTypeFonctionModal={setTypeFonctionModal}
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

async function calculerNbTypeMembre(setUsersType, users) {
  let etudiant = 0;
  let coach = 0;
  let compteInactif = 0;

  users.forEach((user) => {
    if (user.type_utilisateur.toUpperCase() === "ÉTUDIANT") {
      etudiant++;
    } else if (user.type_utilisateur.toUpperCase() === "COACH") {
      coach++;
    }
    if (user.compte_est_actif === 0) {
      compteInactif++;
    }
    setUsersType([etudiant, coach, compteInactif]);
  });
}
