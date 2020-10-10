import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import "./notice.css"

const CovidNotice = (props) => {

  return (
    <Row className="covidRow">
    <Col sm={11} className="cookieCol">
    <p className="cookieText">
    During this Experience, we will be safely distanced and taking the highest level precautions in partnership with the property and our providers, and therefore have to reduce and limit the number of guests to a first come first serve basis.
    We suggest that you secure personal insurance to reimburse your expenses in the event that you feel unwell (high temperature, sore throat, general malaise) or have been exposed to persons with COVID-19 one day all the way up to two (2) weeks prior to your scheduled flight.
    In light of the additional safety protocols required we have prepared Our  Get Here Guide & Agreement with information on how to prepare for this experience.
    </p>
    </Col>
    <Col sm={1} className="cookieCol closeCol">
    <Button variant="outline-light" size="sm" className="cookieRowBtn" onClick={props.covidAgree}>Got It</Button>
    </Col>
    </Row>
  )

}

export default CovidNotice;
