import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Image, Reveal, Button, Item } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <div  className="experience-container">
      <h2>Experience</h2>
        <div className="card-left">
          <Fade cascade right>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png' />
                <Card.Header>Fullstack Academy of Code</Card.Header>
                <Card.Meta>Software Engineering Teaching Fellow</Card.Meta>
                <Card.Description>
                - Provide coaching and technical instruction to 7 students as their assigned teaching fellow <br />
                - Support students in need of troubleshooting assistance and review of programming concepts during workshops <br />
                - Lead technical and behavioral admissions interviews for prospective students
                </Card.Description>
              </Card.Content>
            </Card>
          </Fade>
        </div>
        <div className="card-container card-right">
          <Fade left>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Uber_App_Icon.svg/1200px-Uber_App_Icon.svg.png' />
                <Card.Header>Uber</Card.Header>
                <Card.Meta>Regional Greenlight Program Specialist</Card.Meta>
                <Card.Description>
                  - Led analytics and insights for all Greenlight Hubs in the region using SQL and data-driven experimentation, resulting in better tracking of customer satisfaction and increased NPS to a regional average of above 60 <br />
                  - Standardized processes across the region, including consolidating Greenlights’ payments system, as well as aggregating and triaging product bugs and driver-partner feedback, further increasing customer satisfaction
                </Card.Description>
              </Card.Content>
            </Card>
          </Fade>
        </div>


    </div>
  )
}

export default Experience;


        // <Item.Group>
        //   <Item>
        //     <Item.Image size='tiny' src='https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png' />
        //     <Item.Content>
        //       <Item.Header as='a'>Fullstack Academy of Code</Item.Header>
        //       <Item.Meta>Software Engineering Teaching Fellow</Item.Meta>
        //       <Item.Description>
        //         - Provide coaching and technical instruction to 7 students as their assigned teaching fellow <br />
        //         - Support students in need of troubleshooting assistance and review of programming concepts during workshops <br />
        //         - Lead technical and behavioral admissions interviews for prospective students
        //       </Item.Description>
        //     </Item.Content>
        //   </Item>
        //   <Item>
        //     <Item.Image size='tiny' src='https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png' />
        //     <Item.Content>
        //       <Item.Header as='a'>Uber</Item.Header>
        //       <Item.Meta>Regional Greenlight Program Specialist</Item.Meta>
        //       <Item.Description>
        //         - Provide coaching and technical instruction to 7 students as their assigned teaching fellow <br />
        //         - Support students in need of troubleshooting assistance and review of programming concepts during workshops <br />
        //         - Lead technical and behavioral admissions interviews for prospective students
        //       </Item.Description>
        //     </Item.Content>
        //   </Item>
        // </Item.Group>
