import React, { Component } from 'react';
import Navbar from './Navbar';
import { Icon } from 'semantic-ui-react';

const Landing = () => (
  <div className="landing-container">
    <Navbar />
    <div className="landing-main-container">
      <h3 className="header-initials-landing fa fa-arrow-down fa-2x">Yoni Slotwiner</h3>
      <h5 className="landing-subtitle">Full Stack Web Developer</h5>
    </div>
    <div className="arrow bounce">
      <Icon name="arrow down" size="big"></Icon>
    </div>
  </div>
)

export default Landing;
