import React from "react";

const Form = () => {
  return (
    <form className="cases-filter form">
      <label htmlFor="" className="form-label" id="filter">
        Show me
      </label>
      <select name="options" id="filter">
        <option value="all">All</option>
        <option value="other">Option 1</option>
        <option value="nothing">Option 2</option>
      </select>
    </form>
  );
};

export default Form;
