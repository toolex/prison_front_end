import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
  <div id = "menu-outer">
  <div class="table">
  <ul id="horizontal-list">
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
  </div>
  </div>
);
}
export default NavBar;
