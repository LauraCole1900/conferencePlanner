import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Conference from "../../components/conference"
import "./style.css";

function Conferences() {
  return (
    <Container fluid className="mycontainer">
      <Row>
        <Col lg={2}>
          <Card col-4>
            <Card.Body>
              <Form inline className="searchArea">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={10}>
          {/* Heres where the conferences are generated, make new rows and then in each row make a conference, give it props */}
          <Container fluid className="mycontainer">
            <Row>
              <Conference />
              <Conference />
              <Conference />
            </Row>
          </Container>
        </Col>
        {/* <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </Row>
    </Container>
  );
}

export default Conferences;