import styled, { css } from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ variation }) =>
    variation === "text" ? "column" : "row"};
  align-items: center;
  justify-content: ${({ variation }) =>
    variation === "text" ? "flex-start" : "center"};
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3 ease;
  border-radius: 15px;

  width: ${({ width }) => width || "30rem"};
  height: ${({ height }) =>
    height || (variation === "text" ? "40rem" : "30rem")};

  &:hover {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: ${({ variation }) => (variation === "text" ? "70%" : "100%")};
  object-fit: cover;
  border-radius: ${({ variation }) =>
    variation === "text" ? "12px 12px 0 0" : "12px"};
`;

export const CardContent = styled.div`
  display: ${({ variant }) => (variant === "text" ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.8rem;
  gap: 0.5rem;
  height: 30%;
  width: 100%;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #555;
    font-size: 0.9rem;
  }
`;
