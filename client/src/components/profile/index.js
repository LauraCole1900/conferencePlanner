import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./style.css";

function Profile() {
  return (
    <Container fluid className="mycontainer">
      <Row className="rowMain">
        <Col lg={3} className="column info">
          <h1>Name Goes Here</h1>
          <h3 className="job">Job Title goes Here</h3>
          <div id="textbox">
            <p id="pleft">Edit your information</p>
            <p id="pright">Change Password</p>
          </div>
        </Col>
        <Col lg={9} className="column stats">
          <Container fluid className="mycontainer">
            <Row className="row">
              <Col  lg={3} className="d-lg-block d-md-none"></Col>
              <Col lg={2} className="column">
                <p id="pcreate">Created: X</p>
              </Col>
              <Col lg={2} className="d-lg-block d-md-none"></Col>
              <Col lg={2} className="column">
                <p id="pattend">Attending: Y</p>
              </Col>
              <Col lg={3} className="column"></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
