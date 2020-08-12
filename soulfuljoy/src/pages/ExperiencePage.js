import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
 } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import location1 from '../assets/imgs/location_1.jpg';
import "./main.css"

const ExperiencePage = (props) => {

  return (
    <div className="maindiv" id="experienceMaindiv">
      <div className="experienceHeader desktop" id="header">
      <Row className="headerRow">
      <Col sm={8} className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Experience
      </h1>
      <p className="headerText">
      It takes input in the form of a hex color code value and converts that
      </p>
      </Col>
      <Col sm={4} className="headerCol headColRight ">
      <Image src={Wht_ico} className="headerImg" fluid />
      </Col>
      </Row>
      </div>

      <div className="experienceHeader mobile" id="mobileHeader">
      <Row className="headerRow">
      <Col className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Experience Mobile
      </h1>
      <p className="headerText">
      It takes input in the form of a hex color code value and converts that
      </p>
      </Col>
      </Row>
      </div>

      <div className="testPageRow" id="1">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Our Purpose</h1>
        <Row className="sectionRow">
          <p className="sectionText">
            It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
          </p>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText">
            It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
          </p>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText">
            It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
          </p>
        </Row>
        </div>
      </div>

      <div className="testPageRow" id="2">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Our Vision</h1>
      <Row className="sectionRow">
        <p className="sectionText">
          It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText">
          It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText">
          It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow desktop" id="3">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Location</h1>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage roundImg" fluid />


        <Image src={location1} className="locationImage roundImg" fluid />


      </Row>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage roundImg" fluid />


        <Image src={location1} className="locationImage roundImg" fluid />


      </Row>
      </div>
      </div>

      <div className="testPageRow mobile" id="mobile3">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Location</h1>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


      </Row>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage roundImg" fluid />


        <Image src={location1} className="locationImage roundImg" fluid />


      </Row>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage roundImg" fluid />


        <Image src={location1} className="locationImage roundImg" fluid />


      </Row>
      </div>
      </div>

      <div className="testPageRow desktop" id="4">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Location</h1>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>


        <Image src={location1} className="locationImage sqImg" fluid />


      </Row>
      <Row className="sectionRow">


        <Image src={location1} className="locationImage sqImg" fluid />


        <Image src={location1} className="locationImage sqImg" fluid />


        <Image src={location1} className="locationImage sqImg" fluid />


      </Row>
      </div>
      </div>

      <div className="testPageFooter" id="footer">

      <Row className="footer_midRow">
              <Col md={3} className="footer_midCol">
                <ul className="footer_navList">
                  <li className="footer_navListItem">
                    <NavLink to="/home" className="footer_navBar_link">Home</NavLink>
                  </li>
                  <li className="footer_navListItem">
                    <NavLink to="/team" className="footer_navBar_link">Team</NavLink>
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
                  <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="footerIcon"/>
                  </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="footer_copyrightRow">
            <a className="footer_copyrightRow_text" href="mailto:family@SoulfulJoy.com" target="_blank" rel="noopener noreferrer">
              <p > family@SoulfulJoy.com | Planet Earth | </p>
            </a>

            </Row>
      </div>
    </div>
  )

}

export default ExperiencePage;
