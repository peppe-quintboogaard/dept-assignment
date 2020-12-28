import React from "react";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">Werk</a>
        </li>
        <li className="nav-item">
          <a href="/">Over</a>
        </li>
        <li className="nav-item">
          <a href="/">Diensten</a>
        </li>
        <li className="nav-item">
          <a href="/">Partners</a>
        </li>
        <li className="nav-item">
          <a href="/">Stories</a>
        </li>
        <li className="nav-item">
          <a href="/">Vacatures</a>
        </li>
        <li className="nav-item">
          <a href="/">Events</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
