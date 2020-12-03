import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../utils/userContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  const location = useLocation();
  const { name } = useContext(UserContext);

  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand>
        Hello, <Link to="/profile" className={location.pathname === "/profile" ? "mylogo active" : "mylogo"}>
          {name}!
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/home" className={location.pathname === "/" ? "navlink active" : "navlink"}>
            Home
          </Link>
          <Link to="/profile" className={location.pathname === "/profile" ? "navlink active" : "navlink"}>
            My Profile
          </Link>
          <Link to="/conference" className={location.pathname === "/conference" ? "navlink active" : "navlink"}>
            Conferences
          </Link>
          <p>Logout</p>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;