import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import Conference from "../../components/conference"
import API from "../../utils/API"
import "./style.css";


function Conferences() {

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
					{searchFilter(conferenceArray).map(passedConference => {
						return (
							<Row>
								<Conference conference={passedConference} />
							</Row>
						)
					})}
				</Col>
				{/* <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
			</Row>
		</Container>
	);
}

export default Conferences;