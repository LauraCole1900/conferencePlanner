import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../../utils/userContext";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user)
  
  const [ userObj, setUserObj ] = useState(user);

  return (
    isAuthenticated && (
      <div>
        <UserContext.Provider value={userObj}>
          <Container fluid className="mycontainer">
            <Row className="rowMain">
              <Col lg={3} className="column info">
                {/* <img src={user.picture} alt ={user.name} /> */}
                <h1>{user.name}</h1>
                <h3 className="job">Job Title goes Here</h3>
                <div id="textbox">
                  <p id="pleft">Edit your information</p>
                  <p id="pright">Change Password</p>
                </div>
              </Col>
              <Col lg={9} className="column stats">
                <Container fluid className="mycontainer">
                  <Row>
                    <Col lg={3} className="d-lg-block d-md-none"></Col>
                    <Col lg={2} className="column">
                      <p id="pcreate">Created: X</p>
                    </Col>
                    <Col lg={2} className="d-lg-block d-md-none"></Col>
                    <Col lg={2} className="column">
                      <p id="pattend">Attending: Y</p>
                    </Col>
                    <Col lg={3} className="column"></Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row id="confRow">
              <h1>My Conferences</h1>
            </Row>
            {/* These will be dynamically generated */}
            <Row className="conference">
              <Col lg={4} className="conferenceCol">
                <h3>Conference Name</h3>
                <h4>Role: Yourrole</h4>
                <h4>Organizer: Whoever</h4>
                <h4 id="admins">Admins: Names of every admin</h4>
              </Col>
              <Col lg={4} className="conferenceCol dates">
                <h4>Dates: Dates</h4>
                <h4>Location: Where</h4>
                <h4 >Attendees: #ofAttendees</h4>
              </Col>
              <Col lg={4} className="conferenceCol buttons">
                <button className="detailsBtn">Details</button>
                {/* If admin/organizer  */}
                <div id="buttonBox">
                  <button className="adminBtn">Add Admin</button>
                  <button className="editBtn">Edit</button>
                </div>
              </Col>
            </Row>
          </Container>
        </UserContext.Provider>
      </div>
    )
  )
};

export default Profile
