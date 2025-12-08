import "./NavDocumentFiltre.css";
import PlusSVG from "../../../../img/PlusSVG";
import { StyledText } from "../../../../components/ComposantsMajeur/StyledComponents/Text.style";
import { StyledButtonSimpleSVG } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonDashboard.style";
import { IconFiltreType } from "../../../../components/ComposantsMajeur/StyledComponents/ButtonFiltre.style";
import { DocumentContext } from "../../Context/DocumentContext";
import { useContext, useEffect, useState } from "react";
import { ajouterDocument } from "../../../../server/api/routeUtilisateur.jsx";
import Modal from "../../../../components/ui/Modal/Modal.jsx";

export const NavDocumentFiltre = () => {
  const { typeDocumentDisponible, filtreSelectionner, setFiltreSelectionner } =
    useContext(DocumentContext);
  const documentInitial = {
    id:"",
    nom: "",
    fichier: null,
  };
  const [modalEstAffiche, setModalEstAffiche] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [tableModifier, setTableModifier] = useState(documentInitial);
  const [typeFonctionModal, setTypeFonctionModal] = useState("Ajouter");
  const [filtreBlurry, setFiltreBlurry] = useState("");

  const gererAjouterDocument = async (form) => {
    if(!form){
      console.log("Aucun fichier sélectionner!");
      return;
    }
    const resultat = await ajouterDocument(
      "ajgpap-gahtyawojk", //Exemple de id équipe
      form.nom,
      form.fichier
    );

    if (resultat) {
      console.log("Document ajouté:", resultat.idDocument);
      setModalEstAffiche(false);
      //fonction pour refresh la page
    }
  };

  return (
    <div className="NavbarDocument">
      <Modal
        style={"ModalAdmin"}
        estActif={modalEstAffiche}
        donneesElement={tableModifier}
        setEstAffiche={setModalEstAffiche}
        setFiltreBlurry={setFiltreBlurry}
        enregistrerItem={gererAjouterDocument}
      />
      <div className="boutonCreer">
        <StyledButtonSimpleSVG
          svgSize="1.6rem"
          backgroundColor="#65C97A"
          onClick={() => {
            setTypeFonctionModal("Ajouter");
            setTableModifier(documentInitial);
            setModalEstAffiche(true);
          }}
        >
          <PlusSVG />
        </StyledButtonSimpleSVG>
      </div>
      <StyledText size="1.5rem" margin="0px 20px">
        <span>Récent</span>
      </StyledText>
      <div className="boutonFiltre">
        {typeDocumentDisponible.map((type) => (
          <IconFiltreType type={type} />
        ))}
      </div>
    </div>
  );
};
