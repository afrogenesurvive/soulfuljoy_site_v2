import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import location1 from '../assets/imgs/location_1.jpg';
import immerse from '../assets/imgs/immerse.jpg';
import improve from '../assets/imgs/improve.jpg';
import incorporate from '../assets/imgs/incorporate.jpg';
import inspire from '../assets/imgs/inspire.jpg';
import invigorate from '../assets/imgs/invigorate.jpg';
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
    <div className="maindiv" id="pathMaindiv">
      <div className="pathHeader desktop" id="header">
      <Row className="headerRow">
      <Col sm={8} className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Path
      </h1>
      <p className="headerText">
      Inspire – Immerse – Invigorate – Improve - Incorporate
      </p>
      </Col>
      <Col sm={4} className="headerCol headColRight ">
      <Image src={Wht_ico} className="headerImg" fluid />
      </Col>
      </Row>
      </div>

      <div className="pathHeader mobile" id="mobileHeader">
      <Row className="headerRow">
      <Col className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Path
      </h1>
      <p className="headerText">
      Inspire – Immerse – Invigorate – Improve - Incorporate
      </p>
      </Col>
      </Row>
      </div>


      <div className="testPageRow desktop" id="1">
        <div className="testPageRowInner">
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"mission"})}>Our Mission</h1>
        <Row className="sectionRow">
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"vision"})}>Our Vision</h1>
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"purpose"})}>Our Purpose</h1>
        </Row>
        </div>
      </div>

      <div className="testPageRow mobile" id="1">
        <div className="testPageRowInner">

        <Row className="sectionRow">
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"mission"})}>Our Mission</h1>
        </Row>
        <Row className="sectionRow">
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"vision"})}>Our Vision</h1>
        </Row>
        <Row className="sectionRow">
          <h1 className="xHeading sectionHeading" onClick={props.showOverlay.bind(this, {type:'info',data:"purpose"})}>Our Purpose</h1>
        </Row>
        </div>
      </div>

      <div className="testPageRow" id="2">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Inspire</h1>
      <Row className="sectionRow">
        <Col sm={3} className="fiveIInnerRow">
        <Image src={inspire} className="fiveIImage" fluid />
        </Col>
        <Col sm={9} className="fiveIInnerRow">
        <p className="sectionText">
        Be inspired to detox during this 5-day long experience in  Negril Jamaica, while rejuvenating your soul. We will inspire you to believe you can be your best version of yourself everyday.
        </p>
        </Col>
      </Row>
      </div>
      </div>

      <div className="testPageRow" id="3">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Immerse</h1>
      <Row className="sectionRow">
        <Col sm={3} className="fiveIInnerRow">
        <Image src={immerse} className="fiveIImage" fluid />
        </Col>
        <Col sm={9} className="fiveIInnerRow">
        <p className="sectionText">
        Commit and immerse your entire body and being in exclusive and impactful cultural experiences each day. We will immerse you in top relaxing, healing transformative and services and offerings that  the region and world has to offer.
        </p>
        </Col>
      </Row>
      </div>
      </div>

      <div className="testPageRow" id="4">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Invigorate</h1>
      <Row className="sectionRow">
        <Col sm={3} className="fiveIInnerRow">
        <Image src={invigorate} className="fiveIImage" fluid />
        </Col>
        <Col sm={9} className="fiveIInnerRow">
        <p className="sectionText">
          Together, we will invigorate your body mind & soul with the purest energy and strength from the natural elements to design our best selves. Your life energy will be invigorated  during our daily high vitality activities and food.
        </p>
        </Col>
      </Row>
      </div>
      </div>

      <div className="testPageRow" id="5">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Improve</h1>
      <Row className="sectionRow">
        <Col sm={3} className="fiveIInnerRow">
        <Image src={improve} className="fiveIImage" fluid />
        </Col>
        <Col sm={9} className="fiveIInnerRow">
        <p className="sectionText">
          You will improve in all areas that need work and strengthening without shame, while filled with joyful encouragement and constant coconut jellies.
        </p>
        </Col>
      </Row>
      </div>
      </div>

      <div className="testPageRow" id="6">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Incorporate</h1>
      <Row className="sectionRow">
        <Col sm={3} className="fiveIInnerRow">
        <Image src={incorporate} className="fiveIImage" fluid />
        </Col>
        <Col sm={9} className="fiveIInnerRow">
        <p className="sectionText">
          You will build the belief in yourself, energy, memories, friendships and a diverse tool kit to Incorporate these new tips into your new wellness lifestyle when you leave us. Incorporate these into every aspect your work, family and community for the rest of your life.
        </p>
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
              <p> family@SoulfulJoy.com | Planet Earth | Soulful Joy LLC 2020 ©</p>
            </a>

            </Row>
      </div>
    </div>
  )

}

export default PathPage;
