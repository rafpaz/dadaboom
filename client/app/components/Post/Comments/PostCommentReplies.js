import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostCommentReplies extends Component {
	render() {
		return (
			<div>
				{ this.props.replies.map((reply, i) => (
					<div className="parrent" key={i}>
						<ul className="media-list">
							<li className="post-comment reply">
								<div className="media-body">
									<h3 className="post-author">
										<a href="#">
											{reply.name}<span>|</span>{reply.date}
										</a>
									</h3>
									<p>
										{reply.content}
									</p>
								</div>
							</li>
						</ul>
					</div>
				))}
			</div>
		);
	}
}

PostCommentReplies.propTypes = {
	replies: PropTypes.array
};

export default PostCommentReplies;
