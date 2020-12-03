import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference(props) {
  return (
    <Container>
      <Row>  
        <Card col-4>
          <Card.Body>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Card.Body>
        </Card>
        <Card col-8 className="conferenceCard">
          <Card.Header className="card-title"><h2>Conference Name</h2></Card.Header>
          <Card.Body>
            <Card.Text>
              <Row className="cardBody">
                <h3 className="cardBody">Description</h3>
              </Row>
              <Row>
                <p className="cardBody">This would be a description of the conference.  It might include the subject, speakers, who its for etc.</p>
              </Row>
              <Row>
                <h3 className="cardBody">Location:</h3>
              </Row>
              <Row>
                <h3 className="cardBody">Date:</h3>
              </Row>
            </Card.Text>
            <div className="btndiv">
              <Button className="btn" href={props.register} rel="noreferrer noopener" target="_blank">Register</Button>
            </div>
          </Card.Body>
        </Card>
        <Card col-8 className="conferenceCard">
          <Card.Header className="card-title"><h2>Conference Name</h2></Card.Header>
          <Card.Body>
            <Card.Text>
              <Row className="cardBody">
                <h3 className="cardBody">Description</h3>
              </Row>
              <Row>
                <p className="cardBody">This would be a description of the conference.  It might include the subject, speakers, who its for etc.</p>
              </Row>
              <Row>
                <h3 className="cardBody">Location:</h3>
              </Row>
              <Row>
                <h3 className="cardBody">Date:</h3>
              </Row>
            </Card.Text>
            <div className="btndiv">
              <Button className="btn" href={props.register} rel="noreferrer noopener" target="_blank">Register</Button>
            </div>
          </Card.Body>
        </Card>
      </Row>  
    </Container>
  );
}

export default Conference;