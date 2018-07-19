import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Image, Reveal, Button, Item } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import Collapsible from 'react-collapsible';

const experienceDetails = [
  {
    company: 'Fullstack Academy of Code',
    position: 'Software Engineering Teaching Fellow',
    description: `- Provide coaching and technical instruction to 7 students as their assigned teaching fellow \n - Support students in need of troubleshooting assistance and review of programming concepts during workshops \n - Lead technical and behavioral admissions interviews for prospective students`,
    imageURL: 'https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png',
    date: 'June 2018 - present'
  },
  {
    company: 'Uber',
    position: 'Subregional Greenlight Program Specialist',
    description: '- Provide coaching and technical instruction to 7 students as their assigned teaching fellow \n - Support students in need of troubleshooting assistance and review of programming concepts during workshops \n - Lead technical and behavioral admissions interviews for prospective students',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Uber_App_Icon.svg/1200px-Uber_App_Icon.svg.png',
    date: 'Aug 2017 - Feb 2018'
  },
  {
    company: 'Uber',
    position: 'Greenlight Program Manager',
    description: '- Oversaw and managed 3 Greenlight Hubs across 3 boroughs, with a total staff of 60 employees serving approximately 5,000 driver-partners per week, and a budget totaling $300k per month \n - Created and maintained a staffing model to identify inefficiencies in our scheduling, resulting in changes to our operating hours and minimized overtime for support representatives \n - Developed and cultivated a partnership with Sprint; rented space in Greenlight Hubs to Sprint, offsetting costs by $5,000 per month, and launched 3 “Sprint Spots” in stores where Uber customers received support',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Uber_App_Icon.svg/1200px-Uber_App_Icon.svg.png',
    date: 'Sep 2015 - Aug 2017'
  },
  {
    company: 'Uber',
    position: 'Operations Coordinator',
    description: '- Supported the daily operations through operational oversight and analysis \n - Managed scheduling, attendance, and general administration of support representatives \n - Trained and mentored support representatives to strengthen quality and efficiency metrics',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Uber_App_Icon.svg/1200px-Uber_App_Icon.svg.png',
    date: 'Jun 2014 - Sep 2015'
  },
  {
    company: 'SoundStreak',
    position: 'Customer Operations & Sales Engineer',
    description: '- Managed all aspects of customer and technical support; owned communications with customers \n - Conducted demos of SoundStreak’s software for potential customers, including executives from independent studios, NBC, Viacom, CBS, WWE, and more \n - Produced, recorded, and edited several tutorial videos for the website; represented SoundStreak on East-West Audio Body Shop, a leading radio show in the voice-over industry',
    imageURL: 'http://cdn2.btrstatic.com/pics/showpics/large/268027_tj6KheHb.png',
    date: 'Jan 2011 - Jun 2014'
  }
]


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
            src="https://www.freeiconspng.com/uploads/resume-icon-png-10.png"
            className="experience-image">
          </img>
        </div>
        {
          experienceDetails.map((el, i) => {
            let cascadeLeft, cascadeRight
            if(i % 2) cascadeLeft = true
            else cascadeRight = true

            return (
              <Fade cascade left={cascadeLeft} right={cascadeRight}>
                <div className='card-right'>
                  <div className='experience-card-container'>
                    <Card fluid onClick={this.handleClick}>
                      <Card.Content>
                        <Image floated='right' size='mini' src={el.imageURL} />
                        <Card.Header>{el.company}</Card.Header>
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
