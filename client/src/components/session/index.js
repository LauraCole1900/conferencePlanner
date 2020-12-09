import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Button, Image, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import "./style.css";


function Session({ session, email }) {
    const { user } = useAuth0();
    const history = useHistory();

    function handleDelete(sessId) {
        API.deleteSession(sessId).then(
            history.push("/deleted")
        )
    }

    return (
        <>
            <div>
                {session.map(e => (
                    <Col>
                        <Row>
                            <div className="backgroundBody gradient" style={{ width: "100%", borderRadius: "15px", }} key={e.sessName}>
                                <Card.Body className="gradient" >
                                    <Card style={{ borderRadius: "10px" }}>
                                        <Card.Header className="gradient2">
                                            <Row>
                                                <Col lg={10}>
                                                    <h2 className="play_fair" style={{ fontSize: "1.3vw" }}>{e.sessName.toUpperCase()}</h2>
                                                </Col>
                                                <Col lg={2}>
                                                    {user.email === email &&
                                                        <Link to={{
                                                            state: { sessInfo: session },
                                                            pathname: `/deleted`
                                                        }}>

                                                            <Button data-toggle="popover" title="Delete This Session" onClick={() => handleDelete(e._id)}>
                                                                <svg width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                </svg>
                                                            </Button>
                                                        </Link>}
                                                </Col>
                                            </Row>
                                        </Card.Header>



                                        <Card.Body className="gradient2">
                                            <Row>
                                                <Col lg={8} md={12}>
                                                    <div className="roboto" style={{ fontSize: "1vw", overFlow: "auto" }}>{e.sessDesc}</div>
                                                </Col>

                                                <Col lg={4} md={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <Row>
                                                            <h3 className="roboto" style={{ fontSize: ".8vw" }}>Presenter:</h3>
                                                            <h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.sessPresenter}</h3>
                                                        </Row>
                                                    </div>
                                                    <div style={{ textAlign: "center" }}>
                                                        <Row>
                                                            <h3 className="roboto" style={{ fontSize: ".8vw" }}>Date:</h3>
                                                            <h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.sessionDate.slice(5).replace("-", "/")}</h3>
                                                        </Row>
                                                    </div>

                                                    <div>
                                                        <Row>
                                                            <h3 className="roboto" style={{ fontSize: ".8vw" }}>Times:</h3>

                                                            <h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.startTime} | {e.endTime}</h3>
                                                        </Row>
                                                    </div>

                                                    <div className="pt-5">
                                                        <Row>
                                                            <Col lg={12}>
                                                                {user.email === email &&
                                                                    <div>
                                                                        <Link to={{
                                                                            state: { sessInfo: session },
                                                                            pathname: `/edit_session/${e._id}`
                                                                        }}>
                                                                            <Button  data-toggle="popover" title="Edit This Session"  style={{ width: "10vw" }}>
                                                                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                            </svg>
                                                                            </Button>
                                                                        </Link>
                                                                    </div>}
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </div>
                        </Row>
                    </Col>
                ))}
            </div >
        </>
    );
}

export default Session;