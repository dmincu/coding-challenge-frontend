import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import searchIcon from './resources/search-icon-white.png';
import arrowDownIcon from './resources/arrow-down.svg';
import Login, {Logged} from './Login.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './Menu.css';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  }
});

class Menu extends Component {

  state = {
    name: "Diana",
    open: false,
    logged: false,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
          />
          <Drawer
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} >
            <MenuItem
              onClick={this.handleToggle}
              primaryText={this.state.logged ? this.name : 'Guest'}
              rightIcon={<img src={arrowDownIcon} alt="arrow down icon" />}
            />
            <MenuItem primaryText="Discover"
              onClick={this.props.onMovieListClick}
              rightIcon={<img src={searchIcon}
              alt="search icon" />}
            />
            <MenuItem primaryText="Watched" disabled={true}  />
            <Divider />
            <MenuItem primaryText="Movies" onClick={this.props.onMovieListClick} />
            <MenuItem primaryText="Tv Shows" onClick={this.props.onTvListClick} />
            <MenuItem primaryText="Saved" disabled={true} />
            <Divider />
            <MenuItem primaryText="Movies" onClick={this.props.onMovieListClick} />
            <MenuItem primaryText="Tv Shows" onClick={this.props.onTvListClick} />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Menu;
