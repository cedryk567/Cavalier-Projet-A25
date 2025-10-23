import styled from "styled-components";

/**Icon utilisé dans l'application*/

export const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  border-radius: 50%;
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ color }) => color || "#ccc"};
  transition: all 0.2s ease;
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;

  svg {
    width: 60%;
    height: 60%;
    stroke: currentColor;
  }

  &:hover{
    background-color: ${({bgHover}) => bgHover || "transparant"}
  }
`;

export const StyledRondIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  border-radius: 50%;
  border: 2px solid ${({ borderColor }) => borderColor || "#ccc"};
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ color }) => color || "#ccc"};
  transition: all 0.2s ease;
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;

  &:hover {
    border-color: ${({ hoverBorder }) => hoverBorder || "green"};
    background-color: ${({ hoverBg }) => hoverBg || "rgba(255,255,255,0.05)"};
    color: ${({ hoverColor }) => hoverColor || "white"};
    transform: ${({ hoverScale }) => (hoverScale ? "scale(1.05)" : "none")};
  }

  svg {
    width: 60%;
    height: 60%;
    stroke: currentColor;
  }
`;
