import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import Navbar from './Navbar';
import Intro from './Intro';
import Experience from './Experience';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Landing />
        <Intro />
        <Experience />
      </div>
    );
  }
}

export default App;
