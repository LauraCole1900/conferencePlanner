import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import Session from "../../components/session";
import Conference from "../../components/conference";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import "./style.css";


function ConfDetails() {
<<<<<<< HEAD
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
            setSessionArray(sessArr)
            return
        })
    }, [])


    console.log(conference)
    console.log(sessionArray)

    const confArry = [];
    confArry.push(conference)
    console.log(confArry)



    function searchFilter(data) {
        return data.filter((session) => session.sessName.toLowerCase().indexOf(search) !== -1)
    }


    return (
        <>
            { pageReady === true && (
                <div className="mt-4">
                    <Form style={{ width: "50%", margin: "auto" }}>
                        <FormControl className="mr-sm-2" type="text" placeholder="Enter Session Name..." value={search} onChange={(e) => setSearch(e.target.value)} />
=======
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
>>>>>>> main
                    </Form>
                    <Row>
                        <Col lg={6} md={12}>
                            <Card style={{ borderRadius: "15px", marginTop: "4.5vh" }} >
                                <Col lg={12}>
                                    <Row>
                                        <Card.Header style={{ width: "100%", }}>
                                            <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Conference</h1>
                                        </Card.Header>
                                    </Row>
                                </Col>
                                <Conference conference={confArry} />
                            </Card>



                        </Col>
                        <Col lg={6} md={12}>
                            <Card style={{ borderRadius: "15px", marginTop: "4.5vh" }} >
                                <Col lg={12}>
                                    <Row>
                                        <Card.Header style={{ width: "100%", }}>
                                            <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Sessions</h1>
                                        </Card.Header>
                                    </Row>
                                </Col>
                                <Session session={searchFilter(sessionArray)} email={conference.email} />
                            </Card>

                        </Col>
                    </Row>
                </div>
            )};
        </>
    );
}

export default ConfDetails;

