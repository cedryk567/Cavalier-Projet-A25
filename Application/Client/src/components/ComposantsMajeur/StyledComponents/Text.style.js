import styled from "styled-components";

export const StyledText = styled.span`
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || 500};
  color: ${({ color }) => color || "#ccc"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  transition: all 0.2s ease;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};

  &:hover {
    color: ${({ hoverColor }) => hoverColor || "#green"};
    transform: ${({ hoverScale }) => (hoverScale ? "scale(1.05)" : "none")};
  }
`;
