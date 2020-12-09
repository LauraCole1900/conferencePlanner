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
  const [conference, setConference] = useState()
  const [sessionArray, setSessionArray] = useState([])
  const [search, setSearch] = useState("")
  const [pageReady, setPageReady] = useState(false)
  const urlArray = window.location.href.split("/")
  const confId = urlArray[urlArray.length - 1]
  console.log("Variable check")
  console.log(confId)



  useEffect(() => {
    API.getConferencebyID(confId).then(resp => {
      console.log("confbyID")
      console.log(resp.data)
      const tempArr = resp.data
      setConference(tempArr[0])
      setPageReady(true)
      
    })

    API.getSession(confId).then(resp => {
      console.log("sessions")
      console.log(resp.data)
      const sessArr = resp.data
      const sortedSess = sessArr.sort((a, b) => (a.StartTime > b.StartTime) ? 1 : -1);
      setSessionArray(sortedSess)
      return
    })
  }, [])


  console.log(conference)
  console.log(sessionArray)

  function searchFilter(data) {
    return data.filter((session) => session.title.toLowerCase().indexOf(search) !== -1)
  }


  return (
    <>
      { pageReady === true && (
        <Container fluid className="mycontainer">
          <Row>

            <div>
              <div>conference info</div>
            </div>

            <Col lg={6}>
              <Card>
                <Col lg={4}>
                  <Card.Body>
                    <Form inline className="searchArea">
                      <FormControl className="mr-sm-2" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                      <Button>Search</Button>
                    </Form>
                    {user.email === conference.email &&
									<div>

										<Link to={{
											state: { confInfo: conference },
											pathname: `/add_session/${conference._id}`
										}}>
											<Button className="btn">Add session</Button>
										</Link>
									</div>}
                  </Card.Body>
                </Col>
              </Card>
            </Col>
            <Col lg={10}>
              {/* Here's where the sessions are generated, make new rows and then in each row make a session, give it props */}
              <Container fluid className="mycontainer">
                <Row>
                  {/* map over session array and pull out sessions with conference id that matches id in url */}
                  <Session session={sessionArray} email={conference.email} />
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )};
    </>
  );
}

export default ConfDetails;