import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import ConferenceContext from "../../utils/conferenceContext";

const CreateSession = () => {
  let [formObject, setFormObject] = useState({})

  const handleInputChange = (e) => {
    setFormObject({ ...formObject, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formObject);
  }

  return (
    <Form>

      <Form.Group controlId="formSessionName">
        <Form.Label>Name of session</Form.Label>
        <Form.Control required type="input" name="sessName" placeholder="Enter name of session" value={formObject.name} className="sessName" onChange={handleInputChange} />
        <Form.Control.Feedback type="invalid">
          Please name your session.
                </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formSessionPresenter">
        <Form.Label>Name(s) of presenter(s)</Form.Label>
        <Form.Control required type="input" name="sessPresenter" placeholder="Enter name(s) of presenter(s)" value={formObject.presenter} className="sessPresenter" onChange={handleInputChange} />
      </Form.Group>

      <Form.Group controlId="formSessionDesc">
        <Form.Label>Brief description of session</Form.Label>
        <Form.Control required as="textarea" rows={15} name="sessionDesc" placeholder="Enter session description" value={formObject.date} className="sessDesc" onChange={handleInputChange} />
        <Form.Control.Feedback type="invalid">
          Please provide a description of your session.
                </Form.Control.Feedback>
      </Form.Group>

      <Button onClick={handleFormSubmit} type="submit">Submit form</Button>
    </Form>
  )
}

export default CreateSession;