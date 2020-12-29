import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  open === true ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>Werk</p>
        </li>
        <li>
          <p>Over</p>
        </li>
        <li>
          <p>Diensten</p>
        </li>
        <li>
          <p>Partners</p>
        </li>
        <li>
          <p>Stories</p>
        </li>
        <li>
          <p>Vacatures</p>
        </li>
        <li>
          <p>Events</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
