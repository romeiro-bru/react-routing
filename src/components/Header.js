import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><img src="./science.svg" id="code-icn"></img>
    </span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: '#FAC05E' }}>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      {/* <li><a href="/courses">Courses</a></li> */}
    </ul>    
  </header>
);

export default Header;