import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import reverse from 'lodash/reverse';
import FacebookNav from './FacebookNav';
import ItemNav from './ItemNav';

class NavigationItems extends Component {
  static prepareNavigationArray() {
    const navArray = [];
    navArray.push({ target: 'page-top', name: 'בית' });
    navArray.push({ target: 'about', name: 'אודות' });
    navArray.push({ target: 'services', name: 'שירותים' });
    navArray.push({ target: 'portfolio', name: 'גלריה' });
    navArray.push({ target: 'blogs', name: 'בלוג' });
    navArray.push({ target: 'contact-section-id', name: 'צור קשר' });
    navArray.push({ target: 'facebook', name: 'facebook' });
    return isMobile ? navArray : reverse(navArray);
  }

  componentWillMount() {
    const navArray = NavigationItems.prepareNavigationArray();
    this.setState({
      navArray,
    });
  }

  render() {
    const { navArray } = this.state;
    const facebookLink = 'https://www.facebook.com/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8-%D7%9C%D7%99%D7%9B%D7%98%D7%A0%D7'
      + '%A9%D7%98%D7%99%D7%99%D7%9F-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%AA%D7%95%D7%A4%D7%99%D7%9D-%D7%95%D7%9B%D7%9C'
      + '%D7%99-%D7%94%D7%A7%D7%A9%D7%94-365617346882919/';
    const items = navArray.map((item) => {
      if (item.target === 'facebook') {
        return (
          <FacebookNav
            facebookLink={facebookLink}
            key="nav-facebook"
          />
        );
      }
      return (
        <ItemNav
          item={item}
          key={item.target}
        />
      );
    });
    return (
      <ul className="nav navbar-nav nav-list navbar-right">
        {items}
      </ul>
    );
  }
}

export default NavigationItems;
