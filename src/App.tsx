import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to SpaceX Land 🚀</h3>
          <p>A non official platform for SpaceX's data!</p>
          <a
            className="App-link"
            href="https://api.spacex.land"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔥 Explore the API 🔥
          </a>
        </header>
      </div>
    );
  }
}

export default App;
