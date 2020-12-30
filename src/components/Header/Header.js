import React, { useState } from "react";
import { Logo, Burger, Menu, CTA } from "./../../components";

import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header" id="header">
      <section className="header-menu">
        <Logo open={open} />
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
