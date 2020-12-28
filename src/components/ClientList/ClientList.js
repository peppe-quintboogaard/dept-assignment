import React from "react";

import Client from "./Client";

const ClientList = () => {
  return (
    <div className="client-list">
      {/* map function to render all different cases from Case.js */}
      <Client />
    </div>
  );
};

export default ClientList;
