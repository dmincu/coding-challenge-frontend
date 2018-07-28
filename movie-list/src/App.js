import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logo from './resources/logo.svg';
import Menu from './Menu.js';
import MovieService from './service.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
      <div>{MovieService.listGenres}</div>
    );
  }
}

export default App;
