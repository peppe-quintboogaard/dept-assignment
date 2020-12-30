import React, { useEffect, useState } from "react";
import Filter from "../Filter";

import "./index.css";

const Cases = ({ data }) => {
  let cases = data.cases;

  const [filter, setFilter] = useState("all");

  function sortCases(cases) {
    console.log(cases);
    if (filter === "all") {
      cases.sort((a, b) => (a.id < b.id ? -1 : b.id < a.id ? 1 : 0));
      return cases;
    } else if (filter === "alphabetical-az") {
      cases.sort((a, b) => (a.company < b.company ? -1 : b.company < a.company ? 1 : 0));
      return cases;
    } else if (filter === "alphabetical-za") {
      cases.sort((a, b) => (a.company > b.company ? -1 : b.company > a.company ? 1 : 0));
      return cases;
    }
  }

  useEffect(() => {
    sortCases(cases);
  }, [filter, setFilter]);

  return (
    <section className="cases">
      <Filter setFilter={setFilter} />
      {cases.map((item) => (
        <article key={item.id} className="case">
          <img className="case-img" src={item.img} alt="case" />
          <p className="case-title">{item.company}</p>
          <h2 className="case-caption">{item.caption}</h2>
          <p className="case-link">view case</p>
        </article>
      ))}
    </section>
  );
};

export default Cases;
