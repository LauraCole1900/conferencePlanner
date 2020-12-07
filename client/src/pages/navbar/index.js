import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "react-bootstrap";
import "./style.css";

const Navigation = () => {
  const { logout } = useAuth0();
  const location = useLocation();
  return (
    // <Navbar expand="sm" className="navbar">
    //   <Navbar.Brand className="mylogo">
    //     <div><img alt="logo" src="/images/ccLogo.png" height="60" /></div>
    //   </Navbar.Brand>
    //   <Navbar.Toggle className="randomDot" aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav>
    //       <Link to="/profile" className={location.pathname === "/profile" ? "navlink active" : "navlink"}>
    //         My Profile
    //       </Link>

    //       <span className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
    //         Logout
    //       </span>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar >
    <Navbar className="navbar navbar-expand-lg">
      <Navbar.Brand className="mylogo">
        <div><img alt="logo" src="/images/ccLogo.png" height="60" /></div>
      </Navbar.Brand>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/conferences" className={location.pathname === "/conferences" ? "navlink active" : "navlink"}>
              Conferences
          </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className={location.pathname === "/profile" ? "navlink active" : "navlink"}>
              My Profile
          </Link>
          </li>
          <li className="nav-item">
            <span className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </span>
          </li>
        </ul>
      </div>
    </Navbar >
  )
}

export default Navigation;