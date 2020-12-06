import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  const { user } = useAuth0();
  const location = useLocation();
  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand className="mylogo">
      <div><img alt="logo" src="/images/ccLogo.png" height="60" /></div>
        <div>&nbsp;&nbsp;Hello, <Link to="/profile" className={location.pathname === "/profile" ? "mylogo active" : "mylogo"}>
          !
        </Link></div>
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
          <Link to="/conferences" className={location.pathname === "/conferences" ? "navlink active" : "navlink"}>
            Conferences
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;