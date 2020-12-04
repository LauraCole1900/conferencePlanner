import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import ConferenceContext from "../../utils/conferenceContext";

const CreateConference = () => {
    let [formObject, setFormObject] = useState({})

    const handleInputChange = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formObject);
    }

    return (
        <Form>

            <Form.Group controlId="formConferenceName">
                <Form.Label>Name of conference</Form.Label>
                <Form.Control required type="input" name="confName" placeholder="Enter name of conference" value={formObject.name} className="confName" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                    Please name your conference.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConferenceDate">
                <Form.Label>Starting date of conference</Form.Label>
                <Form.Control required type="date" name="confDates" placeholder="Enter conference dates" value={formObject.date} className="confDates" onChange={handleInputChange} />
                <Form.Label>Ending date of conference</Form.Label>
                <Form.Control required type="date" name="confDates" placeholder="Enter conference dates" value={formObject.date} className="confDates" onChange={handleInputChange} />
                <Form.Control.Feedback type="invalid">
                    Please provide date(s) of your conference.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="radioButtons">
                <Form.Label>Live or virtual?</Form.Label>
                <Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={handleInputChange} />
                <Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={handleInputChange} />
                </Form.Group>

            <Button onClick={handleFormSubmit} type="submit">Submit form</Button>
        </Form>
    )
}

export default CreateConference;