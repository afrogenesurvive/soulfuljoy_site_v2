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
            <Col sm={10} className="cookieCol">
            <p className="cookieText">Covid stuff....</p>
            </Col>
            <Col sm={2} className="cookieCol">
            <Button variant="outline-light" size="sm" className="cookieRowBtn" onClick={props.covidAgree}>Got It</Button>
            </Col>
            </Row>
      )


}

export default CovidNotice;
