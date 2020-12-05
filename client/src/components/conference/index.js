import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference({ conference }) {
    return (
        <Container>
            <Card col-8 className="conferenceCard">
                {conference.map(e => (
                    <div key={e.title}>
                        <Card.Header className="card-title"><h2>{e.title}</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Row className="cardBody">
                                    <h3 className="cardBody">Description</h3>
                                </Row>
                                <Row>
                                    <p className="cardBody">{e.discription}</p>
                                </Row>
                                <Row>
                                    <h3 className="cardBody">Location: {e.location}</h3>
                                </Row>
                                <Row>
                                    <h3 className="cardBody"> Starts: {e.startDate}</h3>
                                </Row>
                            </Card.Text>
                            <div className="btndiv">
                                <Button className="btn" rel="noreferrer noopener" target="_blank">Register</Button>
                            </div>
                        </Card.Body>



                    </div>

                ))}

            </Card>
        </Container>
    );
}

export default Conference;