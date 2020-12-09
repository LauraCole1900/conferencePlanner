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
			const sortedConfs = conferenceArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
			return setConferenceArray(sortedConfs)
		})
	}, [])

	function searchFilter(data) {
		return data.filter((conference) => conference.title.toLowerCase().indexOf(search) !== -1)
	}

	function handleCreate() {

	}


	return (
		<>
			<Card.Body>
				<Form inline>
					<Row style={{width: "100%"}}>
						<div id="searchArea">
							<FormControl style={{width:"50%", marginLeft:"10%"}} className="mr-lg-5 search-area" type="text"  placeholder="Search for Conference" value={search} onChange={(e) => setSearch(e.target.value)} />
						</div>
					</Row>
				</Form>
			</Card.Body>

			<Row>
				<Col lg={6}>
					<Conference conference={searchFilter(conferenceArray.slice(0,Math.ceil(conferenceArray.length/2)))} />
				</Col>
				<Col lg={6}>
					<Conference conference={searchFilter(conferenceArray.slice(Math.ceil(conferenceArray.length/2)))} />
				</Col>
			</Row>


		</>
	);
}

export default Conferences;