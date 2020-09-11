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
import location2 from '../assets/imgs/location_2.jpg';
import location3 from '../assets/imgs/location_3.png';
import location4 from '../assets/imgs/location_4.jpg';
import location5 from '../assets/imgs/location_5.jpg';
import location6 from '../assets/imgs/location_6.jpg';
import pdf from '../assets/get_here_guide.pdf';
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
      Relax & Rejuvenate While You Detox
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
      The Experience
      </h1>
      <p className="headerText">
      Relax & Rejuvenate While You Detox
      </p>
      </Col>
      </Row>
      </div>


      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">The Experience At A Glance</h1>
      <Row className="sectionRow">
        <p className="sectionText xText">Here is a snapshot of what's in store. </p>
      </Row>
      <Row className="sectionRow">
      <p className="sectionText xText bold">
      Inspire & Immerse
      </p>
      </Row>
      <Row className="sectionRow">
      <ul className="sectiontextList">
        <li className="sectiontextListItem">
        <p className="sectionText xText ul">
        Thursday, October 8, 2020
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText xText">
        *Participants Arrive at the Negril Treehouse Resort
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText xText">
        *The Soulful Joy Welcome Reception & Meet and Greet takes place into the evening
        </p>
        </li>
      </ul>

      </Row>
      <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText xText ul">
          Friday, October 9, 2020
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          The first day is all about beginning your experience
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          * Coaching + Wellness Activities
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          * Morning Activities together
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          * Afternoon Group Sessions
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          * Individual Coaching Sessions
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          * Evening Activities (Surprise)
          </p>
          </li>
        </ul>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">At a Glance</h1>
      <p className="sectionText bold">Invigorate & Improve</p>
      <Row className="sectionRow">
      <ul className="sectiontextList">
        <li className="sectiontextListItem">
        <p className="sectionText xText ul">
        Saturday, October 10 2020
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText  xText">
         The second day will keep the energy up as you delve deeper!
        </p>
        </li>
      </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText ul xText">
          Saturday, October 10 2020
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
           The third full day of the retreat is all about Affirming your Soulful Joy!
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
           Both group workshops and individual sessions are on deck before you depart to take you to the next level To IMPROVE Yourself.
          </p>
          </li>
        </ul>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">At a Glance</h1>
      <p className="sectionText bold">Incorporate</p>
      <Row className="sectionRow">
        <p className="sectionText xText ul">
        Monday, October 12, 2020
        </p>
        <p className="sectionText">
        The final day is all about your personal time and starting your journey home!
        Reaffirming all that you’ve experienced. You will have  beautiful new memories, new friends,  a full heart, and a personalized tool kit  to INCORPORATE  these tools you have received into your everyday life.
        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">Packages</h1>
      <Row className="sectionRow">
      <Col sm={3} className="packageCol">
      <ul className="packageList">
        <li>
        <h1 className=" packageTitle">
        Unity
        </h1>
        </li>
        <li>
        <p className="sectionText">
        $1500
        </p>
        </li>
        <li>
        <p className="sectionText">
        Shared Triple Occupancy Accommodation.
        </p>
        </li>
      </ul>
      </Col>
      <Col sm={3} className="packageCol">
      <ul className="packageList">
        <li>
        <h1 className=" packageTitle">
        I & I
        </h1>
        </li>
        <li>
        <p className="sectionText">
        $1750
        </p>
        </li>
        <li>
        <p className="sectionText">
        Shared Double Occupancy Accommodation
        </p>
        </li>
      </ul>
      </Col>
      <Col sm={3} className="packageCol">
      <ul className="packageList">
        <li>
        <h1 className=" packageTitle">
        Only I
        </h1>
        </li>
        <li>
        <p className="sectionText">
        $2250
        </p>
        </li>
        <li>
        <p className="sectionText">
        Single occupancy Accommodation
        </p>
        </li>
      </ul>
      </Col>

      </Row>
      <Row className="sectionRow">
      <a href="https://3navvpy3.pages.infusionsoft.net/" className="textLink xText" target="_blank" rel="noopener noreferrer">
      <Button variant="outline-light" size="md">
      Begin Your Journey.
      </Button>
      </a>
      </Row>
      <Row className="sectionRow">
      <p className="sectionText xText">Your Experience Includes :</p>
      </Row>


      <Row className="sectionRow">
      <ul className="sectiontextList">
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Five days at 4.5 star Black-owned beach front hotel in Negril, Jamaica.
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Personalized meal plans
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * One complimentary 30-minute therapeutic massage
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Daily morning and afternoon wellness activities
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Ground transportation and airport transfers to & from resort
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Exclusive cultural experience
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        * Check-out at 12pm on Oct 12, 2020
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">

        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText">
        You can further personalize your package with Add-ons once you begin your journey.
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText xText">
        In light of the increased safety protocols required due to Covid-19 we have limited accommodations available and therefore have to reduce the number of guests.
        While each person must complete their individual registration forms, we strongly recommend that groups and families book together and select Double / Triple occupancy packages.
        </p>
        </li>
      </ul>

      </Row>
      </div>
      </div>

      <div className="testPageRow" id="3">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Our Location</h1>
      </div>
      </div>

      <div className="testPageRow desktop">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">The Negril Treehouse Resort</h1>
      {
      // <Row className="sectionRow">
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      //   <Image src={location1} className="locationImage roundImg" fluid />
      //   <Image src={location1} className="locationImage roundImg" fluid />
      // </Row>
      // <Row className="sectionRow">
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      //   <Image src={location1} className="locationImage roundImg" fluid />
      //   <Image src={location1} className="locationImage roundImg" fluid />
      // </Row>
    }
      <Row className="sectionRow">
        <Image src={location1} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
        <Image src={location2} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location2"})}/>
        <Image src={location3} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location3"})}/>
      </Row>
      <Row className="sectionRow">
        <Image src={location4} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location4"})}/>
        <Image src={location5} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location5"})}/>
        <Image src={location6} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location6"})}/>
      </Row>
      </div>
      </div>

      <div className="testPageRow mobile" id="mobile3">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">The Negril Treehouse Resort</h1>

      {
      // <Row className="sectionRow">
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      //   <Image src={location1} className="locationImage roundImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
      // </Row>
      // <Row className="sectionRow">
      //   <Image src={location1} className="locationImage roundImg" fluid />
      //   <Image src={location1} className="locationImage roundImg" fluid />
      // </Row>
      // <Row className="sectionRow">
      //   <Image src={location1} className="locationImage roundImg" fluid />
      //   <Image src={location1} className="locationImage roundImg" fluid />
      // </Row>
      }

      <Row className="sectionRow">
        <Image src={location1} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location1"})}/>
        <Image src={location2} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location2"})}/>
      </Row>
      <Row className="sectionRow">
        <Image src={location3} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location3"})}/>
        <Image src={location4} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location4"})}/>
      </Row>
      <Row className="sectionRow">
        <Image src={location5} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location5"})}/>
        <Image src={location6} className="locationImage sqImg" fluid onClick={props.showOverlay.bind(this, {type:'image',data:"location6"})}/>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">Join us in Negril</h1>
      <Row className="sectionRow">
        <p className="sectionText">
        We have curated this unique Experience at the 4.5 star Negril Treehouse Resort. One of the add-ons to your package can be extra nights after October 12th.
        Please visit The Negril Tree House link below to learn about the  COVID-19 re-opening safety and health procedures.
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText xText">
        Check out <a href="http://negriltreehouse.net/" className="textLink" target="_blank" rel="noopener noreferrer">their site</a> for the Re-opening Announcement  and how your health and safety will be catered to.
        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">Our Get Here Guide</h1>
      <Row className="sectionRow">
        <p className="sectionText xText">
        We've put together Our Get Here Guide with preparation tips and how to travel to Jamaica. <a href="https://fw723.infusionsoft.com/app/form/6caaedd6ff1b65f5c50f3032fbd1f7c0" className="textLink" target="_blank" rel="noopener noreferrer">Register now for access to the Guide.</a>
        </p>
        <p className="sectionText xText">
        In light of the additional safety protocols required, we encourage everyone to be informed of the travel restrictions implemented by the <a href="https://www.visitjamaica.com/" className="textLink" target="_blank" rel="noopener noreferrer">Government of Jamaica</a>
        </p>

      </Row>
      {
        // <Row className="sectionRow">
        // <a href={pdf} className="centered" target="_blank" rel="noopener noreferrer" download>
        // <Button variant="outline-light" size="md">
        // Get Your Guide
        // </Button>
        // </a>
        // </Row>
      }

      </div>
      </div>

      <div className="testPageRow" id="4">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Our Activities</h1>

        <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText xText ">
          We have carefully curated this Experience for guests who continuously give of themselves, from all walks of life who are ready to align their mind, body, and spirit with their purpose.
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText xText ">
          Join the Joy October 8-12, 2020
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText xText ">
          at Negril Treehouse Resort, Jamaica.
          </p>
          </li>
        </ul>
        </Row>

        <Row className="sectionRow">
        <Col sm={3} className="packageCol">
        <ul className="packageList">
          <li>
          <h1 className=" activitiesTitle">
          Morning Activities
          </h1>
          </li>
          <li>
          <p className="sectionListText">
          Breathing/Stretching
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Yoga
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Cleansing Sea Bath Ritual
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Hiking on the Beach
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Beach Jog/Run
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Fitness Session
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Group Swim
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Hiking on the Beach
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Snorkeling
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Paddle Board
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Partner Massage
          </p>
          </li>
        </ul>
        </Col>
        <Col sm={3} className="packageCol">
        <ul className="packageList">
          <li>
          <h1 className=" activitiesTitle">
          Workshop Sessions
          </h1>
          </li>
          <li>
          <p className="sectionListText">
          Movement Medicine
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Yoga
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Soulful Sexual Joy
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Living Your Soulful Passion
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Astrology & Universal Messaging
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Soul Food Combining for Vitality
          </p>
          </li>
          <li>
          <p className="sectionListText">
          West African Dance
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Drum Circle
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Medicinal Cannabis Workshop
          </p>
          </li>
          <li>
          <p className="sectionListText">
          The Power of Journaling
          </p>
          </li>
        </ul>
        </Col>
        <Col sm={3} className="packageCol">
        <ul className="packageList">
          <li>
          <h1 className=" activitiesTitle">
          Exclusive  Events
          </h1>
          </li>
          <li>
          <p className="sectionListText">
          Individual One-On-One sessions with Soulful Joy Family Experts
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Fireside Mbongis
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Beachfront Event
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Evening Meditations
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Complimentary therapeutic treatments
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Personalized meals & Plans
          </p>
          </li>
          <li>
          <p className="sectionListText">
          Personalized Tool-kit
          </p>
          </li>
        </ul>
        </Col>
        </Row>
        <Row className="sectionRow">
        <Col>
        <a  href="https://3navvpy3.pages.infusionsoft.net/" target="_blank" rel="noopener noreferrer">
        <Button variant="outline-light" size="md">
        Book Your Spot
        </Button>
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
        <p > family@SoulfulJoy.com | Planet Earth | </p>
      </a>

      </Row>
      </div>
    </div>
  )

}

export default ExperiencePage;
