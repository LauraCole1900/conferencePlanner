import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();
  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand className="mylogo">
      <div><img alt="logo" src="/images/ccLogo.png" height="60" /></div>
      </Navbar.Brand>
      <Navbar.Toggle className="randomDot" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/logout" className={location.pathname === "/logout" ? "navlink active" : "navlink"}>
            Log Out
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