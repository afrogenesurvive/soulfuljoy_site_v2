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

      <div className="testPageRow" id="1">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Our Purpose</h1>
        <Row className="sectionRow">
          <p className="sectionText xText">
            Join us for a curated experience focused on living a healthier life balancing the stress imposed on our mind, body, and souls.
          </p>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText xText">
          This is a wellness lifestyle experience that will empower you to kick start your desired new lifestyle. We are a team of experts who have dedicated our lives to the sustained wellness of Black and Brown communities.
          </p>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText xText">
          We have over 90 years of collective experience offering excellent services in the United States, Caribbean, Africa, Central, and South America.
          </p>
        </Row>
        <Row className="sectionRow">
          <p className="sectionText xText">
            During October 8-12, 2020 in Negril Jamaica, we will take you on the Path to this amazing Experience.
          </p>
        </Row>
        <Row className="sectionRow">
        <a href="#" className="textLink xText" target="_blank" rel="noopener noreferrer">
        <p className="sectionText ">
        Subscribe
        </p>
        </a>
        </Row>
        </div>
      </div>

      <div className="testPageRow" id="2">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Itnerary</h1>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">The Experience at a Glance</h1>
      <Row className="sectionRow">
        <p className="sectionText xText">Here is a <a href="https://3navvpy3.pages.infusionsoft.net/" className="textLink" target="_blank" rel="noopener noreferrer">snapshot</a> of what's in store. <NavLink to="/joy" className="textLink">Join the joy</NavLink>  for full details.</p>
      </Row>
      <Row className="sectionRow">
      <p className="sectionText  xText">
      Inspire & Immerse:
      </p>
      </Row>
      <Row className="sectionRow">
      <ul className="sectiontextList">
        <li className="sectiontextListItem">
        <p className="sectionText xText">
        Thursday, October 8, 2020:
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
        <li className="sectiontextListItem">
        <p className="sectionText xText">
        *Meet and Greet takes place into the evening
        </p>
        </li>
      </ul>

      </Row>
      <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Friday, October 9, 2020:
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          The first full day of the retreat is all about beginning your 3-day immersion:
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          –  Coaching + Wellness Activities
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
      <p className="sectionText">Invigorate & Improve</p>
      <Row className="sectionRow">
      <ul className="sectiontextList">
        <li className="sectiontextListItem">
        <p className="sectionText  xText">
        Saturday, October 10 2020
        </p>
        </li>
        <li className="sectiontextListItem">
        <p className="sectionText  xText">
         The second full day will keep the energy up as you delve deeper!
        </p>
        </li>
      </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
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
        <p className="sectionText">

        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">At a Glance</h1>
      <p className="sectionText">Incorporate</p>
      <Row className="sectionRow">
        <p className="sectionText">
        Monday, October 12, 2020
        The final Day of the retreat is all about your personal time and starting your journey home!
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
      <p className="sectionText xText">Experience Includes:</p>
      </Row>
      <Row className="sectionRow">
      <p className="sectionText">
      Five days at 4.5 star Black-owned beach front hotel in Negril, Jamaica  with personalized meal plans, one complimentary 30-minute therapeutic massage, daily activities, ground transportation,  airport private transfers to & from resort and exclusive cultural experience then checking out at 12pm on Oct 12, 2020.
      We have Limited  Quadruple Shared Occupancy Accommodation Available.
      </p>
      <p className="sectionText">
      WE strongly recommend that groups and families book together and select Double / Triple occupancy. Groups of 4 and over must select Triple Occupancy and the price will be adjusted in the payment portal
      </p>
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
        We have curated this unique Experience at the 4 1/2 star Negril Treehouse Resort.
        One of the add-ons to your package can be extra nights after October 12. <a href="https://rt9gnc4f.pages.infusionsoft.net/" className="textLink" target="_blank" rel="noopener noreferrer">See More</a>
        </p>
      </Row>
      <Row className="sectionRow">
        <p className="sectionText">
        Check out <a href="http://negriltreehouse.net/" className="textLink" target="_blank" rel="noopener noreferrer">their site</a> for the Re-opening Announcement  and how your health and safety will be catered to.
        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow">
      <div className="testPageRowInner">
      <h1 className="sectionsubheading">Our Get Here Guide</h1>
      <Row className="sectionRow">
        <p className="sectionText">
        We've put together Our Get Here Guide with preparation tips and how to travel to Jamaica.
        In light of the additional safety protocol required, we encourage everyone to be informed of the  travel restrictions implemented by the Government of Jamaica. https://www.visitjamaica.com/
        </p>
      </Row>
      </div>
      </div>

      <div className="testPageRow" id="4">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">Our Activities</h1>
        <Row className="sectionRow">
          <p className="sectionText">
            During The Experience  you will participate in inspiring transformational leadership sessions, receive a personalized meal plan, and  enjoy a complimentary massage.
          </p>
        </Row>

        <Row className="sectionRow">
        <ul className="sectiontextList">
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          African Drumming & Dance
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Homeopathy and Herbal Walks
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Mbongis
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Sunrise Yoga
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Cleansing Sea Baths
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          Beach hikes
          </p>
          </li>
          <li className="sectiontextListItem">
          <p className="sectionText  xText">
          This unique Experience will include activities grounded
          </p>
          </li>
        </ul>
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
