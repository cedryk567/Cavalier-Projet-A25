import "./Modal.css";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
const Modal = ({ estActif, donneesElement, style, setEstAffiche }) => {
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
            onClick={() => {
              setEstAffiche(false);
            }}
          />
          <tbody className="tableauModal">
            {keysElements.map((key, i) => (
              <tr key={i}>
                <td className="elementTableauModal">{key}</td>
                <td>
                  <TextArea placeHolder={donneesElement[key]} />
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
