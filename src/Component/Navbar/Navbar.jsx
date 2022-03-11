import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
      <>
    <nav className="navbar">
      <div className="nav_container">
        <h3 className="logo">Logo</h3>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav_item">
            <NavLink exact to="/" className="nav_links"  activeClassName="active" 
             onClick={handleClick}>
              Home
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink exact to="/HowItWorks" className="nav_links" activeClassName="active"  onClick={handleClick}>
              How it Works
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink exact to="/Product" className="nav_links" activeClassName="active"  onClick={handleClick}>
              Product
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink exact to="/OurTeam" className="nav_links"activeClassName="active"  onClick={handleClick}>
              Our Team
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink exact to="/FAQ" className="nav_links"activeClassName="active"  onClick={handleClick}>
              FAQ
            </NavLink>
          </li>

          <li className="nav_item signup">
            <NavLink exact to="/SignUp" className="nav_links"activeClassName="active"  onClick={handleClick}>
              Sign Up
            </NavLink>
          </li>
        </ul>
        <div className="nav_icon"  onClick={handleClick}>
          <i
            class={click ? "fa fa-times" : "fa fa-bars"}
            aria-hidden="true"
            onClick={handleClick}
          ></i>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
