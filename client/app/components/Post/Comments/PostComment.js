import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostCommentReplies from "./PostCommentReplies";

class PostComment extends Component {
	render() {
		return (
			<li className="media">
				<div className="post-comment">
					<div className="media-body">
						<h3 className="post-author">
							<a href="#">{this.props.name}<span>|</span>{this.props.date}</a>
						</h3>
						<p>{this.props.content}</p>
						<div className="reply">
							<a href="#">
								<i className="fa fa-long-arrow-left" aria-hidden="true"/>
								<span>הגב</span>
							</a>
						</div>
					</div>
				</div>
				{this.props.replies &&
					<PostCommentReplies
						replies={this.props.replies}
					/>
				}
			</li>
		);
	}
}

PostComment.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	content: PropTypes.string,
	replies: PropTypes.array
};

export default PostComment;
