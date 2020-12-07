import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ConfSuccess = () => {
  const location = useLocation();
  const { user } = useAuth0();

  return (
    <Container fluid>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <h1>You've successfully created your conference!</h1>
          <h4>To edit your conference information or add sessions now,</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={5}></Col>
        <Col sm={2}>
          <Link to="/profile" className={location.pathname === "/profile" ? "sessionbtn active" : "sessionbtn"}>
            <Button type="button">Return to profile</Button>
          </Link>
        </Col>
        <Col sm={5}>
        </Col>
      </Row>
    </Container>
  )
}

export default ConfSuccess;