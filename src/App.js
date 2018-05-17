import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DrinkForm } from './DrinkForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Fun</h1>
        </header>
        <DrinkForm />

      </div>
    );
  }
}

export default App;
