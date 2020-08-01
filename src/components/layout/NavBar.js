import React from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div className="container space">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
