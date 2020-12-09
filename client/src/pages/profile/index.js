import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Conference from "../../components/conference";
import API from "../../utils/API";
import "./style.css";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();
  const [userConfArr, setUserConfArr] = useState([])
  const [attConfArr, setAttConfArr] = useState([])

  function saveUserToDb() {
    API.saveUser(user)
      //   .then(res => loadConferences())
      .catch(err => console.log(err));
  }

  useEffect(() => {
    saveUserToDb();
    API.getConferencebyUser(user.email).then(resp => {
      const tempArr = resp.data
      console.log(tempArr)
      const sortedArr = tempArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
      setUserConfArr(sortedArr);
    })

    API.getAttConference(user.email).then(resp => {
      const attArr = resp.data
      console.log(attArr)
      const sortedAtt = attArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
      setAttConfArr(sortedAtt);
    })





  }, [])

  // console.log(userConfArr)


  return (
    isAuthenticated && (
      <div>
        {/* user info */}
        <Col lg={12}>
          <div style={{ margin: "auto", width: "50%", borderRadius: "15px" }} className="info mt-5">
            <div style={{ paddingLeft: "6vw" }}>
              <Row>
                <img className="profilePic" style={{ borderRadius: "50%" }} src={user.picture} alt="profilePic"></img>
                <div className="pl-3">
                  <h1>{user.nickname.toUpperCase()}</h1>
                  <h3 style={{ fontSize: "2vh" }} className="job">{user.email}</h3>
                </div>
              </Row>
            </div>
          </div>
        </Col>

        <div className="headerBorder"></div>


        {/* my conferences */}
        <div>
          <Row>
            <Col lg={6} md={12} className="bigCol">
              <Card style={{ borderRadius: "15px" }} >
                <Col lg={12}>
                  <Row>
                    <Card.Header style={{ width: "100%" }}>
                      <Row>

                        <Col lg={9}>
                          <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Your Conferences</h1>
                        </Col>
                        <Col lg={3}>
                          <div className="ml-4">
                            <Link to="/create_conference" className={location.pathname === "/create_conference" ? "link active" : "link"}>
                              <Button data-toggle="popover" title="Start A Conference" >
                                <svg width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                              </Button>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </Card.Header>
                  </Row>
                </Col>
                <Conference conference={userConfArr} />
              </Card>
            </Col>
            {/* attending conference */}
            <Col lg={6} md={12} className="bigCol">
              <Card style={{ borderRadius: "15px" }} >
                <Col lg={12}>
                  <Row>
                    <Card.Header style={{ width: "100%", }}>
                      <h1 style={{ textAlign: "center", fontSize: "2vw" }}>Attending</h1>
                    </Card.Header>
                  </Row>
                </Col>
                <Conference conference={attConfArr} />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  )
};

export default Profile
