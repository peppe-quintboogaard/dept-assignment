import React from "react";

import Client from "./Client";

const ClientList = () => {
  return (
    <section className="clients">
      <h1 className="clients-title">Clients</h1>
      <p className="clients-paragraph">
        We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
      </p>
      {/* map function to render all different cases from Case.js */}
      <Client />
    </section>
  );
};

export default ClientList;
