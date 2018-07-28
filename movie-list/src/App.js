import React, { Component } from 'react';
import Menu from './Menu.js';
import MovieService from './service.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div>{MovieService.getGenres}</div>
      </div>
    );
  }
}

export default App;
