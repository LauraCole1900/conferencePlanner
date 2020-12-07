import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./style.css";

function Conference({ conference }) {
	const { user, isAuthenticated } = useAuth0();

	function handleRegister() {
		// grab conference ID
		// link to Registration page with conference ID already populated
	}

	return (
		<Container>
			{conference.map(e => (
				<Card col-8 className="conferenceCard">
					<div key={e.title}>
						<Card.Header className="card-title"><h2>{e.title}</h2></Card.Header>
						<Card.Body>
							<Card.Text>
								<Row className="cardBody">
									<h3 className="cardBody">Description</h3>
								</Row>
								<Row>
									<p className="cardBody">{e.description}</p>
								</Row>
								<Row>
									<h3 className="cardBody">Location: {e.location}</h3>
								</Row>
								<Row>
									<h3 className="cardBody"> Dates: {e.StartDate} through {e.EndDate}</h3>
								</Row>
							</Card.Text>
							<div className="btndiv">
								<Button className="btn" onClick={handleRegister}>Register</Button>
								{user.email === e.email &&
									<div>
										<Link to={{
											state: { confInfo: conference },
											pathname: `/create_conference/${e._id}`
										}}>
											<Button className="btn">Edit conference info</Button>
										</Link>
									</div>}
									{user.email === e.email &&
									<div>
										<Link to={{
											state: { confInfo: conference },
											pathname: `/add_session/${e._id}`
										}}>
											<Button className="btn">Add session</Button>
										</Link>
									</div>}
							</div>
						</Card.Body>
					</div>
				</Card>
			))}
		</Container >
	);
}

export default Conference;