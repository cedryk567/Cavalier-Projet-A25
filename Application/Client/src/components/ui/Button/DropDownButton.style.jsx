import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton,
  ArrowIcon,
  DropdownMenu,
  DropdownItem,
} from "../../ComposantsMajeur/StyledComponents/DropDownButton.style";
import DownArrowSVG from "../../../img/DownArrowSVG";

export const StyledDropdown = ({
  label = "Menu",
  items = [],
  onChange,
  defaultValue,
}) => {
  const [open, setOpen] = useState(false);
  const [objetSelectionner, setObjetSelectionner] = useState(
    defaultValue || label
  );

  function handleSelect(item) {
    setObjetSelectionner(item.label);
    setOpen(false);

    if (onChange) {
      const fakeEvent = {
        target: { value: item.value ?? item.label },
      };
      onChange(fakeEvent);
    }
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setOpen(!open)}>
        {objetSelectionner}
        <ArrowIcon open={open}>
          <DownArrowSVG />
        </ArrowIcon>
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

{
  /**DropDown pas finis */
}
export const StyledDropdownSansBordure = ({
  label = "Menu",
  items = [],
  onChange,
  defaultValue,
}) => {
  const [open, setOpen] = useState(false);
  const [objetSelectionner, setObjetSelectionner] = useState(
    defaultValue || label
  );

  function handleSelect(item) {
    setObjetSelectionner(item.label);
    setOpen(false);

    if (onChange) {
      const fakeEvent = {
        target: { value: item.value ?? item.label },
      };
      onChange(fakeEvent);
    }
  }

  return (
    <DropdownContainer>
      <DropdownButton
        color="black"
        border="1px solid black"
        borderRadius = "25px"
        hoverBackground="#ccc"
        onClick={() => setOpen(!open)}
      >
        {objetSelectionner}
        <ArrowIcon open={open}>
          <DownArrowSVG />
        </ArrowIcon>
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
