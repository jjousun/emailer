import React, { Component } from 'react';
import './App.css';
import Form from './form.js';
import Tabber from './tabber.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Emailer</h1>
        </header>
        <Tabber>
        </Tabber>
      </div>
    );
  }
}

export default App;
