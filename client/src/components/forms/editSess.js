import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API"

function EditSession() {
	const { user } = useAuth0();
	const history = useHistory();
	const [session, setSession] = useState()
	const [formObject, setFormObject] = useState()
	const [pageReady, setPageReady] = useState(false)

	const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]

	let sessId = session._id

	useEffect(() => {
		API.getSessionbyID(sessId).then(resp => {
			console.log("sessbyID")
			console.log(resp.data)
			const tempArr = resp.data
			setSession(tempArr[0])
			setPageReady(true)
		})
	}, [])

	const handleInputChange = (e) => {
		setFormObject({ ...formObject, [e.target.name]: e.target.value });
	};

	const handleFormUpdate = (e) => {
		e.preventDefault();
		console.log(sessId);
		API.updateSession({...session}, sessId)
			.then(history.push("/session_updated"))
			.catch(err => console.log(err));
	}

	return (
		<>
			{ pageReady === true && (
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

					<Button onClick={handleFormUpdate} type="submit">Update form</Button>
				</Form>
			)}
		</>
	)
}

export default EditSession;