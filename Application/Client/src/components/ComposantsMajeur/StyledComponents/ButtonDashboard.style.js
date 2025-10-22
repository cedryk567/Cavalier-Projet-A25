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

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

export const StyledButton = styled.button`
${StyleDeBase}
`

export const StyledNavLink = styled(NavLink)`
${StyleDeBase}
`
