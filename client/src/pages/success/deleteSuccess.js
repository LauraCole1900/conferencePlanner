import React, { Component } from "react";
import { Redirect } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col } from "react-bootstrap";
import ToProfileBtn from "./toProfileBtn";
import ToConfBtn from "./toConfBtn";

class DeleteSuccess extends Component {
  state = {
    ...this.state,
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return this.state.redirect
      ? <Redirect to="/profile" />
      : <Container fluid>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <h1>Delete successful</h1>
            <h4>Returning to your profile page shortly.</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={5}></Col>
          <Col sm={2}>
            <ToProfileBtn />
            <ToConfBtn />
          </Col>
          <Col sm={5}>
          </Col>
        </Row>
      </Container>
  }
}

export default DeleteSuccess;