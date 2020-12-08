import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Button, Image, Row } from "react-bootstrap";
import "./style.css";

function Session({ session }) {
  const { user } = useAuth0();

  return (
    <Container>
      {session.map(e => (
        <Card className="session-card">
          <Card.Header className="card-title"><h2>{e.sessName}</h2></Card.Header>
          <Card.Img src={e.image} alt={e.name} />
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
            {/* {user.email === e.email && */}
              <div>
                <Link to={{
                  state: { sessInfo: session },
                  pathname: `/edit_session/${e._id}`
                }}>
                  <Button style={{ width: "100%" }}>Edit</Button>
                </Link>
              </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Session;