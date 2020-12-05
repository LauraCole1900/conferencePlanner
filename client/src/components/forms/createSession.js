import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import ConferenceContext from "../../utils/conferenceContext";

const CreateSession = () => {
	let [formObject, setFormObject] = useState({})

	useEffect(() => {
		setFormObject({ ...formObject, "confId": "23324234" })
	}, [])

	const handleInputChange = (e) => {
		setFormObject({ ...formObject, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(formObject);
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