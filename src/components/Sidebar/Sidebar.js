import React from "react";
import ".//Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder="Search Places..."
      />
    </div>
  );
};

export default Sidebar;
