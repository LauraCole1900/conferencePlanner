import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Card, Row, Button, Col } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

function Conference({ conference }) {
	const { user } = useAuth0();
	const history = useHistory();

	function handleRegister(confid) {
		console.log("from component")
		const email = { email: user.email }
		API.updateRegisteredById(confid, email).then(() => {
			alert("Registered")
		})
	}

	function handleDelete(confId) {
		API.deleteConference(confId).then(
			history.push("/deleted")
		)
	}

	return (
		<div>
			{conference.map(e => (
				<Col>
					<Row>

						<div className="backgroundBody" style={{ width: "100%", borderRadius: "15px", }} key={e.title}>
							<Card.Body style={{ borderRadius: "10px" }} className="gradient3">

								<Card style={{ borderRadius: "10px" }}>
									<Card.Header className="gradient2" >
										<Row>
											<Col lg={10} md={10} sm={10}>
												<h2 className="play_fair" style={{ fontSize: "1.5vw" }}>{e.title.toUpperCase()}</h2>
											</Col>
											<Col lg={2} md={2} sm={2}>
												{user.email === e.email &&
													<Link to={{
														state: { confInfo: conference },
														pathname: `/deleted`
													}}>

														<Button data-toggle="popover" title="Delete This Conference" onClick={() => handleDelete(e._id)}>
															<svg width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
																<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
															</svg>
														</Button>
													</Link>}
											</Col>

										</Row>
									</Card.Header>



									<Card.Body>
										<Row>
											<Col lg={8} md={8} sm={12}>
												<div className="roboto" style={{ fontSize: "1vw", overFlow: "auto" }}>{e.description}</div>

											</Col>
											<Col lg={4} md={4} sm={12}>

												<div style={{ textAlign: "center" }}>
													<Row >

														<div>
															<h3 className="roboto" style={{ fontSize: ".8vw" }} >Organizer:</h3>
														</div>
														<div>
															<h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.organization}</h3>
														</div>

													</Row>
												</div>

												<div style={{ textAlign: "center" }}>
													<Row >

														<div>
															<h3 className="roboto" style={{ fontSize: ".8vw" }} >Live/Virtual:</h3>
														</div>
														<div>
															<h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.confType.toUpperCase()}</h3>
														</div>

													</Row>
												</div>


												<div>
													<Row>
														<h3 className="roboto" style={{ fontSize: ".8vw" }}>Dates:</h3>

														<h3 className="roboto" style={{ fontSize: ".8vw", fontWeight: "bold", paddingLeft: "0.5vw" }}>{e.StartDate.slice(5).replace("-", "/")} | {e.EndDate.slice(5).replace("-", "/")}</h3>
													</Row>
												</div>


												<div className="pt-5">
													<Row>
														<Col lg={12} md={12} sm={12}>
															{user.email !== e.email &&
																<div>
																	<Button data-toggle="popover" title="Register For this conference" style={{ width: "10vw", marginTop: "6.5vh" }} onClick={() => handleRegister(e._id)}>
																		<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																			<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
																			<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
																		</svg>
																	</Button>
																</div>}
														</Col>

														<Col lg={12}>
															{user.email === e.email &&
																<div>
																	<Link to={{
																		state: { confInfo: conference },
																		pathname: `/edit_conference/${e._id}`
																	}}>
																		<Button data-toggle="popover" title="Edit This Conference" style={{ width: "10vw" }}>
																			<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																				<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
																				<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
																			</svg>
																		</Button>
																	</Link>
																</div>}
														</Col>
														<Col lg={12}>
															{user.email === e.email &&
																<div className="pt-2">

																	<Link to={{
																		state: { confInfo: conference },
																		pathname: `/add_session/${e._id}`
																	}}>
																		<Button data-toggle="popover" title="Add A New Session" style={{ width: "10vw" }}>
																			<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																				<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
																				<path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																			</svg>
																		</Button>
																	</Link>
																</div>}
														</Col>
													</Row>
													<Row>
														<Col lg={12}>
															<div className="pt-2">
																<Link to={{
																	state: { confInfo: conference },
																	pathname: `/conferences/${e._id}`
																}}>
																	<Button data-toggle="popover" title="View Conference Details" style={{ width: "10vw" }} >
																		<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
																			<path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
																			<path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
																		</svg>
																	</Button>
																</Link>
															</div>
														</Col>
													</Row>
												</div>
											</Col>
										</Row>
										<div style={{ borderTop: "1px solid #33A5FF", marginTop: "2vh", paddingTop: "1vh" }}>
											<div className="ml-3">
												<Row>
													{e.confType === "live" &&
														<>
															<div >
																<h3 className="roboto" style={{ fontSize: "1vw", fontWeight: "bold", }}>Location</h3>
															</div>
															<div>
																<h3 className="roboto" style={{ fontSize: "1vw", paddingLeft: "1vw" }}><a target={"_blank"} href={`https://www.google.com/maps/search/${e.location.replace(" ", "+")}`}>{e.location}</a></h3>
															</div>
														</>}
													{e.confType === "virtual" &&
														<>
															<div >
																<h3 style={{ fontSize: "1vw", fontWeight: "bold", }}>URL</h3>
															</div>
															<div>
																<h3 style={{ fontSize: "0.7vw", paddingLeft: "1vw" }}><a target={"_blank"} href={e.location}>{e.location}</a> </h3>
															</div>
														</>}
												</Row>
											</div>
										</div>
									</Card.Body>

								</Card>

							</Card.Body>
						</div>
					</Row>
				</Col>
			))}
		</div >
	);
}

export default Conference;


