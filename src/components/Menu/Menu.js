import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  open === true ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Werk</a>
        </li>
        <li>
          <a>Over</a>
        </li>
        <li>
          <a>Diensten</a>
        </li>
        <li>
          <a>Partners</a>
        </li>
        <li>
          <a>Stories</a>
        </li>
        <li>
          <a>Vacatures</a>
        </li>
        <li>
          <a>Events</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
