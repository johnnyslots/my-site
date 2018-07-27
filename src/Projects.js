import React from 'react';
import { Reveal, Icon } from 'semantic-ui-react';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header-container">
        <h1 className="projects-header">Projects</h1>
        <img
          alt='computer-icon' src="https://www.freeiconspng.com/uploads/black-iscreen-computer-icons--free-download-6.jpg"
          className="projects-icon">
        </img>
      </div>
      <div className='projects-details-container'>
        <div className='projects-item-container'>
          <div>
            <h2 className='projects-item-header'>Code Bono</h2>
            <p>Code Bono is a platform that connects nonprofit organizations with software developers looking to contribute their skills through pro bono work.</p>
            <h4 className='projects-visit'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='http://www.codebono.org/'>VISIT</a></h4>
            <div className='projects-links-border'>
              <Icon name='sitemap' size='small'></Icon>
            </div>
            <h4 className='projects-github'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='https://github.com/Code-Bono/code-bono'>GITHUB</a></h4>
          </div>
          <Reveal animated='small fade'>
            <Reveal.Content visible>
              <div className='projects-image-container'>
                <img alt='code bono' src={window.location.origin + '/assets/code-bono-mac.png'} className='projects-image'></img>
              </div>
            </Reveal.Content>
            <Reveal.Content hidden>
              <div className='projects-image-icons-container'>
                <img alt='code bono' src={window.location.origin + '/assets/code-bono-icons.png'} className='projects-image'></img>
              </div>
            </Reveal.Content>
          </Reveal>
        </div>
        <div className='projects-item-container'>
          <Reveal animated='small fade'>
            <Reveal.Content visible>
              <div className='projects-image-container'>
                <img alt='checkit app' src={window.location.origin + '/assets/checkit-iphone.png'} className='projects-image'></img>
              </div>
            </Reveal.Content>
            <Reveal.Content hidden>
              <div className='projects-image-icons-container'>
                <img alt='checkit app' src={window.location.origin + '/assets/checkit-icons.png'} className='projects-image'></img>
              </div>
            </Reveal.Content>
          </Reveal>
          <div>
            <h2 className='projects-item-header'>CheckIt</h2>
            <p>A mobile app that allows you to send and receive recommendations for content such as books, movies, podcasts, and more. You can keep track of who recommended what and when, manage your lists, and get real-time notifications for new recommendation.</p>
            <h4 className='projects-visit'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='https://expo.io/@yonislots/checkit-app'>VISIT</a></h4>
            <div className='projects-links-border'>
              <Icon name='sitemap' size='small'></Icon>
            </div>
            <h4 className='projects-github'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='https://github.com/johnnyslots/checkit-app'>GITHUB</a></h4>
          </div>
        </div>
        <div className='projects-item-container projects-no-border'>
          <div>
            <h2 className='projects-item-header'>D&D Wine and Liquor</h2>
            <p>A mock e-commerce site that sells a selection of wine and liquor. This project also incorporates the Stripe API for a fully-functioning check-out experience.</p>
            <h4 className='projects-visit'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='https://dd-wine.herokuapp.com/'>VISIT</a></h4>
            <div className='projects-links-border'>
              <Icon name='sitemap' size='small'></Icon>
            </div>
            <h4 className='projects-github'><a rel="noopener noreferrer" target="_blank" className='projects-visit-link' href='https://github.com/dd-grace-shopper/dd-grace-shopper'>GITHUB</a></h4>
          </div>
          <Reveal animated='small fade'>
            <Reveal.Content visible>
              <div className='projects-image-container'>
                <img alt='dd wine & liquor' src={window.location.origin + '/assets/dd-wine.png'} className='projects-image-laptop'></img>
              </div>
            </Reveal.Content>
            <Reveal.Content hidden>
              <div className='projects-image-icons-container'>
                <img alt='dd wine & liquor' src={window.location.origin + '/assets/dd-wine-icons.png'} className='projects-image-laptop'></img>
              </div>
            </Reveal.Content>
          </Reveal>
        </div>
      </div>
    </div>

  )
}

export default Projects;


