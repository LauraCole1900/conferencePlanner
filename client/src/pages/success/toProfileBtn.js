import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const ToProfileBtn = () => {
  const location = useLocation();
  const { user } = useAuth0();

  return (
    <Link to="/profile" className={location.pathname === "/profile" ? "sessionbtn active" : "sessionbtn"}>
      <Button type="button">Return to profile</Button>
    </Link>
  )
}

export default ToProfileBtn;