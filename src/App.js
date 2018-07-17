import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Intro from './Intro';
import Experience from './Experience';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Intro />
        <Experience />
      </div>
    );
  }
}

export default App;
