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
import "./overlay.css"

const Overlay = (props) => {
  let location = useLocation().pathname.substr(1);
  console.log(props.data);

  return (
    <div className="overlayTopdiv">
    </div>
  )
}

export default Overlay;
