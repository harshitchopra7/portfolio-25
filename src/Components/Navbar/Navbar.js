import React from "react";
import CircularText from "../CircularText/CircularText";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  {
    id: 1,
    text: "Skills",
    goToSection: "skills",
  },
  {
    id: 2,
    text: "Experience",
    goToSection: "experience",
  },
  {
    id: 3,
    text: "Projects",
    goToSection: "projects",
  },
  {
    id: 4,
    text: "Resume",
  },
];

const goToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

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
          <p
            key={key}
            className="navitem-container"
            onClick={() => item?.goToSection && goToSection(item?.goToSection)}
          >
            {item.text}
          </p>
        ))}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
