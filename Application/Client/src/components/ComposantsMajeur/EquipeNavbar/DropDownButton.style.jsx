import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  ArrowIcon,
  DropdownMenu,
  DropdownItem,
} from "../StyledComponents/DropDownButton.style";

export const StyledDropdown = ({ label = "Menu", items = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const [objetSelectionner, setObjetSelectionner] = useState(label);

  function handleSelect(item) {
    setObjetSelectionner(item.label);
    if (onSelect) {
      onSelect(item);
    }
    setOpen(false);
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setOpen(!open)}>
         {label === objetSelectionner ? label : `${label} ${objetSelectionner}`}
        <ArrowIcon open={open}>▼</ArrowIcon>
      </DropdownButton>
      <DropdownMenu open={open}>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(item)}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
