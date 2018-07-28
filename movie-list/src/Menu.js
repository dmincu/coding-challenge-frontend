import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {blue500, yellow600} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import searchIcon from './resources/search-icon-white.png';
import Login, {Logged} from './Login.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './Menu.css';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  drawer: {
    width: 200,
    backgroundColor: blue500,
    textColor: yellow600,
  }
});

class Menu extends Component {

  state = {
    name: "Guest",
    open: false,
    logged: true,
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
              primaryText={this.name} />
            <MenuItem primaryText="Discover" 
              rightIcon={<img src={searchIcon} alt="search icon" />}
            />
            <MenuItem primaryText="Watched" disabled={true}  />
            <Divider />
            <MenuItem primaryText="Movies" />
            <MenuItem primaryText="Tv Shows" />
            <MenuItem primaryText="Saved" disabled={true} />
            <Divider />
            <MenuItem primaryText="Movies" />
            <MenuItem primaryText="Tv Shows" />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Menu;
