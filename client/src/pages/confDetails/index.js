import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import Session from "../../components/session";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import "./style.css";


function ConfDetails() {
  const { user } = useAuth0();
  const location = useLocation();
  const [sessionArray, setSessionArray] = useState([])
  const [search, setSearch] = useState("")


  // useEffect(() => {
  //   API.getSession().then(resp => {
  //     const sessionArr = resp.data
  //     return setSessionArray(sessionArr)
  //   })
  // }, [])

  function searchFilter(data) {
    return data.filter((session) => session.title.toLowerCase().indexOf(search) !== -1)
  }

  console.log("session array")
  console.log(sessionArray)

  function addSession() {
    // takes in conference ID
    // Redirect to /add_session and calls POST route
  }

  function handleSessionEdit() {
    // takes in session ID
    // Redirect to /add_session and calls PUT route
  }


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
                <Button type="button" onClick={handleSessionEdit}>Edit this session</Button>
                <Button type="button" variant="outline-success" onClick={addSession}>Add a session</Button>
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
              {/* map over session array and pull out sessions with conference id that matches id in url */}
              <Session session={sessionArray} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ConfDetails;