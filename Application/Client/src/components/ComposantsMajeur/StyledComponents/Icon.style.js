import styled from "styled-components";

/**Icon utilisé dans l'application*/

export const StyledIcon = styled.svg`
  width: ${({ size }) => size || "28px"};
  height: ${({ size }) => size || "28px"};
  color: ${({ color }) => color || "#ccc"};
  flex-shrink: 0;
  transition: color 0.2s ease, transform 0.2s ease;
  margin: ${({ margin }) => margin || "0"};
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
