import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./style.css";

function Session(props) {

  function handleSessionEdit() {
    // takes in session ID
    // Redirect to /add_session and calls PUT route
  }

  return (
    <Card className="session-card">
      <Card.Header className="card-title"><h2>{props.name}</h2></Card.Header>
      <Card.Img src={props.image} alt="{props.name}" />
      <Card.Body>
        <Card.Text>
          <Row>
            <h3 className="float-left">{props.presenter}</h3>
            <Image src={props.image} alt="{props.presenter}" thumbnail className="float-right" />
          </Row>
          <Row>
            <p>{props.description}</p>
          </Row>
        </Card.Text>
        <div className="btndiv">
          <Button className="btn" onClick={handleSessionEdit}>Edit This Session</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Session;