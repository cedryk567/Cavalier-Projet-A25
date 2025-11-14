import "./Modal.css";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { gereChangementForm, postFormulaire } from "../../../helper";
import { Await } from "react-router-dom";
import { updateUtilisateur } from "../../../server/api/routeAdmin";

const Modal = ({
  estActif,
  donneesElement,
  style,
  setEstAffiche,
  setFiltreBlurry,
}) => {
  useEffect(() => {
    if (donneesElement) {
    }
    setForm(donneesElement);
  }, [donneesElement]);
  const [form, setForm] = useState({});
  const keysElements = Object.keys(donneesElement);
  if (!estActif) {
    return null;
  } else {
    return (
      <div className={`ModalContainer`}>
        <div className={` ${style}`}>
          <Button
            style={"buttonModal"}
            contenue={"Enregistrez"}
            onClick={async () => {
              await postFormulaire(updateUtilisateur(form));
              setEstAffiche(false);
              setFiltreBlurry("");
            }}
          />
          <Button
            style={"buttonModal"}
            contenue={"Annuler"}
            onClick={() => {
              setEstAffiche(false);
              setFiltreBlurry("");
            }}
          />
          <tbody className="tableauModal">
            {keysElements.slice(1).map((key, i) => (
              <tr key={i}>
                <td className="elementTableauModal">{key}</td>
                <td className="inputTableauModal">
                  <TextArea
                    style={"textAreaModal"}
                    placeHolder={form[key]}
                    value={form[key]}
                    onChange={(e) => {
                      gereChangementForm(key, e.target.value, setForm, form);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    );
  }
};
export default Modal;
