import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideBarLatest extends Component {
	render() {
		return (
			<div className="sidebar-item latest">
				<h3>פוסטים אחרונים</h3>
				<div className="media post-right">
					<div className="image pull-right">
						<a href="#"><img src="img/blogs/b1.jpg" alt="image"/></a>
					</div>
					<div className="media-body">
						<h4><a href="#">4 סודות למתופף המתחיל</a></h4>
						<p>28 באוגוסט 2017</p>
					</div>
				</div>
				<div className="media post-right">
					<div className="pull-right">
						<a href="#"><img src="img/blogs/b2.jpg" alt="image"/></a>
					</div>
					<div className="media-body">
						<h4><a href="#">עבודה עם הרצף האוטיסטי</a></h4>
						<p>02 באוקטובר 2017</p>
					</div>
				</div>
				<div className="media post-right">
					<div className="pull-right">
						<a href="#"><img src="img/blogs/b3.jpg" alt="image"/></a>
					</div>
					<div className="media-body">
						<h4><a href="#">מערכי שיעור</a></h4>
						<p>12 בדצמבר 2017</p>
					</div>
				</div>
			</div>
		);
	}
}

SideBarLatest.propTypes = {};

export default SideBarLatest;
