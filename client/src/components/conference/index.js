import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference(props) {
    const { user, isAuthenticated } = useAuth0();
    let id = props.conference._id;

    function handleRegister() {
        // grab conference ID
        // link to Registration page with conference ID already populated
    }

    function handleEdit() {
        // grab conference ID
        // link to create_conference page with info already populated
    }

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
                                <p className="cardBody">{props.conference.description}</p>
                            </Row>
                            <Row>
                                <h3 className="cardBody">Location: {props.conference.location}</h3>
                            </Row>
                            <Row>
                                <h3 className="cardBody"> Dates: {props.conference.StartDate} through {props.conference.EndDate}</h3>
                            </Row>
                        </Card.Text>
                        <div className="btndiv">
                            <Button className="btn" onClick={handleRegister}>Register</Button>
                            {user.email === props.conference.email &&
                                <div>
                                    <Link to={{
                                        pathname: `/create_conference/${id}`,
                                        state: { confInfo: props.conference }
                                    }}>
                                        <Button className="btn" onClick={handleEdit}>Edit conference info</Button>
                                    </Link>
                                </div>}
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    );
}

export default Conference;