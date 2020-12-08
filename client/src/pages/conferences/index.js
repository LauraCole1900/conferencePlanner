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
		<Container className="mycontainer" style={{width:"50%"}}>
		
				
					<Card.Body>
						<Form inline className="searchArea">
                            <Row>
                            <Col lg={8}>
							<FormControl style={{width:"100%"}} className="mr-lg-5" type="text" placeholder="Enter Conference Name..." value={search} onChange={(e) => setSearch(e.target.value)} />
                            </Col>
                            <Col lg={4}>

							<Button>Search</Button>
                            </Col>
                            </Row>
						</Form>
					</Card.Body>

					<Row>
						<Conference conference={searchFilter(conferenceArray)} />
					</Row>
	
		
		</Container>
	);
}

export default Conferences;