import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const createConference = () => {
  return (
    <Form>
      <Form.Group controlId="formConferenceName">
        <Form.Label>Name of conference</Form.Label>
        <Form.Control required type="input" placeholder="Enter name of conference" className="confName" />
        <Form.Control.Feedback type="invalid">
          Please name your conference.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formConferenceDate">
        <Form.Label>Date(s) of conference</Form.Label>
        <Form.Control required type="input" placeholder="Enter conference dates" className="confDates" />
        <Form.Control.Feedback type="invalid">
          Please provide date(s) of your conference.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="radioButtons">
        <Form.Label>Live or virtual?</Form.Label>
        <Form.Check type="radio" id="confType" label="Live" />
        <Form.Check type="radio" id="confType" label="Virtual" />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default createConference;