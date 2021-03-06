import React, { Component } from 'react';
import './App.css';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import Landing from './Landing';
import Intro from './Intro';
import Experience from './Experience';
import Projects from './Projects';
import OtherInterests from './OtherInterests';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing />
        <div className='ScrollUpButton'>
          <ScrollUpButton />
        </div>
        <Intro />
        <OtherInterests />
        <Projects />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default App;
