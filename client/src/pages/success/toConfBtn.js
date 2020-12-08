import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const ToConfBtn = () => {
  const location = useLocation();
  const { user } = useAuth0();

  return (
    <Link to="/conferences" className={location.pathname === "/conferences" ? "sessionbtn active" : "sessionbtn"}>
      <Button type="button">Return to conferences</Button>
    </Link>
  )
}

export default ToConfBtn;