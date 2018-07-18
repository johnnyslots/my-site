import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

const Intro = () => (
  <div className="intro-container clearfix">
      <img src={window.location.origin + '/assets/headshot_casual.jpg'} className="intro-image"></img>
    <div>
      <h2>Hey, I'm Yoni Slotwiner</h2>
      <p className="intro-text">I'm a software developer passionate about the intersection of product, operations, and customer service. I'm particularly interested in developing technology that improves people's lives.</p>
      <p className="intro-text">For the past few years I worked at Uber, where I helped lead the regional Greenlight Hubs (in-person support centers for drivers). While there I became increasingly interested in the technology side of the operation, which is why I eventually decided to leave the company and dedicate myself to learning software development.</p>
      <p className="intro-text">Since then, I've completely immersed myself in the programming world, and every day I look forward to building, learning, and collaborating.</p>
      <h3><Icon name="code"></Icon>Technologies I use</h3>
      <p className="intro-text">Javascript, Node.js, React.js, Redux, HTML5, CSS, Express, PostgreSQL</p>
    </div>
  </div>
)

export default Intro;
