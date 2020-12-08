
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

function EditConference() {
	const { user } = useAuth0();
	const history = useHistory();
	const [conference, setConference] = useState()
	const [pageReady, setPageReady] = useState(false)

	const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]

	useEffect(() => {
		API.getConferencebyID(confId).then(resp => {
			console.log("confbyID")
			console.log(resp.data)
			const tempArr = resp.data
			setConference(tempArr[0])
			setPageReady(true)
		})
	}, [])

	const handleInputChange = (e) => {
		setConference({ ...conference, [e.target.name]: e.target.value, registeredUsers: [] });
	};

	const handleFormUpdate = (e) => {
		e.preventDefault();
		console.log(confId);
		API.updateConference({...conference}, confId)
			.then(history.push("/conference_created"))
			.catch(err => console.log(err));
	}


	return (
		<>
			{ pageReady === true && (
				// isAuthenticated && (
				<Form className="confForm">
					<h3 className="panel-title">
						Edit Conference
								</h3>
					<Form.Group controlId="formConferenceName">
						<Form.Label>Name of conference</Form.Label>
						<Form.Control required type="input" name="title" value={conference.title} className="confName" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formConferenceDescription">
						<Form.Label>Conference Description</Form.Label>
						<Form.Control required type="input" name="description" placeholder="Enter description of conference" value={conference.description} className="confDescription" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formConferenceOrganization">
						<Form.Label>Conference Organization</Form.Label>
						<Form.Control required type="input" name="organization" placeholder="Enter your organization" value={conference.organization} className="confOrganization" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formConferenceDate">
						<Form.Label>Starting date of conference</Form.Label>
						<Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={conference.StartDate} className="confStartDates" onChange={handleInputChange} />
						<Form.Label>Ending date of conference</Form.Label>
						<Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={conference.EndDate} className="confEndDates" onChange={handleInputChange} />
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
						<Form.Control required type="input" name="location" placeholder="Enter Address or URL" value={conference.location} className="confLocation" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Button onClick={handleFormUpdate} type="submit">Update form</Button>
				</Form>
			)}
		</>
	)
}

export default EditConference;