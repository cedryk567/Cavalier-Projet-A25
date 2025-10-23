import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const StyleSimpleSVG = `
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
  ${StyleSimpleSVG}
  //margin vers la droite et gauche
  margin: ${({ margin }) => margin || "0 0.5rem "};

  svg {
    width: ${({ svgSize }) => svgSize || "1rem"};
    height: ${({ svgSize }) => svgSize || "1rem"};
  }
`;
