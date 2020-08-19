import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import "./WelcomePage.css"

const WelcomePage = (props) => {
  let location = props.location.pathname;

      return (
        <div className="welcomePage_maindiv">
          <Row className="welcomePageRow">
            <Col className='welcomePageCol'>

              <Row className="welcomePageSubRow Row1">
                <Image src={Wht_ico} className="SplashMainLogo" fluid />
                <h1 className="welcomePageHeading">
                  Soulful Joy
                </h1>
              </Row>

              <Row className="welcomePageSubRow Row2">
              <h3 className='welcomePageSubHeading'>A Special Time & Place</h3>
              <h3 className='welcomePageSubHeading'>Negril Treehouse Resort</h3>
              <h3 className='welcomePageSubHeading'>Jamaica, Oct 8-12, 2020</h3>
              <a  href="https://3navvpy3.pages.infusionsoft.net/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" size="lg" className="welcomePageEnterBtn">Join the Joy</Button>
              </a>

              {
                // <a  href="https://3navvpy3.pages.infusionsoft.net/" target="_blank">
                //   <Button variant="outline-light" size="lg" className="welcomePageEnterBtn">Join the Joy</Button>
                // </a>

                // <NavLink to="/home">
                //   <Button variant="outline-light" size="lg" className="welcomePageEnterBtn">Join the Joy</Button>
                // </NavLink>
              }

              </Row>

            </Col>
          </Row>
          {props.showCookie === true && (
            <Row className="cookieRow">
            <Col className="cookieCol">
            <p className="cookieText">This site uses cookie. By procceding you consent to their usage.</p><Button variant="outline-warning" size="sm" className="cookieRowBtn" onClick={props.cookieAgree}>Accept</Button>
            </Col>
            </Row>
          )}

        </div>
      )


}

export default WelcomePage;
