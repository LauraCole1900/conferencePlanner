import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { Row, Col } from "react-bootstrap"

function Conference() {

    const [conferenceArry, setConferenceArry] = useState([])


    useEffect(() => {
        API.getConferences().then(resp => {
            const conferenceArr = resp.data
            return setConferenceArry(conferenceArr)
        })
    }, [])

    console.log(conferenceArry)




    return (
        <div>
            {conferenceArry.map(e => (
                <div key={e._id}>
                    <Row className="conference">
                        <Col lg={4} className="conferenceCol">
                            <h3>{e.title}</h3>
                            <h4>Role: Yourrole</h4>
                            <h4>Organization: {e.organization}</h4>
                            <h4 id="admins">Admins: Names of every admin</h4>
                        </Col>
                        <Col lg={4} className="conferenceCol dates">
                            <h4>Dates: {e.date}</h4>
                            <h4>Location: {e.location}</h4>
                            <h4 >Attendees: {e.attendingCount}</h4>
                        </Col>
                        <Col lg={4} className="conferenceCol buttons">
                            <button className="detailsBtn">Details</button>
                            {/* If admin/organizer  */}
                            <div id="buttonBox">
                                <button className="adminBtn">Add Admin</button>
                                <button className="editBtn">Edit</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}


        </div>
    )
}


export default Conference;