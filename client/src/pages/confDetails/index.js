import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import Session from "../../components/session";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../../utils/userContext";
import "./style.css";


function ConfDetails() {
  const location = useLocation();
  const [sessionArray, setSessionArray] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    API.getSession().then(resp => {
      const sessionArr = resp.data
      return setSessionArray(sessionArr)
    })
  }, [])

  function searchFilter(data) {
    return data.filter((session) => session.title.toLowerCase().indexOf(search) !== -1)
  }

  console.log("session array")
  console.log(sessionArray)


  return (
    <Container fluid className="mycontainer">
      <Row>
        <Col lg={6}>
          <Card>
            <Col lg={4}>
              <Card.Body>
                <Form inline className="searchArea">
                  <FormControl className="mr-sm-2" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                  <Button>Search</Button>
                </Form>
                <Button type="button">Edit session CALLS PUT ROUTE</Button>
                <Link to="/add_session" className={location.pathname === "/add_session" ? "sessionbtn active" : "sessionbtn"}>
                  <Button type="button">Add sessions</Button>
                </Link>
              </Card.Body>
            </Col>
          </Card>
        </Col>
        <Col lg={6}>
          <Card col-4>
            <Card.Body>
              <Form inline className="newSession">
                <Link exact to="/add_session"><Button variant="outline-success">Add a Session</Button></Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={10}>
          {/* Here's where the sessions are generated, make new rows and then in each row make a session, give it props */}
          <Container fluid className="mycontainer">
            <Row>
              <Session session={searchFilter(sessionArray)} />
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

export default ConfDetails;