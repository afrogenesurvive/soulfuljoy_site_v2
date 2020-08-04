import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import "./navigation.css"

const Navigation = (props) => {
  let location = useLocation();

  const [hovered, setHover] = useState(null);
  return (
    <div className="navTopDiv">
      <Row className="navRow">

            <h3 className="navHeading">
              SoulfulJoy
            </h3>

            <ul className="navList">
              <li className="navListItem">
                <NavLink to="/home" className="navListItemLink"
                  onMouseEnter={() => setHover('/home')}
                  onMouseLeave={() => setHover(null)}
                  >
                  <p className="navListItemText">Home</p>
                  </NavLink>
              </li>
              <li className="navListItem">
                <NavLink to="/test" className="navListItemLink"
                  onMouseEnter={() => setHover('/test')}
                  onMouseLeave={() => setHover(null)}
                  >
                  <p className="navListItemText">Test</p>
                  </NavLink>
              </li>
              <li className="navListItem">
                <NavLink to="/test2" className="navListItemLink"
                  onMouseEnter={() => setHover('/test2')}
                  onMouseLeave={() => setHover(null)}
                  >
                  <p className="navListItemText">Test</p>
                  </NavLink>
              </li>
              <li className="navListItem">
                <NavLink to="/test3" className="navListItemLink"
                  onMouseEnter={() => setHover('/test3')}
                  onMouseLeave={() => setHover(null)}
                  >
                  <p className="navListItemText">Test</p>
                  </NavLink>
              </li>
            </ul>
            {hovered === '/home' && (
              <div className="subNavDiv">
                <ul className="subNavList">
                  <li className="subNavListItem">
                    <NavLink to="/test#footer" className="navListItemLink">test footer</NavLink>
                  </li>
                  <li className="subNavListItem">
                    2
                  </li>
                  <li className="subNavListItem">
                    3
                  </li>
                </ul>
              </div>
            )}
            {hovered === '/test' && (
              <div className="subNavDiv">
              <ul className="subNavList">
                <li className="subNavListItem">
                  1
                </li>
                <li className="subNavListItem">
                  2
                </li>
                <li className="subNavListItem">
                  3
                </li>
              </ul>
              </div>
            )}
            {hovered === '/test3' && (
              <div className="subNavDiv">
              <ul className="subNavList">
                <li className="subNavListItem">
                  1
                </li>
                <li className="subNavListItem">
                  2
                </li>
                <li className="subNavListItem">
                  3
                </li>
              </ul>
              </div>
            )}

      </Row>
    </div>
  )
}

export default Navigation;
