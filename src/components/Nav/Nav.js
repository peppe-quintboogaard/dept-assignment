import React from "react";

const Nav = () => {
  return (
    <ul className="nav-list">
      {/* something with adding class dynamically when hovering (state) */}
      <li className="nav-item nav-item--active">Home</li>
      <li className="nav-item">Werk</li>
      <li className="nav-item">Over</li>
      <li className="nav-item">Diensten</li>
      <li className="nav-item">Partners</li>
      <li className="nav-item">Stories</li>
      <li className="nav-item">Vacatures</li>
      <li className="nav-item">Events</li>
      <li className="nav-item">Contact</li>
    </ul>
  );
};
