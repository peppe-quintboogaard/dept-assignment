import React from "react";
import logo from "./../../images/dept_logo.svg";
import hero from "./../../images/hero_image.png";

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
      <img src={hero} alt="Background header" className="header-hero" />
      <button className="header-btn">view case</button>
    </header>
  );
};

export default Header;
