import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Work Experience", id: "workExperience" },
  ];

  return (
    <header className="sticky-header">
      <nav className="header-nav">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            activeClass="active"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
