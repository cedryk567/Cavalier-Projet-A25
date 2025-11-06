import React from "react";
import styled from "styled-components";
// Icon
import LogoExcelComponent from "../../../img/LogoExcelComponent";
import LogoWordComponent from "../../../img/LogoWordComponent";
import LogoPowerPointComponent from "../../../img/LogoPowerPointComponent";
import LogoTXTComponent from "../../../img/LogoTXTComponent";
import LogoImageComponent from "../../../img/LogoImageComponent";
import LogoPDFComponent from "../../../img/LogoPDFComponent";

export const IconFiltreType = ({ type }) => {
  const filtreType = type?.toLowerCase();

  const { icon: Icon, label } = Icon_Map[filtreType] || {
    icon: LogoPDFComponent,
    label: "Filtre par défaut",
  };
  return <PDFIconFiltre label={label} Icon={Icon} />;
};

const PDFIconFiltre = ({ label, Icon }) => {
  return (
    <FiltreContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Titre>{label}</Titre>
    </FiltreContainer>
  );
};

const Icon_Map = {
  word: {
    icon: LogoWordComponent,
    label: "Document Word",
  },
  texte: {
    icon: LogoTXTComponent,
    label: "Document TXT",
  },
  excel: {
    icon: LogoExcelComponent,
    label: "Document Excel",
  },
  image: {
    icon: LogoImageComponent,
    label: "Image",
  },
  powerpoint: {
    icon: LogoPowerPointComponent,
    label: "Document PowerPoint",
  },
  pdf: {
    icon: LogoPDFComponent,
    label: "Document PDF",
  },
};

const FiltreContainer = styled.button`
  display: inline-flex;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  background-color: transparent;
  padding: 0;

  &:hover{
    background-color: rgba(255, 255, 255, 0.233);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0px 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Titre = styled.div`
  padding: 4px 10px;
  font-size: 1rem;
`;
