import React from "react";
import Filter from "../Filter";
// filter
import img from "./../../images/bolcom.png";

import "./index.css";

const Cases = () => {
  // different function to filter elements

  return (
    <section className="cases">
      <Filter />
      <article className="case">
        <img src={img} alt="" className="case-img" />
        <p className="case-title">bol.com</p>
        <h2 className="case-caption">A summer island in the Netherlands</h2>
        {/* <a className="case-link" href="">Disable on mobile</a> */}
      </article>
    </section>
  );
};

export default Cases;
