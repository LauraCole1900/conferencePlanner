import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
// import {Link} from "react-router-dom";
// import { get } from "mongoose";
// import ConferenceContext from "../../utils/conferenceContext";

const CreateConference = () => {
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();

  let [formObject, setFormObject] = useState({
    EndDate: "01/01/2021",
    StartDate: "01/01/2021",
    organization: "Your organization",
    location: "Here",
    confType: "Live",
    title: "A conference",
    description: "This is the default conference description",
    email: "",
    attendingCount: 0,
    registeredUsers: []
  })

  const urlArray = window.location.href.split("/")
  const confId = urlArray[urlArray.length - 1]


  useEffect(() => {
    // if ID already exists
    // set formObject with that information
    // else
    setFormObject({ ...formObject, "email": user.email, "registeredUsers":[user.email] })
  }, [])

  const loadForm = () => {

  }

  const handleInputChange = (e) => {
    setFormObject({ ...formObject, [e.target.name]: e.target.value, registeredUsers:[user.email] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
     API.saveConference({ ...formObject, email: user.email })
      .then(history.push("/conference_created"))
      .catch(err => console.log(err));
  }

  const handleFormUpdate = (e) => {
    e.preventDefault();
    API.updateConference(confId, formObject )
    //   .then(history.push("/conference_created"))
      .catch(err => console.log(err));
  }

  return (
    isAuthenticated && (
      <Form className="confForm">
        <Form.Group controlId="formConferenceName">
          <Form.Label>Name of conference</Form.Label>
          <Form.Control required type="input" name="title" placeholder="Enter name of conference" value={formObject.name} className="confName" onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formConferenceDescription">
          <Form.Label>Conference Description</Form.Label>
          <Form.Control required type="input" name="description" placeholder="Enter description of conference" value={formObject.name} className="confDescription" onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formConferenceOrganization">
          <Form.Label>Conference Organization</Form.Label>
          <Form.Control required type="input" name="organization" placeholder="Enter your organization" value={formObject.name} className="confOrganization" onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formConferenceDate">
          <Form.Label>Starting date of conference</Form.Label>
          <Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={formObject.date} className="confStartDates" onChange={handleInputChange} />
          <Form.Label>Ending date of conference</Form.Label>
          <Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={formObject.date} className="confEndDates" onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="radioButtons">
          <Form.Label>Live or virtual?</Form.Label>
          <Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={handleInputChange} />
          <Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formConferenceLocation">
          <Form.Label>Conference Location</Form.Label>
          <Form.Control required type="input" name="location" placeholder="Enter Address or URL" value={formObject.name} className="confLocation" onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>

        <Button onClick={handleFormUpdate} type="submit">Update form</Button>
        <Button onClick={handleFormSubmit} type="submit">Submit form</Button>
      </Form>
    )
  )
}

export default CreateConference;