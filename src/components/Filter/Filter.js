import React from "react";

import "./index.css";

const Filter = () => {
  return (
    <form className="cases-filter form">
      <label htmlFor="" className="form-label" id="filter">
        Show me
      </label>
      <select className="form-select" name="options" id="filter">
        <option value="all">all work</option>
        <option value="other">Option 1</option>
        <option value="nothing">Option 2</option>
      </select>
    </form>
  );
};

export default Filter;
