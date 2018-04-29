import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideBarSearch from "./SideBarSearch";
import SideBarLatest from "./SideBarLatest";
import SideBarCategories from "./SideBarCategories";
import SideBarTagCloud from "./SideBarTagCloud";

class PostSidebar extends Component {
	render() {
		return (
			<div className="col-md-3 col-sm-12">
				<div className="sidebar blog-sidebar">
					<SideBarSearch/>
					<SideBarLatest/>
					<SideBarCategories />
					<SideBarTagCloud />
				</div>
			</div>
		);
	}
}

PostSidebar.propTypes = {};

export default PostSidebar;
