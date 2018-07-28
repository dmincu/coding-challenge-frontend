import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
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
        <AppBar
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Drawer
          className="menu-header"
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})} >
          <MenuItem
            primaryText={this.name} />
          <MenuItem primaryText="Discover" 
            rightIcon={<img src={searchIcon} />}
          />
          <MenuItem primaryText="Watched" disabled="true"  />
          <Divider />
          <MenuItem primaryText="Movies" />
          <MenuItem primaryText="Tv Shows" />
          <MenuItem primaryText="Saved" disabled="true" />
          <Divider />
          <MenuItem primaryText="Movies" />
          <MenuItem primaryText="Tv Shows" />
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default Menu;
