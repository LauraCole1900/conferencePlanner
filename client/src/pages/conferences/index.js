import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import Conference from "../../components/conference"
import API from "../../utils/API"
import "./style.css";


function Conferences() {
	const { user } = useAuth0();
	const [conferenceArray, setConferenceArray] = useState([])
	const [search, setSearch] = useState("")


	useEffect(() => {
		API.getConference().then(resp => {
			const conferenceArr = resp.data
			return setConferenceArray(conferenceArr)
		})
	}, [])

	function searchFilter(data) {
		return data.filter((conference) => conference.title.toLowerCase().indexOf(search) !== -1)
	}

	function handleCreate() {

	}


	return (
		<Container fluid className="mycontainer">
			<Row>
				<Col lg={3}>
					<Card.Body>
						<Form inline className="searchArea">
							<FormControl className="mr-sm-2" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
							<Button>Search</Button>
						</Form>
					</Card.Body>
				</Col>
				<Col lg={9}>
					<Row>
						<Conference conference={conferenceArray} />
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Conferences;