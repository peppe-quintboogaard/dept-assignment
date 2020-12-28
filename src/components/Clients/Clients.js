import React from "react";

import "./index.css";
// delete afterwards
import Nivea from "./../../images/Nivea_logo_zwart.png";
import Mona from "./../../images/Mona_logo_zwart.png";
import Transavia from "./../../images/Transavia_logo_zwart.png";
import Zalando from "./../../images/Zalando_logo_zwart.png";
import Tomtom from "./../../images/Tomtom_logo_zwart.png";
import Unilever from "./../../images/Unilever_logo_zwart.png";

const Clients = () => {
  return (
    <section className="clients">
      <h1 className="clients-title">Clients</h1>
      <p className="clients-paragraph">
        We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
      </p>
      {/* map function to render all different cases from Case.js */}
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
    </section>
  );
};

export default Clients;
