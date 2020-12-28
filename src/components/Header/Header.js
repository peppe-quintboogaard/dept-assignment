import React from "react";
import { Burger, Menu, CTA } from "./../../components";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <Burger />
      <Menu />
      <section className="header-title">
        <h1>Work</h1>
      </section>
      <CTA />
    </header>
  );
};

export default Header;
