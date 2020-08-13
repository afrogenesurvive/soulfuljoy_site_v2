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
    <Navbar className="navbarMaster" id={location} variant="dark" expand="lg" fixed="top">
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
        {location === 'team' ? (<p className="navListItemText bold">The Team</p>):(<p className="navListItemText">The Team</p>)}
        </NavLink>
        <NavLink to="/experience" className="navListItemLink">
        {location === 'experience' ? (<p className="navListItemText bold">The Experience</p>):(<p className="navListItemText">The Experience</p>)}
        </NavLink>
        <NavLink to="/path" className="navListItemLink">
        {location === 'path' ? (<p className="navListItemText bold">The Path</p>):(<p className="navListItemText">The Path</p>)}
        </NavLink>
        <NavLink to="/joy" className="navListItemLink">
        {location === 'joy' ? (<p className="navListItemText bold">The Joy</p>):(<p className="navListItemText">The Joy</p>)}
        </NavLink>

        {location === 'team' && (
          <div className="subNavDiv desktop">
          <ul className="subNavList">
            <li className="subNavListItem">
            <a href="#1">
              <p className="subNavListItemText">Mission</p>
            </a>
            </li>
            <li className="subNavListItem">
            <a href="#2">
              <p className="subNavListItemText">Story</p>
            </a>
            </li>
            <li className="subNavListItem">
            <a href="#3">
              <p className="subNavListItemText">Team</p>
            </a>
            </li>
          </ul>
        </div>
      )}
      {location === 'experience' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
          <a href="#1">
            <p className="subNavListItemText">Purpose</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#2">
            <p className="subNavListItemText">Itinerary</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#3">
            <p className="subNavListItemText">Location</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#4">
            <p className="subNavListItemText">Activities</p>
          </a>
          </li>
        </ul>
        </div>
      )}
      {location === 'path' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
          <a href="#1">
            <p className="subNavListItemText">Vision</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#2">
            <p className="subNavListItemText">Inspire</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#3">
            <p className="subNavListItemText">Immerse</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#4">
            <p className="subNavListItemText">Invogorate</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#5">
            <p className="subNavListItemText">Improve</p>
          </a>
          </li>
          <li className="subNavListItem">
          <a href="#6">
            <p className="subNavListItemText">Incorporate</p>
          </a>
          </li>
        </ul>
        </div>
      )}
      {
      //   location === 'joy' && (
      //   <div className="subNavDiv desktop">
      //   <ul className="subNavList">
      //     <li className="subNavListItem">
      //       <p className="subNavListItemText">Joy 1</p>
      //     </li>
      //     <li className="subNavListItem">
      //       <p className="subNavListItemText">Joy 2</p>
      //     </li>
      //     <li className="subNavListItem">
      //       <p className="subNavListItemText">Joy 3</p>
      //     </li>
      //   </ul>
      //   </div>
      // )
    }

      <Nav.Link className="navbar_divider">
                </Nav.Link>
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

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navigation;
