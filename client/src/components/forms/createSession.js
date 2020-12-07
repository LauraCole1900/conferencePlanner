import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API"
// import ConferenceContext from "../../utils/conferenceContext";

const CreateSession = () => {
	const { user } = useAuth0();
	let [formObject, setFormObject] = useState({})
	const history = useHistory();
	const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]

	useEffect(() => {
		setFormObject({ ...formObject, "confId": confId })
	}, [])

	const handleInputChange = (e) => {
		setFormObject({ ...formObject, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		API.saveSession({ ...formObject, confId: confId })
			.then(history.push(`/session_added/${confId}`))
			.catch(err => console.log(err));
	}

	return (
		<Form>

			<Form.Group controlId="formSessionName">
				<Form.Label>Name of session</Form.Label>
				<Form.Control required type="input" name="sessName" placeholder="Enter name of session" value={formObject.name} className="sessName" onChange={handleInputChange} />
				<Form.Control.Feedback type="invalid">
					Please name your session.
                </Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="formSessionPresenter">
				<Form.Label>Name(s) of presenter(s)</Form.Label>
				<Form.Control required type="input" name="sessPresenter" placeholder="Enter name(s) of presenter(s)" value={formObject.name} className="sessPresenter" onChange={handleInputChange} />
			</Form.Group>

			<Form.Group controlId="formConferenceDate">
				<Form.Label>Session Day </Form.Label>
				<Form.Control type="date" name="sessionDate" placeholder="Enter SessionDay " value={formObject.time} className="confStartDates" onChange={handleInputChange} />
			</Form.Group>

			<Form.Group controlId="formConferenceDate">
				<Form.Label>Start Time:</Form.Label>
				<Form.Control required type="time" name="startTime" placeholder="Enter session start time" value={formObject.time} className="confStartDates" onChange={handleInputChange} />
			</Form.Group>


			<Form.Group controlId="formConferenceDate">
				<Form.Label>End Time:</Form.Label>
				<Form.Control required type="time" name="endTime" placeholder="Enter session end time" value={formObject.time} className="confStartDates" onChange={handleInputChange} />
			</Form.Group>

			<Form.Group controlId="formSessionDesc">
				<Form.Label>Brief description of session</Form.Label>
				<Form.Control required as="textarea" rows={15} name="sessDesc" placeholder="Enter session description" value={formObject.name} className="sessDesc" onChange={handleInputChange} />
				<Form.Control.Feedback type="invalid">
					Please provide a description of your session.
                </Form.Control.Feedback>
			</Form.Group>

			<Button onClick={handleFormSubmit} type="submit">Submit form</Button>
		</Form>
	)
}

export default CreateSession;