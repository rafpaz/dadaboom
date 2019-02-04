import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import WelcomeArea from './WelcomeArea';
import Plugins from '../Home/plugins';

class Header extends Component {
  componentDidMount() {
    Plugins.handlePreloader();
  }

  render() {
    return (
      <header className="header" id="intro">
        <div className="overlay">
          <NavigationBar />
          <WelcomeArea />
        </div>
      </header>
    );
  }
}

export default Header;
