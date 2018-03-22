import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';
import _ from 'lodash';


var navArray = [];
navArray.push({target: "page-top", name: "בית"});
navArray.push({ target: "about", name: "אודות" });
navArray.push({ target: "services", name: "שירותים" });
navArray.push({ target: "portfolio", name: "גלריה" });
navArray.push({ target: "blogs", name: "בלוג" });
navArray.push({ target: "contact", name: "צור קשר" });

class NavigationItems extends Component {
	constructor(props){
		super(props);
		if (!isMobile) {
			navArray = _.reverse(navArray);
		}
		this.state = { navArray };
	}

	render() {
		const items = this.state.navArray.map((item) => {
				return <li key={item.target}>
							<a href={"#"+ item.target} className="section-link" data-target={"\"" + item.target + "\""}>{item.name}</a>
						</li>;
			});
		return (
			<ul className="nav navbar-nav nav-list navbar-right">
				{items}
			</ul>
		);
	}
}

NavigationItems.propTypes = {};

export default NavigationItems;
