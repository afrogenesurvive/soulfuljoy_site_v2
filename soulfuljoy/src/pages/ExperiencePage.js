import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../assets/imgs/wht_ico.png';
import location1 from '../assets/imgs/location_1.jpg';
import "./main.css"

const ExperiencePage = (props) => {

  return (
    <div className="maindiv">
      <div className="" id="header">

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
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        </ul>
      </Row>
      </div>
      </div>

      <div className="testPageRow mobile" id="3mobile">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Location</h1>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage roundImg" fluid />
        </li>
        </ul>
      </Row>
      </div>
      </div>

      <div className="testPageRow desktop" id="4">
      <div className="testPageRowInner">
      <h1 className="sectionHeading">Location</h1>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        </ul>
      </Row>
      <Row className="sectionRow">
        <ul className="locationImageList">
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        <li className="locationImageListItem">
        <Image src={location1} className="locationImage sqImg" fluid />
        </li>
        </ul>
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

export default ExperiencePage;
