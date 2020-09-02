import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import altLogo1 from '../assets/imgs/altLogo_1.png';
import altLogo2 from '../assets/imgs/altLogo_2.png';
import altLogo3 from '../assets/imgs/altLogo_3.jpg';
import affiliate_kwayera from '../assets/imgs/kwayera_archer.png';
import affiliate_ase from '../assets/imgs/global_ase.jpg';
import affiliate_lifewell from '../assets/imgs/life_wellness.png';
import affiliate_bodyculinary from '../assets/imgs/body_culinary.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
 } from '@fortawesome/free-brands-svg-icons';
import "./main.css"

const PathPage = (props) => {

  return (
    <div className="maindiv" id="joyMaindiv">
      <div className="joyHeader desktop" id="header">
      <Row className="headerRow">
      <Col sm={8} className="headerCol headColLeft">
      <h1 className="headerHeading">
      Join the Joy
      </h1>
      <p className="headerText">
      At A Special Time & Place
      </p>
      </Col>
      <Col sm={4} className="headerCol headColRight ">
      <Image src={Wht_ico} className="headerImg" fluid />
      </Col>
      </Row>
      </div>

      <div className="joyHeader mobile" id="mobileHeader">
      <Row className="headerRow">
      <Col className="headerCol headColLeft">
      <h1 className="headerHeading">
      Join the Joy
      </h1>
      <p className="headerText">
      At A Special Time & Place
      </p>
      </Col>
      </Row>
      </div>

      <div className="testPageRow" id="1">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Join the Movement</h1>
        <Row className="sectionRow">
          <Col sm={6}>
          <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} className="joyIcon"/>
          </a>
          </Col>
          <Col sm={6}>
          <a href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="joyIcon"/>
          </a>
          </Col>
        </Row>
        <Row className="sectionRow">
          <Col sm={6}>
          <a href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="joyIcon"/>
          </a>
          </Col>
          <Col sm={6}>
          <a href="https://www.youtube.com/watch?v=SEzV3UPGTDw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="joyIcon"/>
          </a>
          </Col>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText xText">
            Read more about our <a href="https://www.linkedin.com/posts/soulfuljoy_the-soulful-joy-story-activity-6694342907010314241-vcH3" className="textLink" target="_blank" rel="noopener noreferrer">Story</a>
          </p>
        </Row>
        </div>
      </div>

      <div className="testPageRow" id="2">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Our Affiliates</h1>
        <Row className="sectionRow">
          <p className="sectionText xText">
            Our Affiliates
          </p>
        </Row>
        <Row className="sectionRow">
        <Col sm={3}>
         <Image src={affiliate_ase} className="locationImage roundImg" fluid />
         <a href="https://global-ase.com/" target="_blank" rel="noopener noreferrer">
         <p className="sectionText">Global Ase</p>
         </a>
        </Col>
        <Col sm={3}>
         <Image src={affiliate_lifewell} className="locationImage roundImg" fluid />
         <a href="https://www.lifewellnesscenter.life/" target="_blank" rel="noopener noreferrer">
         <p className="sectionText">Life Welness Center</p>
         </a>
        </Col>
        <Col sm={3}>
         <Image src={affiliate_bodyculinary} className="locationImage roundImg" fluid />
         <a href="https://www.body-culinary.com/" target="_blank" rel="noopener noreferrer">
         <p className="sectionText">Body Culinary</p>
         </a>
        </Col>
        <Col sm={3}>
         <Image src={affiliate_kwayera} className="locationImage roundImg" fluid />
         <a href="https://kwayera.com/" target="_blank" rel="noopener noreferrer">
         <p className="sectionText">Kwayera.com</p>
         </a>
        </Col>

        </Row>
        </div>
      </div>

      <div className="testPageFooter" id="footer">

      <Row className="footer_midRow">
        <Col md={3} className="footer_midCol">
          <ul className="footer_navList">
            <li className="footer_navListItem">
            <a href="https://3navvpy3.pages.infusionsoft.net" target="_blank" rel="noopener noreferrer" className="footer_navBar_link">Stay In Touch</a>
            </li>
          </ul>
        </Col>
        <Col md={6} className="footer_midCol">

        </Col>
        <Col md={3} className="footer_midCol">
          <ul className="footer_socialList">
            <li className="footer_socialListItem">
            <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} className="footerIcon"/>
            </a>
            </li>
            <li className="footer_socialListItem">
            <a href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>
            </a>
            </li>
            <li className="footer_socialListItem">
            <a href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="footerIcon"/>
            </a>
            </li>
            <li className="footer_socialListItem">
            <a href="https://www.youtube.com/watch?v=SEzV3UPGTDw" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="footerIcon"/>
            </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="footer_copyrightRow">
      <a className="footer_copyrightRow_text" href="mailto:family@SoulfulJoy.com" target="_blank" rel="noopener noreferrer">
        <p> family@SoulfulJoy.com | Planet Earth | </p>
      </a>

      </Row>
      </div>
    </div>
  )

}

export default PathPage;
