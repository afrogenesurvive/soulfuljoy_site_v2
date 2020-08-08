import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import navBrand from '../../assets/imgs/navBrand.png';
import location1 from '../../assets/imgs/location_1.jpg';
import kwayera from '../../assets/imgs/team_1_kwayera.jpeg';
import ade from '../../assets/imgs/team_2_ade.jpg';
import khadijah from '../../assets/imgs/team_3_khadijah.jpg';
import kwasausya from '../../assets/imgs/team_4_kwasausya.jpg';
import perdella from '../../assets/imgs/team_5_perdella.jpg';
import "./overlay.css"

const Overlay = (props) => {
  let location = useLocation().pathname.substr(1);
  // console.log(props.data);

  return (
    <div className="overlayTopdiv">
      <Col className="overlayCol">
      <Row className="overlayTopRow">
      <Button variant="outline-light" size="sm" className="overlayClose" onClick={props.closeOverlay}>X</Button>
      </Row>


      {props.data.type === 'info' && (
        <Row className="overlayRow">
        <h2 className="overlayHeading">
        Popup: {props.data.data}
        </h2>
        <p className="overlayText">
        It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
        </p>
        <p className="overlayText">
        It takes input in the form of a hex color code value and converts that value to a RGB value that can be used to specify color in photo editing software. Photo editing software usually represents color in RGB and therefore if you would like to use the same colors that you use in your html pages in your photo editing software you will need the RGB values for the hex code. This tool allows you to get those values.
        </p>
        <Button variant="outline-light" size="lg" className="overlayAction">Share</Button>
        </Row>
      )}

      {props.data.type === 'image' && (
        <Row className="overlayRow">
        {props.data.data === 'kwayera' && (
          <Image src={kwayera} className="overlayImage" />
        )}
        {props.data.data === 'ade' && (
          <Image src={ade} className="overlayImage" />
        )}
        {props.data.data === 'khadijah' && (
          <Image src={khadijah} className="overlayImage" />
        )}
        {props.data.data === 'kwasausya' && (
          <Image src={kwasausya} className="overlayImage" />
        )}
        {props.data.data === 'perdella' && (
          <Image src={perdella} className="overlayImage" />
        )}
        {props.data.data === 'location1' && (
          <Image src={location1} className="overlayImage" />
        )}
        </Row>
      )}

      </Col>
    </div>
  )
}

export default Overlay;
