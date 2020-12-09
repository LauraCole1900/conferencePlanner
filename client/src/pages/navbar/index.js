import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, NavDropdown, Nav, Row } from "react-bootstrap";
import "./style.css";

const Navigation = () => {
    const { logout } = useAuth0();
    const location = useLocation();
    return (

        <>
            <Navbar className="gradientnav navbar-expand-lg" style={{ borderRadius: "15px" }} collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand className="mylogo ml-3">
                    <Link to="/profile">
                        <div><img alt="logo" src="/images/ccLogo.png" height="60" /></div>
                        </Link>
                        <div style={{ textAlign: "center", paddingLeft: "1vw" }}>
                            <div className="play_fair">COOL CATS</div>
                            <div className="play_fair"style={{ fontSize: "0.7vw", fontWeight: "bold" }}>Conference Planner</div>
                        </div>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/conferences" className={location.pathname === "/conferences" ? "navlink active" : "navlink"}>
                                    Conferences</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link  to="/profile" className={location.pathname === "/profile" ? "navlink active" : "navlink"}>
                                    Profile </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className="roboto">
                            <Link to="/conferences" className={location.pathname === "/conferences" ? "navlink active" : "navlink"}>
                                Conferences</Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link className="roboto" to="/profile" className={location.pathname === "/profile" ? "navlink active" : "navlink"}>
                                My Profile</Link>
                        </Nav.Link>
                        <Nav.Item className="mt-2">
                            <Link style={{ fontWeight: "bold" }} className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
                                LOG OUT</Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;