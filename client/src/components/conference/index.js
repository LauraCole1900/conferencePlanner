import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference(props) {
    return (
        <Container fluid className="mycontainer">
            <Card className="conferenceCard">
                <div key={props.conference.title}>
                    <Card.Header className="card-title"><h2>{props.conference.title}</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row className="cardBody">
                                <h3 className="cardBody">Description</h3>
                            </Row>
                            <Row>
                                <p className="cardBody">{props.conference.discription}</p>
                            </Row>
                            <Row>
                                <h3 className="cardBody">Location: {props.conference.location}</h3>
                            </Row>
                            <Row>
                                <h3 className="cardBody"> Starts: {props.conference.startDate}</h3>
                            </Row>
                        </Card.Text>
                        <div className="btndiv">
                            <Button className="btn" rel="noreferrer noopener" target="_blank">Register</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    );
}

export default Conference;