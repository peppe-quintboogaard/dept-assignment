import React from "react";

import "./Client.css";
import Nivea from "./../../images/Nivea_logo_zwart.png";
import Mona from "./../../images/Mona_logo_zwart.png";
import Transavia from "./../../images/Transavia_logo_zwart.png";
import Zalando from "./../../images/Zalando_logo_zwart.png";
import Tomtom from "./../../images/Tomtom_logo_zwart.png";
import Unilever from "./../../images/Unilever_logo_zwart.png";

const Client = () => {
  // different function to filter elements

  return (
    // nice interaction when hovering client image
    <div className="client-grid">
      <article className="client">
        <img src={Nivea} alt="" className="client-img" />
      </article>
      <article className="client">
        <img src={Mona} alt="" className="client-img" />
      </article>
      <article className="client">
        <img src={Transavia} alt="" className="client-img" />
      </article>
      <article className="client">
        <img src={Zalando} alt="" className="client-img" />
      </article>
      <article className="client">
        <img src={Tomtom} alt="" className="client-img" />
      </article>
      <article className="client">
        <img src={Unilever} alt="" className="client-img" />
      </article>
    </div>
  );
};

export default Client;
