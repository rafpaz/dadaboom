import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostText from "./PostText";
import PostComments from "./Comments/PostComments";
import PostLeaveComment from "./Comments/PostLeaveComment";

class PostContent extends Component {
	render() {
		return (
			<div className="post-content post-right">
				<h2 className="post-title">{this.props.title}</h2>
				<h3 className="post-author">
					<div>{this.props.date}</div>
				</h3>
				<PostText/>
				<PostComments/>
				<PostLeaveComment/>
			</div>
		);
	}
}

PostContent.propTypes = {};

export default PostContent;
