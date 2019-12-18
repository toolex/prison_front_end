import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/newprisoner">New Prisoner</Link>
    </li>
    <li>
      <Link to="/newcell">New Cell</Link>
    </li>
  </ul>
);
}
export default NavBar;
