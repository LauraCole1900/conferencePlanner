import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Conference from "../../components/conference";
import API from "../../utils/API";
import "./style.css";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();
  const [ userConfArr, setUserConfArr ] = useState([])

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
      setUserConfArr(tempArr);
    })
  },[])

  // console.log(userConfArr)


  return (
    isAuthenticated && (
      <div>
        <Container fluid className="mycontainer">
          <Row className="rowMain">
            <Col lg={3} className="column info">
              <h1>{user.name.toUpperCase()}</h1>
              <img className="profilePic" src={user.picture} alt="profilePic"></img>
              <h3 className="job">{user.email}</h3>
              <div id="textbox">
                <p id="pleft">Edit your information</p>
                <p id="pright">Change Password</p>
                <Link to="/create_conference" className={location.pathname === "/create_conference" ? "link active" : "link"}><Button type="button">Create new conference</Button></Link>
              </div>
            </Col>
            <Col lg={9} className="column stats">
              <Container fluid className="mycontainer">
                <Row id="confRow">
                  <h1>My Conferences</h1>
                </Row>
                {/* These will be dynamically generated */}
                <Conference conference={userConfArr} />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
  )
};

export default Profile
