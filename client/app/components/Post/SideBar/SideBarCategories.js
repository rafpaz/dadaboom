import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideBarCategories extends Component {
	render() {
		return (
			<div className="sidebar-item categories post-right">
				<h3>קטגוריות</h3>
				<ul className="nav navbar-stacked">
					<li><a href="#">הרצף האוטיסטי</a></li>
					<li className="active"><a href="#">מערכי שיעור</a></li>
					<li><a href="#">אירועים</a></li>
					<li><a href="#">עיצוב</a></li>
					<li><a href="#">פיתוח</a></li>
					<li><a href="#">תמונות</a></li>
				</ul>
			</div>
		);
	}
}

SideBarCategories.propTypes = {};

export default SideBarCategories;
