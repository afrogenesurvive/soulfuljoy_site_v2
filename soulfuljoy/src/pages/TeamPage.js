import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import location1 from '../assets/imgs/location_1.jpg';
import kwayera from '../assets/imgs/team_1_kwayera.jpeg';
import ade from '../assets/imgs/team_2_ade.jpg';
import khadijah from '../assets/imgs/team_3_khadijah.jpg';
import kwasausya from '../assets/imgs/team_4_kwasausya.jpg';
import perdella from '../assets/imgs/team_5_perdella.jpg';
import "./main.css"

const TeamPage = (props) => {

  return (
    <div className="maindiv" id="teamMaindiv">

      <div className="teamHeader desktop" id="header">
      <Row className="headerRow">
      <Col sm={8} className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Team
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

      <div className="teamHeader mobile" id="mobileHeader">
      <Row className="headerRow">
      <Col className="headerCol headColLeft">
      <h1 className="headerHeading">
      The Team Mobile
      </h1>
      <p className="headerText">
      It takes input in the form of a hex color code value and converts that
      </p>
      </Col>
      </Row>
      </div>

      <div className="testPageRow" id="1">
        <div className="testPageRowInner">
        <h1 className="sectionHeading">The Team</h1>
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
      <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"perdella"})}>Perdella</Button>
      </Col>
      </Row>
      </div>
      </div>

      <div className="testPageRow mobile" id="mobile3">
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
        <Button variant="outline-light" size="sm" className="teamBtn" onClick={props.showOverlay.bind(this, {type:'info',data:"perdella"})}>Perdella</Button>
        </Col>
      </Row>
      </div>
      </div>

      <div className="testPageFooter" id="footer">

      <Col md={3} className="footerCol">
      <ul className="footerLinkList">
        <li className="footerLinkListItem">
        <p className="footerLinkListItemText">a</p>
        </li>
        <li className="footerLinkListItem">
        <p className="footerLinkListItemText">a</p>
        </li>
        <li className="footerLinkListItem">
        <p className="footerLinkListItemText">a</p>
        </li>
        <li className="footerLinkListItem">
        <p className="footerLinkListItemText">a</p>
        </li>
      </ul>
      </Col>
      <Col md={9} className="footerCol">
      <p>.</p>
      </Col>
      </div>
    </div>
  )

}

export default TeamPage;
