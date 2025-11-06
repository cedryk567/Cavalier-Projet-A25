import styled from "styled-components";

export const TableauContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  height: 100%;
  margin: 0 50px;
`;

export const Cellule = styled.div`
  grid-column: span ${({ span }) => span};
`;
