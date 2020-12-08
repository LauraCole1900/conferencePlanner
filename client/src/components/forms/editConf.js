
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

function EditConference() {

	const [conference, setConference] = useState()

	const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]
	console.log(confId)


	useEffect(() => {
		API.updateConference(confId).then(resp => {
			console.log("confbyID")
			console.log(resp.data)
			const tempArr = resp.data
			setConference(tempArr)
			return
		})
	}, [])


	console.log("conference")
	console.log(conference)


	const onChange = (e) => {
		// const state = conference
		// state[e.target.name] = e.target.value;
		// setState({ conference: state });
	}

	const onSubmit = (e) => {
		e.preventDefault();

		// const { EndDate, StartDate, organization, location, confType, title, description, email, attendingCount } = conference;
	}

	const handleFormUpdate = (e) => {
		//   e.preventDefault();
		//   API.updateConference(confId, formObject )
		//     .then(history.push("/conference_created"))
		//     .catch(err => console.log(err));
	}


	return (
		// isAuthenticated && (
		<Form className="confForm">
			<h3 className="panel-title">
				Edit Conference
            </h3>
			<Form.Group controlId="formConferenceName">
				<Form.Label>Name of conference</Form.Label>
				<Form.Control required type="input" name="title" value={"conference.title"} className="confName" onChange={onChange} />
				<Form.Control.Feedback type="invalid">
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="formConferenceDescription">
				<Form.Label>Conference Description</Form.Label>
				<Form.Control required type="input" name="description" placeholder="Enter description of conference" value={"conference.description"} className="confDescription" onChange={onChange} />
				<Form.Control.Feedback type="invalid">
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="formConferenceOrganization">
				<Form.Label>Conference Organization</Form.Label>
				<Form.Control required type="input" name="organization" placeholder="Enter your organization" value={"conference.organization"} className="confOrganization" onChange={onChange} />
				<Form.Control.Feedback type="invalid">
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="formConferenceDate">
				<Form.Label>Starting date of conference</Form.Label>
				<Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={"conference.StartDate"} className="confStartDates" onChange={onChange} />
				<Form.Label>Ending date of conference</Form.Label>
				<Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={"conference.EndDate"} className="confEndDates" onChange={onChange} />
				<Form.Control.Feedback type="invalid">
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="radioButtons">
				<Form.Label>Live or virtual?</Form.Label>
				<Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={onChange} />
				<Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={onChange} />
			</Form.Group>

			<Form.Group controlId="formConferenceLocation">
				<Form.Label>Conference Location</Form.Label>
				<Form.Control required type="input" name="location" placeholder="Enter Address or URL" value={"conference.location"} className="confLocation" onChange={onChange} />
				<Form.Control.Feedback type="invalid">
				</Form.Control.Feedback>
			</Form.Group>
			{/* <button type="submit" className="btn btn-default">Submit</button> */}
			<Button onClick={handleFormUpdate} type="submit">Update form</Button>
		</Form>
	)
}

export default EditConference;