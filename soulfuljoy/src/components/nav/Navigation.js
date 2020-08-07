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
              <p className="subNavListItemText">Team 1</p>
            </li>
            <li className="subNavListItem">
              <p className="subNavListItemText">Team 2</p>
            </li>
            <li className="subNavListItem">
              <p className="subNavListItemText">Team 3</p>
            </li>
          </ul>
        </div>
      )}
      {location === 'experience' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            <p className="subNavListItemText">Experience 1</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Experience 2</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Experience 3</p>
          </li>
        </ul>
        </div>
      )}
      {location === 'path' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            <p className="subNavListItemText">Path 1</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Path 2</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Path 3</p>
          </li>
        </ul>
        </div>
      )}
      {location === 'joy' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            <p className="subNavListItemText">Joy 1</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Joy 2</p>
          </li>
          <li className="subNavListItem">
            <p className="subNavListItemText">Joy 3</p>
          </li>
        </ul>
        </div>
      )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Navigation;
