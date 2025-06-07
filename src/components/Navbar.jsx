import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>
        <Link to="/">Cameron Lopez</Link>
      </h1>
      <nav>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
