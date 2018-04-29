import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SideBarSearch extends Component {
	render() {
		return (
			<div className="sidebar-item search">
				<div className="input-group">
					<span className="input-group-btn">
						<button className="btn btn-primary" type="button">
							<span className="glyphicon glyphicon-search"/>
						</button>
					</span>
					<input type="text" className="form-control post-right" placeholder="חיפוש"/>
				</div>
			</div>
		);
	}
}

SideBarSearch.propTypes = {};

export default SideBarSearch;
