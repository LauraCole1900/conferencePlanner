import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./style.css";

function Profile() {
  return (
    <Container fluid className="mycontainer">
      <Row className="row">
        <Col lg={3} className="column info">
          <h1>Name Goes Here</h1>
          <h3>Job Title goes Here</h3>
          <p>Edit your information here <span class="right">Change Password</span></p>
        </Col>
        <Col lg={9} className="column stats">
          <p>Created: X</p>
          <p>Attending: Y</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
