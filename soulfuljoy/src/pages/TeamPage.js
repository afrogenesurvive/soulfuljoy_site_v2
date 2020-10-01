import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import location1 from '../assets/imgs/location_1.jpg';
import kwayera from '../assets/imgs/kwayera3.jpg';
import kwayera_mini from '../assets/imgs/kwayera_mini.png';
import ade from '../assets/imgs/team_2_ade1.png';
import khadijah from '../assets/imgs/team_3_khadijah.png';
import kwasausya from '../assets/imgs/team_4_kwasausya.jpg';
import perdella from '../assets/imgs/team_5_perdella.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
 } from '@fortawesome/free-brands-svg-icons';
import "./main.css"

const TeamPage = (props) => {

  return (
    <div className="maindiv" id="teamMaindiv">

      <div className="teamHeader desktop" id="header">
      <Row className="headerRow">
      <Col sm={8} className="headerCol headColLeft">
      <h1 className="headerHeading">
      Our Team
      </h1>
      <p className="headerText">
      Meet Our Soulful Joy Family.
      </p>
      </Col>
      <Col sm={4} className="headerCol headColRight ">
      <Image src={Wht_ico} className="headerImg" fluid />
      </Col>
      </Row>
      </div>

      <div className="teamHeader mobile" id="mobileHeader">
      <Row className="headerRow">
      <Col className="headerCol headColLeft">
      <h1 className="headerHeading">
      Our Team
      </h1>
      <p className="headerText">
      Meet Our Soulful Joy Family.
      </p>

      </Col>
      {
          // <Image src={Wht_ico} className="mobileHeaderLogo" fluid />
      }

      </Row>
      </div>


      <div className="testPageRow desktop" id="3">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Our Team</h1>
      <Row className="sectionRow" id="teamSectionRow">
      <Col className="teamImgCol" id="kwayera">
      <Image src={kwayera} className="locationImage roundImg teamImg"  onClick={props.showOverlay.bind(this, {type:'image',data:"kwayera"})}/>
      <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"kwayera"})}>Kwayera</Button>
      </Col>
      <Col className="teamImgCol" id="ade">
      <Image src={ade} className="locationImage roundImg teamImg"  fluid onClick={props.showOverlay.bind(this, {type:'image',data:"ade"})}/>
      <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"ade"})}>Ade</Button>
      </Col>
      <Col className="teamImgCol" id="khadijah">
      <Image src={khadijah} className="locationImage roundImg teamImg"  fluid onClick={props.showOverlay.bind(this, {type:'image',data:"khadijah"})}/>
      <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"khadijah"})}>Khadijah</Button>
      </Col>
      <Col className="teamImgCol" id="kwasausya">
      <Image src={kwasausya} className="locationImage roundImg teamImg"  fluid onClick={props.showOverlay.bind(this, {type:'image',data:"kwasausya"})}/>
      <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"kwasausya"})}>Kwasausya</Button>
      </Col>
      <Col className="teamImgCol" id="perdella">
      <Image src={perdella} className="locationImage roundImg teamImg"  fluid onClick={props.showOverlay.bind(this, {type:'image',data:"perdella"})}/>
      <a href="" target="_blank" rel="noopener noreferrer">
      <Button variant="outline-light" size="sm" className="teamBtn" >The Young I</Button>
      </a>
      </Col>
      </Row>
      </div>
      </div>

      {
        // <div className="testPageRow desktop groupSnap" >
        // <div className="testPageRowInner groupPic">
        // <h1 className="sectionsubheading">Group Photo</h1>
        // <Image src={location1} className="groupPhoto"  onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
        // </div>
        // </div>
      }


      <div className="testPageRow mobile" id="mobile4">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Team</h1>
      <Row className="sectionRow">
        <Col className="teamImgCol" id="kwayera">
        <Image src={kwayera} className="locationImage roundImg teamImg" onClick={props.showOverlay.bind(this, {type:'image',data:"kwayera"})} fluid />
        <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"kwayera"})}>Kwayera</Button>
        </Col>

        <Col className="teamImgCol" id="ade">
        <Image src={ade} className="locationImage roundImg teamImg" onClick={props.showOverlay.bind(this, {type:'image',data:"ade"})} fluid />
        <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"ade"})}>Ade</Button>
        </Col>
      </Row>

      <Row className="sectionRow">
        <Col className="teamImgCol" id="khadijah">
        <Image src={khadijah} className="locationImage roundImg teamImg" onClick={props.showOverlay.bind(this, {type:'image',data:"khadijah"})} fluid />
        <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"khadijah"})}>Khadijah</Button>
        </Col>

        <Col className="teamImgCol" id="kwasausya">
        <Image src={kwasausya} className="locationImage roundImg teamImg" onClick={props.showOverlay.bind(this, {type:'image',data:"kwasausya"})} fluid />
        <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"kwasausya"})}>Kwasausya</Button>
        </Col>
      </Row>
      <Row className="sectionRow">
        <Col className="teamImgCol" id="perdella">
        <Image src={perdella} className="locationImage roundImg teamImg singleImg" onClick={props.showOverlay.bind(this, {type:'image',data:"perdella"})} fluid />
        <a href="https://ifetayo.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="outline-light" size="sm" className="teamBtn" >The Young I</Button>
        </a>
        </Col>
      </Row>
      </div>
      </div>

      {
        // <div className="testPageRow mobile groupSnap" >
        // <div className="testPageRowInner groupPic">
        // <h1 className="sectionsubheading">Group Photo</h1>
        // <Image src={location1} className="groupPhoto"  onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
        // </div>
        // </div>
      }

      <div className="testPageRow" id="2">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Our Story</h1>
      <Row className="sectionRow">
        <p className="sectionText xText">
        Soulful Joy began as a wellness solution in response to the ever-increasing levels of stress we are living with daily.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText xText">
        Conceived in 2017 by Kwayera Archer who hails from Jamaica, the goal was to launch Soulful Joy in 2020 as the 5 I’s or what we call - Di I Dem.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText xText">
        Ade from Jamaica, Khadija from Guyana, Kwasausya with roots in Barbados, were all engaged for this endeavor and we formally began our team collaboration planning to launch July 2020.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText xText">
        The 5th “I” is dedicated to our commitment to “each one - teaching one”, and creating opportunities for hands on business training opportunities. Through a rotating position that will always be filled with an aspiring entrepreneur representing the next generation business leaders from our nonprofit partnership youth development organization, Ifetayo Cultural Arts Academy’s alumni pool in Brooklyn, NY.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText xText">
          Thank you for Joining our Soulful Joy Movement!
        </p>
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

export default TeamPage;
