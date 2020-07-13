import React from "react";
import logo from "./img/logo.png";

export const NavBar = () => {
  return (
    <nav>
      <div className="container space">
        <img src={logo} alt="" />

        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
