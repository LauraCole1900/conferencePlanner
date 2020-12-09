// import "./style.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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
					<div className="container" style={{ width: "50%", paddingTop: "10vh" }}>		
				<Form className="confForm">
					
					<h3 className="panel-title">
						Edit Conference</h3>
					<Row>
						<Col>			
					<Form.Group controlId="formConferenceName">
						<Form.Label>Name of conference</Form.Label>
						<Form.Control required type="input" name="title" value={conference.title} className="confName" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>
					    </Col>

				    <Col>
					<Form.Group controlId="formConferenceDescription">
						<Form.Label>Conference Description</Form.Label>
						<Form.Control required type="input" name="description" placeholder="Enter description of conference" value={conference.description} className="confDescription" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>
					</Col>

                  </Row>
					<Form.Group controlId="formConferenceOrganization">
						<Form.Label>Conference Organization</Form.Label>
						<Form.Control required as="textarea" rows={8} type="input" placeholder="Enter your organization" value={conference.organization} className="confOrganization" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="formConferenceDate">
					<Row>
							<Col>
						<Form.Label>Starting date of conference</Form.Label>
						<Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={conference.StartDate} className="confStartDates" onChange={handleInputChange} />
						</Col>
							
						<Col>
						<Form.Label>Ending date of conference</Form.Label>
						<Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={conference.EndDate} className="confEndDates" onChange={handleInputChange} />
						</Col>

						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
						</Row>
					</Form.Group>

					<Form.Group controlId="radioButtons">
						<Form.Label>Live or virtual?</Form.Label>
						<Row>
						<Col lg={3}>
						<Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={handleInputChange} />
						</Col>
						<Col lg={3}>
						<Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={handleInputChange} />
						</Col>
						</Row>
					</Form.Group>

					<Form.Group controlId="formConferenceLocation">
						<Form.Label>Conference Location</Form.Label>
						<Form.Control required type="input" name="location" placeholder="Enter Address or URL" value={conference.location} className="confLocation" onChange={handleInputChange} />
						<Form.Control.Feedback type="invalid">
						</Form.Control.Feedback>
					</Form.Group>

					<Button onClick={handleFormUpdate} type="submit">Update form</Button>
				</Form>
				</div>
			)}
		</>
	)
}

export default EditConference;