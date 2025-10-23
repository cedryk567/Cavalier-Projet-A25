import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background: transparent;
  color: ${({color}) => color || "#fff"};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #444;
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0%;
  background: #222;
  border-radius: 8px;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  min-width: 150px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  list-style: none;
  z-index: 10;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  color: #ccc;
  cursor: pointer;

  &:hover {
    background: #444;
    color: white;
  }
`;
