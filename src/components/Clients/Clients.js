import React from "react";

import "./index.css";

const Clients = ({ data }) => {
  const clients = data.clients;

  return (
    <section className="clients">
      <h1 className="clients-title">Clients</h1>
      <p className="clients-paragraph">
        We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
      </p>
      <div className="client-grid">
        {clients.map((item) => (
          <article key={item.id} className="client">
            <img className="client-img" src={item.img} alt="client" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Clients;
