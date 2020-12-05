import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const SessionSuccess = () => {
  const location = useLocation();

  return (
    <Container fluid>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <h1>You've successfully added a session!</h1>
          <h4>Add more now?</h4>
        </Col>
      </Row>
      <Row>
        <Col sm={3}></Col>
        <Col sm={3}>
          <Link to="/add_session" className={location.pathname === "/add_session" ? "sessionbtn active" : "sessionbtn"}>
            <Button type="button">Yes, add sessions!</Button>
          </Link>
        </Col>
        <Col sm={3}>
          <Link to="/profile" className={location.pathname === "/profile" ? "sessionbtn active" : "sessionbtn"}>
            <Button type="button">Not now</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default SessionSuccess;