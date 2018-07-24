import React, { Component } from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
        <div className="projects-header-container">
          <h1 className="projects-header">Projects</h1>
          <img
            src="https://www.freeiconspng.com/uploads/black-iscreen-computer-icons--free-download-6.jpg"
            className="projects-icon">
          </img>
        </div>
        <div className='projects-section-container'>
          <p>Code Bono is a platform that connects nonprofit organizations with software developers looking to contribute their skills through pro bono work.</p>
          <img src={window.location.origin + '/assets/code-bono.png'} className='projects-image'></img>
        </div>
    </div>

  )
}

export default Projects;
