import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { bottle } from "@cloudinary/url-gen/qualifiers/focusOn";

//Style pour rendre les boutons et navlinks pareil

const StyleDeBase = `
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  width: 100%;
  color: #ccc;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 0.75rem 0;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    span {
      color: green;
      font-weight: 600;
    }
  }
`;

const StyleSimple = `
  display: flex;
  align-items: center;
  background: transparent;
  color: #ccc;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledButton = styled.button`
  ${StyleDeBase}
  //margin vers le haut et bas
  margin: ${({ margin }) => margin || "0.5rem 0"};
`;

export const StyledNavLink = styled(NavLink)`
  ${StyleDeBase}
  //margin vers le haut et bas
  margin: ${({ margin }) => margin || "0.5rem 0"};
`;

export const StyledButtonSimpleSVG = styled.button`
  ${StyleSimple}
  //margin vers la droite et gauche
  margin: ${({ margin }) => margin || "0 0.5rem "};
  color: ${({ color }) => color || "black"};
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  svg {
    width: ${({ svgSize }) => svgSize || "1rem"};
    height: ${({ svgSize }) => svgSize || "1rem"};
  }
  &:hover {
    //valeur que je trouve plus belle que #ccc
    background-color: #444;
  }
`;

export const StyledButtonSimpleBorder = styled.button`
  ${StyleSimple}
  //margin vers la droite et gauche
  margin: ${({ margin }) => margin || "0 0.5rem "};
  border: ${({ border }) => border || "0px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0px"};
  padding: ${({ padding }) => padding || "0rem"};

  span {
    color: ${({ colorText }) => colorText || "black"};
    font-size: ${({ fontSize }) => fontSize || "20px"};
    margin: ${({ marginText }) => marginText || "0px"};
  }

  &:hover {
    //valeur que je trouve plus belle que #ccc
    background-color: #444;
  }

  svg {
    //si il y a un svg, sinon fait rien
    width: ${({ svgSize }) => svgSize || "0rem"};
    height: ${({ svgSize }) => svgSize || "0rem"};
  }
`;
