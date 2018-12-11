import React, { Component } from 'react';
import Login from '../Page/Login/Login';
import ScoreBoard from '../Page/ScoreBoard/ScoreBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Login />
        <ScoreBoard teamName="Eagles"/>
      </div>
    );
  }
}

export default App;
