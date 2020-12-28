import React from "react";

import Logo from "./../../images/dept_logo.svg";

import "./index.css";

const Burger = () => {
  return (
    <section className="header-menu">
      <img className="header-logo" src={Logo} alt="Logo DEPT black" />
      <button className="header-btn">
        <span className="header-btn--line"></span>
        <span className="header-btn--line"></span>
      </button>
    </section>
  );
};

export default Burger;
