import React from "react";
import "./Navbar.scss";
import Logo from "../logo/Logo";
import Links from "../links/Links";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo />
      <Links />
    </div>
  );
};

export default Navbar;
