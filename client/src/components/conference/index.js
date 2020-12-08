import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import "./style.css";

function Conference({ conference }) {
	const { user } = useAuth0();

	function handleRegister(confid) {
		console.log("from componenet")
		const email = { email: user.email }
		API.updateRegisteredById(confid, email).then(resp => {
			// const tempArr = resp.data
			// console.log(tempArr)
			// setUserConfArr(tempArr);
		})


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
								<div>
									<Link to={{
										state: { confInfo: conference },
										pathname: `/conferences/${e._id}`
									}}>
										<Button className="btn">Show conference details</Button>
									</Link>
								</div>
								{user.email !== e.email &&
									<div>
										<Button className="btn" onClick={()=>handleRegister(e._id)}>Register</Button>
									</div>}
								{user.email === e.email &&
									<div>
										<Link to={{
											state: { confInfo: conference },
											pathname: `/edit/:id/${e._id}`
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