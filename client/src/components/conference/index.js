import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference({ conference }) {
	const { user, isAuthenticated } = useAuth0();

	function handleRegister() {
		// grab conference ID
		// link to Registration page with conference ID already populated
	}

	function handleEdit() {
		// grab conference ID
		// link to create_conference page with info already populated
	}

	return (
		<Container>
			<Card col-8 className="conferenceCard">
				{conference.map(e => (
					<div key={e.title}>
						<Card.Header className="card-title"><h2>{e.title}</h2></Card.Header>
						<Card.Body>
							<Card.Text>
								<Row className="cardBody">
									<h3 className="cardBody">Description</h3>
								</Row>
								<Row>
									<p className="cardBody">{e.discription}</p>
								</Row>
								<Row>
									<h3 className="cardBody">Location: {e.location}</h3>
								</Row>
								<Row>
									<h3 className="cardBody"> Starts: {e.startDate}</h3>
								</Row>
							</Card.Text>
							<div className="btndiv">
								<Button className="btn" onClick={handleRegister}>Register</Button>
								{/* <div if user is creator, show; otherwise hide>
								<Button className="btn" onClick={handleEdit}>Edit conference info</Button>
								</div> */}
							</div>
						</Card.Body>



					</div>

				))}

			</Card>
		</Container>
	);
}

export default Conference;