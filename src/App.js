import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';
import Landing from './Landing';
import Navbar from './Navbar';
import Intro from './Intro';
import Experience from './Experience';
import Projects from './Projects';
import OtherInterests from './OtherInterests';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing />
        <ScrollUpButton />
        <Intro />
        <Experience />
        <Projects />
        <OtherInterests />
      </div>
    );
  }
}

export default App;
