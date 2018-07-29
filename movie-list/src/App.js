import React, { Component } from 'react';
import Menu from './Menu.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MovieService from './service.js';
import './App.css';

class App extends Component {

  onMovieListClick = () => {
    MovieService.listMovies();
  }

  onTvListClick = () => {
    MovieService.listTvShows();
  }

  render() {
    return (
      <div className="App">
        <Menu
          onMovieListClick={this.onMovieListClick}
          onTvListClick={this.onTvListClick} />
      </div>
    );
  }
}

export default App;
