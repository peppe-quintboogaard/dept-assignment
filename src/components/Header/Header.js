import React, { useState } from "react";
import { Burger, Menu, CTA } from "./../../components";
import Logo from "./../../images/dept_logo.svg";
// import LogoBlack from "./../../images/dept_logo.svg";
// import LogoWhite from "./../../images/dept_logo_white.svg";

import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <section className="header-menu">
        {/* <img open={open} className="header-logo" src={({ open }) => (open ? LogoWhite  :  LogoBlack )} alt="Logo DEPT black" /> */}
        <img className="header-logo" src={Logo} alt="Logo DEPT black" />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </section>
      <section className="header-title">
        <h1>Work</h1>
      </section>
      <CTA />
    </header>
  );
};

export default Header;
