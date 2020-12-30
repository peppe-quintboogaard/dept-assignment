import React from "react";

import "./index.css";

const Filter = ({ setFilter }) => {
  const filterValue = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form className="cases-filter form">
      <label htmlFor="" className="form-label" id="filter">
        Show me
      </label>
      <select onChange={filterValue} className="form-select" name="options" id="filter">
        <option className="form-option" value="all">
          All work
        </option>
        <option className="form-option" value="alphabetical-az">
          Alphabetical A-Z
        </option>
        <option className="form-option" value="alphabetical-za">
          Alphabetical Z-A
        </option>
      </select>
    </form>
  );
};

export default Filter;
