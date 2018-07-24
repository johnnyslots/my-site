import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react'

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
          <div>
            <h2>Code Bono</h2>
            <p>Code Bono is a platform that connects nonprofit organizations with software developers looking to contribute their skills through pro bono work.</p>

            <h4 className='projects-visit'>VISIT</h4>
            <div className='projects-links-border'>|</div>
            <h4 className='projects-github'>GITHUB</h4>
          </div>
          <div className='projects-image-container'>
            <img src={window.location.origin + '/assets/code-bono.png'} className='projects-image'></img>
          </div>
        </div>
        <div className='projects-section-container'>
          <div>
            <h2>CheckIt</h2>
            <p>A mobile app that allows you to send and receive recommendations for content such as books, movies, podcasts, and more. You can keep track of who recommended what and when, manage your lists, and get real-time notifications for new recommendation.</p>
          </div>
          <div className='projects-image-container'>
            <img src={window.location.origin + '/assets/code-bono.png'} className='projects-image'></img>
          </div>
        </div>
    </div>

  )
}

export default Projects;




          // <Reveal animated='small fade'>
          //   <Reveal.Content visible>
          //     <Image src={window.location.origin + '/assets/code-bono.png'} size='large' />
          //   </Reveal.Content>
          //   <Reveal.Content hidden>
          //     <img src='https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default'></img>
          //   </Reveal.Content>
          // </Reveal>
