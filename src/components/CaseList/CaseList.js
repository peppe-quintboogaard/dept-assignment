import React from "react";

import Case from "./Case";

const CaseList = () => {
  return (
    <div className="case-list">
      {/* map function to render all different cases from Case.js */}
      <Case />
      <Case />
    </div>
  );
};

export default CaseList;
