import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import "./notice.css"

const CookieNotice = (props) => {

  return (
    <Row className="cookieRow">
    <Col sm={10} className="cookieCol">
    <p className="cookieText">By using this website you agree to our use of cookies. We use Cookies to provide you with a great experience and to help our website run effectively. For further information, visit allaboutcookies.org.</p>
    </Col>
    <Col sm={2} className="cookieCol">
    <Button variant="outline-light" size="sm" className="cookieRowBtn" onClick={props.cookieAgree}>Got It</Button>
    </Col>
    </Row>
  )
}

export default CookieNotice;
