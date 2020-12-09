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
               

                    <div  style={{ width:"50%", margin: "auto", borderRadius: "15px", paddingTop: "2vh", border: "5px solid #274046" }} className="gradientnav my-5">
                        <div style={{width:"50%", margin:"auto"}}>
                            <Row>
                                <Col lg={4}>
                                <img className="profilePic" style={{ borderRadius: "50%", marginBottom: "1vw" }} src={user.picture} alt="profilePic"></img>
                                </Col>
                                <Col lg={8}>
                                <div style={{margin:"auto", paddingLeft:"1vw"}}>
                                    <h1 style={{fontSize:"2vw"}} className="play_fair">{user.name.toUpperCase()}</h1>
                                    <h3 style={{ fontSize: "1vw" }} className="job">{user.email}</h3>
                                </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    




                {/* my conferences */}
                
                    <Row>
                        <Col lg={6} md={12} className="bigCol">
                            <Card  style={{ borderRadius: "15px", border: "5px solid #274046"  }}  >
                                <Col lg={12}>
                                    <Row>
                                        <Card.Header style={{ width: "100%", borderBottom:"solid 3px #274046" }}>
                                            <Row>

                                                <Col lg={9}>
                                                    <h1 className="play_fair" style={{ textAlign: "center", fontSize: "2vw" }}>Your Conferences</h1>
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
                            <Card style={{ borderRadius: "15px", border: "5px solid #274046"  }} >
                                <Col lg={12}>
                                    <Row>
                                        <Card.Header className="gradient" style={{ width: "100%", borderBottom:"solid 3px #274046" }}>
                                            <h1 className="play_fair" style={{ textAlign: "center", fontSize: "2vw" }}>Attending</h1>
                                        </Card.Header>
                                    </Row>
                                </Col>
                                <Conference conference={attConfArr} />
                            </Card>
                        </Col>
                    </Row>
            
            </div>
        )
    )
};

export default Profile
