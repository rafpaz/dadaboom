import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideBarTagCloud extends Component {
	render() {
		return (
			<div className="sidebar-item tag-cloud post-right">
				<h3>תגיות</h3>
				<ul className="nav nav-pills">
					<li><a href="#">תופים</a></li>
					<li><a href="#">מוזיקה</a></li>
					<li><a href="#">כלי נגינה</a></li>
					<li><a href="#">כלי הקשה</a></li>
					<li><a href="#">אוטיזם</a></li>
					<li><a href="#">שיעורים</a></li>
					<li><a href="#">פעילות</a></li>
					<li><a href="#">רצף אוטיסטי</a></li>
					<li><a href="#">מערכי שיעור</a></li>
					<li><a href="#">עיצוב</a></li>
					<li><a href="#">תמונות</a></li>
					<li><a href="#">וידאו</a></li>
				</ul>
			</div>
		);
	}
}

SideBarTagCloud.propTypes = {};

export default SideBarTagCloud;
