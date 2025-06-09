import React from "react";
import CircularText from "../CircularText/CircularText";
import "./Navbar.css";

const navItems = [
  {
    id: 1,
    text: "About",
  },
  {
    id: 2,
    text: "Experience",
  },
  {
    id: 3,
    text: "Projects",
  },
  {
    id: 4,
    text: "Resume",
  },
];

function Navbar() {
  return (
    <div className="navbar-container">
      <p
        style={{
          fontSize: "26px",
          fontWeight: 600,
          color: "gray",
          fontFamily: "monospace",
        }}
      >
        HC
      </p>

      <div className="navitems-container">
        {navItems.map((item, key) => (
          <p key={key} className="navitem-container">
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
