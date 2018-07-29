import React, { Component } from 'react';
import Menu from './Menu.js';
import MovieCard from './MovieCard';
import MovieService from './service.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Column, Row } from 'simple-flexbox';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movieCount: 0,
      movieList: [],
      tvShows: [],
    };
    this.onMovieListClick = this.onMovieListClick.bind(this);
    this.onTvListClick = this.onTvListClick.bind(this);
    this.getMovieCount = this.getMovieCount.bind(this);
  }

  onMovieListClick() {
    fetch(MovieService.listMovies())
      .then(res => {return res.json();})
      .then(res => {
        let movies = res.results.map(result => {
          return {
            title: result.title,
            description: result.overview,
            score: result.vote_average,
            poster: result.poster_path,
          };
        });
        this.setState({movieList: movies});
      });
    this.forceUpdate();
  }

  onTvListClick() {
    MovieService.listTvShows().then(res => {
      let tvShows = res.results.map(result => {
        return {
          title: result.title,
          description: result.overview,
          score: result.vote_average,
          poster: result.poster_path,
        };
      });
      this.setState({tvShows: tvShows});
    });
    this.forceUpdate();
  }

  getMovieCount() {
    fetch(MovieService.listMovies())
      .then(res => {res.json();})
      .then(res => {
        console.log(res.total_pages);
        this.setState({movieCount: res.total_pages});
      });
    this.forceUpdate();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Menu
            onMovieListClick={this.onMovieListClick}
            onTvListClick={this.onTvListClick} />
          <Column flexGrow={1}>
            <Row>
                <h3>{this.state.movieCount}</h3>
            </Row>
            <Row flexGrow={1}>
                <Column flexGrow={1} horizontal='center'>
                    <h3> Column 1 </h3>
                    <span> column 1 content </span>
                </Column>
                <Column flexGrow={1} vertical='center'>
                    <Row horizontal='center'>
                      <h3> Column 2 </h3>
                      <span> column 2 content </span>
                    </Row>
                    <Row horizontal='center'>
                      <h3> Column 2 </h3>
                      <span> column 2 content </span>
                    </Row>
                </Column>
            </Row>
          </Column>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
