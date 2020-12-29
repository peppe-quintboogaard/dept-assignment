import React, { useEffect, useState } from "react";
import Filter from "../Filter";

import "./index.css";

const Cases = ({ data, setData }) => {
  let cases = data.cases;
  const [filter, setFilter] = useState("all");

  const filterHandler = () => {
    console.log(filter);
    switch (filter) {
      case "all":
        cases.sort();
        break;
      case "alphabetical-az":
        cases.sort((a, b) => (a.company > b.company ? -1 : b.company > a.company ? 1 : 0));
        break;
      case "alphabetical-za":
        cases.sort((a, b) => (a.company < b.company ? -1 : b.company < a.company ? 1 : 0));
        break;
      default:
        cases = data.cases;
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [filter, setFilter]);

  return (
    <section className="cases">
      <Filter setFilter={setFilter} />
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
