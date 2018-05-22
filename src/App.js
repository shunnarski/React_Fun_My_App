import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DrinkStand } from './DrinkStand.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Drink Stand</h1>
        </header>
        <DrinkStand />

      </div>
    );
  }
}

export default App;
