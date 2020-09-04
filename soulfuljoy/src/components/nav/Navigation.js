import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import AuthContext from './context/auth-context';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faYoutube,
 } from '@fortawesome/free-brands-svg-icons';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import navBrand from '../../assets/imgs/navBrand.png';
import "./navigation.css"

const Navigation = (props) => {
  let location = useLocation().pathname.substr(1);
  // console.log(location);
  return (
    <Navbar className="navbarMaster" id={location} variant="dark" expand="lg">
      <Navbar.Brand>

        <NavLink to="/home">
        <Image src={navBrand} className="navbarBrandLogo" fluid />
        </NavLink>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-4">

        <NavLink to="/home" className="navListItemLink">
        {location === 'home' ? (<p className="navListItemText bold">Home</p>):(<p className="navListItemText">Home</p>)}
        </NavLink>
        <NavLink to="/team" className="navListItemLink">
        {location === 'team' ? (<p className="navListItemText bold">Team</p>):(<p className="navListItemText">Team</p>)}
        </NavLink>
        <NavLink to="/experience" className="navListItemLink">
        {location === 'experience' ? (<p className="navListItemText bold">Experience</p>):(<p className="navListItemText">Experience</p>)}
        </NavLink>
        <NavLink to="/path" className="navListItemLink">
        {location === 'path' ? (<p className="navListItemText bold">Path</p>):(<p className="navListItemText">Path</p>)}
        </NavLink>
        <NavLink to="/joy" className="navListItemLink">
        {location === 'joy' ? (<p className="navListItemText bold">Joy</p>):(<p className="navListItemText">Joy</p>)}
        </NavLink>



      <Nav.Link className="navbar_divider">
      </Nav.Link>
      <Row>

      <Nav.Link className="navbar_item_social" href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookSquare} className="navbar_socialIcon"/>
      </Nav.Link>
      <Nav.Link className="navbar_item_social" href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="navbar_socialIcon"/>
      </Nav.Link>
      <Nav.Link className="navbar_item_social" href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="navbar_socialIcon"/>
      </Nav.Link>
      <Nav.Link className="navbar_item_social" href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="navbar_socialIcon"/>
      </Nav.Link>
      <Nav.Link className="navbar_divider">
      </Nav.Link>
      </Row>


      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navigation;
