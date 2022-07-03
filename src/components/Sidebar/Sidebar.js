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
      <div className="details-card">
        <div className="location">London, UK</div>
        <div className="date">Monday 11 July 2022</div>
        <div className="temp">18°c</div>
        <div className="weather-type">Mostly Cloudy</div>
        <div className="rain">Rain - 24%</div>
      </div>
    </div>
  );
};

export default Sidebar;
