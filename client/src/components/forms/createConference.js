import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import {Link} from "react-router-dom";
import { get } from "mongoose";
// import ConferenceContext from "../../utils/conferenceContext";

const CreateConference = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log("from Create conference")

    let [formObject, setFormObject] = useState({})
    // setFormObject({...formObject, "email": user.email})
    useEffect(() => {
        setFormObject({...formObject, "email": user.email})
    },[])

    const handleInputChange = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.saveConference(formObject)
        //   .then(res => loadConferences())
          .catch(err => console.log(err));
    }

    return (
        isAuthenticated && (
        <Form>
y

            <Form.Group controlId="formConferenceName">
                <Form.Label>Name of conference</Form.Label>
                <Form.Control required type="input" name="title" placeholder="Enter name of conference" value={formObject.name} className="confName" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConferenceDiscription">
                <Form.Label>Conference Discription</Form.Label>
                <Form.Control required type="input" name="discription" placeholder="Enter discription of confrence" value={formObject.name} className="confdiscription" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConferenceDiscription">
                <Form.Label>Conference Organization</Form.Label>
                <Form.Control required type="input" name="organization" placeholder="Enter your orgainization" value={formObject.name} className="conforganization" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConferenceDate">
                <Form.Label>Starting date of conference</Form.Label>
                <Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={formObject.date} className="confStartDates" onChange={handleInputChange} />
                <Form.Label>Ending date of conference</Form.Label>
                <Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={formObject.date} className="confendDates" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="radioButtons">
                <Form.Label>Live or virtual?</Form.Label>
                <Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={handleInputChange} />
                <Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formConferencelocation">
                <Form.Label>Conference Location</Form.Label>
                <Form.Control required type="input" name="location" placeholder="Enter Adress or Url link" value={formObject.name} className="conforganization" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>



             <Button onClick={handleFormSubmit} type="submit">Save</Button>
             <Link exact to="/profile"><Button>Return</Button></Link>
        </Form>
        )

    )
}

export default CreateConference;