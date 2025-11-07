import styled from "styled-components";

export const TableauTitreValue = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  height: 100%;
  margin: 0 2rem;
`;

export const TableauRowItem = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Cellule = styled.div`
  grid-column: span ${({ span }) => span};
  font-size: ${({ size }) => size || "1.2rem"};
`;
