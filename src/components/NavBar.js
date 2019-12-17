import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/newprisoner">New Prisoner</Link>
    </li>
  </ul>
);

export default NavBar;
