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
    <Container>
      {session.map(e => (
        <Card className="session-card">
          <Card.Header className="card-title"><h2>{e.sessName}</h2></Card.Header>
          <Card.Img src={e.image} alt={e.name} />
          <Col lg={2}>
            {user.email === email &&
              <Link to={{
                state: { sessInfo: session },
                pathname: `/deleted`
              }}>

                <Button data-toggle="popover" title="Delete This Conference" onClick={() => handleDelete(e._id)}>
                  <svg width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                </Button>
              </Link>}
          </Col>
          <Card.Body>
            <Card.Text>
              <Row>
                <h3 className="float-left">{e.sessPresenter}</h3>
                <Image src={e.image} alt={e.sessPresenter} thumbnail className="float-right" />
              </Row>
              <Row>
                <p>{e.sessDesc}</p>
              </Row>
            </Card.Text>
            {user.email === email &&
              <div>
                <Link to={{
                  state: { sessInfo: session },
                  pathname: `/edit_session/${e._id}`
                }}>
                  <Button style={{ width: "100%" }}>Edit</Button>
                </Link>
              </div>}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Session;