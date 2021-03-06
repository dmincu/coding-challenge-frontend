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
      itemCount: 0,
      itemList: [],
    };
    this.onMovieListClick = this.onMovieListClick.bind(this);
    this.onTvListClick = this.onTvListClick.bind(this);
  }

  componentDidMount() {
    this.onMovieListClick();
  }

  onMovieListClick() {
    MovieService.listMovies()
      .then(res => {
        let movies = res.results.map(result => {
          return {
            title: result.title,
            description: result.overview,
            score: result.vote_average,
            poster: result.poster_path,
          };
        });
        this.setState({itemList: movies, itemCount: res.total_results});
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
      this.setState({itemList: tvShows, itemCount: res.total_results});
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
                <h3>{this.state.itemCount}</h3>
            </Row>
            <Row flexGrow={1}>
                <Column flexGrow={0.7} horizontal='center'>
                {
                  this.state.itemList.map((comp, i) => 
                    <MovieCard
                        title={comp.title}
                        description={comp.description}
                        score={comp.score}
                        poster={comp.poster}
                        key={i}  />
                )}
                </Column>
                <Column flexGrow={0.3}>
                    <Row horizontal='center'>
                      <h3> Search Box </h3>
                    </Row>
                    <Row horizontal='center'>
                      <h3> Filter List </h3>
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
