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

    const urlArray = window.location.href.split("/")
    const confId = urlArray[urlArray.length - 1]



    useEffect(()=>{
        API.getConferencebyID(confId).then(resp => {
            console.log("confbyID")
            console.log(resp.data)
            const temparr = resp.data
            setConference(temparr[0])
            return 
        })

        API.getSession(confId).then(resp => {
            console.log("sessions")
            console.log(resp.data)
            const Sesarr = resp.data
            setSessionArray(Sesarr)
            return 
        })
    }, [])


    
    console.log(conference)

    //   console.log("session array")
    //   console.log(sessionArray)


    function addSession() {
    }
    function handleSessionEdit() {
    }
    function searchFilter(data) {
        return data.filter((session) => session.title.toLowerCase().indexOf(search) !== -1)
    }





    return (
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