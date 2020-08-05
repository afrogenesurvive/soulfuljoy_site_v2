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
        <p className="navListItemText">Home</p>
        </NavLink>
        <NavLink to="/team" className="navListItemLink">
        <p className="navListItemText">team</p>
        </NavLink>
        <NavLink to="/experience" className="navListItemLink">
        <p className="navListItemText">experience</p>
        </NavLink>
        <NavLink to="/path" className="navListItemLink">
        <p className="navListItemText">path</p>
        </NavLink>
        <NavLink to="/joy" className="navListItemLink">
        <p className="navListItemText">joy</p>
        </NavLink>

        {location === 'team' && (
          <div className="subNavDiv desktop">
          <ul className="subNavList">
            <li className="subNavListItem">
              team 1
            </li>
            <li className="subNavListItem">
              team 2
            </li>
            <li className="subNavListItem">
              team 3
            </li>
          </ul>
        </div>
      )}
      {location === 'experience' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            experience 1
          </li>
          <li className="subNavListItem">
            experience 2
          </li>
          <li className="subNavListItem">
            experience 3
          </li>
        </ul>
        </div>
      )}
      {location === 'path' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            path 1
          </li>
          <li className="subNavListItem">
            path 2
          </li>
          <li className="subNavListItem">
            path 3
          </li>
        </ul>
        </div>
      )}
      {location === 'joy' && (
        <div className="subNavDiv desktop">
        <ul className="subNavList">
          <li className="subNavListItem">
            joy 1
          </li>
          <li className="subNavListItem">
            joy 2
          </li>
          <li className="subNavListItem">
            joy 3
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
