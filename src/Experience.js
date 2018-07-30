import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import { experienceDetails } from './details';
import resumeIcon from './images/resume-icon.png';

export default class Experience extends Component {
  constructor() {
    super()
    this.state = {
      hideDetails: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({hideDetails: !this.state.hideDetails})
  }

  render () {

    const moreDetailsClass = this.state.hideDetails ? 'experience-more-details' : '';

    return (
      <div className="experience-container">
        <div className="experience-header-container">
          <h1 className="experience-header">Experience</h1>
          <h5 className="experience-subtitle">Click cards for more details</h5>
          <img
            alt=''
            src={resumeIcon}
            className="experience-icon">
          </img>
        </div>
        {
          experienceDetails.map((el, i) => {
            let cascadeLeft, cascadeRight
            if(i % 2) cascadeLeft = true
            else cascadeRight = true

            return (
              <Fade key={i} cascade left={cascadeLeft} right={cascadeRight}>
                <div className='card-right'>
                  <div className='experience-card-container'>
                    <Card fluid onClick={this.handleClick} >
                        <Card.Content>
                          <Image floated='right' size='mini' src={el.imageURL} />
                          <Card.Header className='experience-card-header'>{el.company}</Card.Header>
                          <Card.Meta>{el.position}</Card.Meta>
                          <div className={moreDetailsClass}>
                            <Card.Description>
                              <div className='display-linebreak experience-description'>
                                {el.description}
                              </div>
                            </Card.Description>
                          </div>
                        </Card.Content>
                        <Card.Content extra>
                          {el.date}
                        </Card.Content>
                    </Card>
                  </div>
                </div>
              </Fade>
            )
          })
        }
      </div>
    )
  }
}
