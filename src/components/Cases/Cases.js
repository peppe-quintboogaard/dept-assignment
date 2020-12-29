import React from "react";
import Filter from "../Filter";

import "./index.css";

const Cases = ({ data, setData }) => {
  const cases = data.cases;
  console.log(cases);

  return (
    <section className="cases">
      <Filter />
      {cases.map((item) => (
        <article key={item.id} className="case">
          <img className="case-img" src={item.img} alt="case" />
          <p className="case-title">{item.company}</p>
          <h2 className="case-caption">{item.caption}</h2>
        </article>
      ))}
    </section>
  );
};

export default Cases;
