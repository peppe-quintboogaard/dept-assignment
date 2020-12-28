import React from "react";
import img from "./../../images/bolcom.png";

import "./Case.css";

const Case = () => {
  // different function to filter elements

  return (
    <article className="case">
      <img src={img} alt="" className="case-img" />
      <p className="case-title">bol.com</p>
      <h2 className="case-caption">A summer island in the Netherlands</h2>
      {/* <a className="case-link" href="">Disable on mobile</a> */}
    </article>
  );
};

export default Case;
