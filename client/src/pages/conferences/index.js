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

	console.log("conference array")
	console.log(conferenceArray)

	function handleCreate() {

	}


	return (
		<Container fluid className="mycontainer">
			<Row>
				<Col lg={6}>
					<Card>
						<Col lg={4}>
							<Card.Body>
								<Form inline className="searchArea">
									<FormControl className="mr-sm-2" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
									<Button>Search</Button>
								</Form>
							</Card.Body>
						</Col>
					</Card>
				</Col>
				<Col lg={6}>
					<Card col-4>
						<Card.Body>
							<Form inline className="newConference">
								<Button variant="outline-success" onClick={handleCreate}>Create a new conference</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={10}>
					{/* Heres where the conferences are generated, make new rows and then in each row make a conference, give it props */}
					<Container fluid className="mycontainer">
						<Row>
							<Conference conference={searchFilter(conferenceArray)} />
						</Row>
					</Container>
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