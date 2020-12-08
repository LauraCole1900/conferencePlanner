import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      conference: {}
    };
  }

  componentDidMount() {
    axios.get('/api/conference/'+this.props.match.params.id)
      .then(res => {
        this.setState({ conference: res.data });
        console.log(this.state.conference);
      });
  }

  onChange = (e) => {
    const state = this.state.conference
    state[e.target.name] = e.target.value;
    this.setState({conference:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {EndDate, StartDate, organization, location, confType, title, description, email, attendingCount } = this.state.conference;

    axios.put('/api/conference/'+this.props.match.params.id, { EndDate, StartDate, organization, location, confType, title, description, email, attendingCount })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  // handleFormUpdate = (e) => {
  //   e.preventDefault();
  //   API.updateConference(confId, formObject )
  //   //   .then(history.push("/conference_created"))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
        // isAuthenticated && (
          <Form className="confForm">
            <h3 class="panel-title">
              Edit Conference
            </h3>
            <Form.Group controlId="formConferenceName">
              <Form.Label>Name of conference</Form.Label>
              <Form.Control required type="input" name="title"  value={`/show/${this.state.conference.title}`} className="confName" onChange={this.onChange} />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formConferenceDescription">
              <Form.Label>Conference Description</Form.Label>
              <Form.Control required type="input" name="description" placeholder="Enter description of conference" value={`/show/${this.state.conference.description}`} className="confDescription" onChange={this.onChange}/>
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formConferenceOrganization">
              <Form.Label>Conference Organization</Form.Label>
              <Form.Control required type="input" name="organization" placeholder="Enter your organization" value={`/show/${this.state.conference.organization}`}  className="confOrganization" onChange={this.onChange} />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="formConferenceDate">
              <Form.Label>Starting date of conference</Form.Label>
              <Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={`/show/${this.state.conference.StartDate}`}  className="confStartDates" onChange={this.onChange} />
              <Form.Label>Ending date of conference</Form.Label>
              <Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={`/show/${this.state.conference.EndDate}`}  className="confEndDates" onChange={this.onChange} />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
    
            <Form.Group controlId="radioButtons">
              <Form.Label>Live or virtual?</Form.Label>
              <Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live" onChange={this.onChange} />
              <Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" onChange={this.onChange} />
            </Form.Group>
    
            <Form.Group controlId="formConferenceLocation">
              <Form.Label>Conference Location</Form.Label>
              <Form.Control required type="input" name="location" placeholder="Enter Address or URL" value={`/show/${this.state.conference.location}`} className="confLocation" onChange={this.onChange} />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
            <button type="submit" className="btn btn-default">Submit</button>
            {/* <Button onClick={this.handleFormUpdate} type="submit">Update form</Button> */}
          </Form>
        )
      
        }
    }

export default Edit;