import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className="experience-container">
      <h1> -- Experience -- </h1>
      <Card>
        <Image src='/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Fullstack Academy of Code</Card.Header>
          <Card.Meta>
            <span className='date'>Software Engineering Teaching Fellow</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <div>
        <h2>Fullstack Academy of Code</h2>
        <h3>Software Engineering Teaching Fellow</h3>
      </div>
    </div>
  )
}

export default Experience;
