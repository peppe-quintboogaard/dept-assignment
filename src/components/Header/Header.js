import React from "react";
import logo from "./../../images/dept_logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <img className="menu-logo" src={logo} alt="Logo DEPT black" />
        <button className="menu-btn">
          <span className="menu-btn--line"></span>
          <span className="menu-btn--line"></span>
        </button>
      </div>
      <h1 className="header-title">Work</h1>
    </header>
  );
};

export default Header;
