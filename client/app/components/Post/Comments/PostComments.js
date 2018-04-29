import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostComment from "./PostComment";
import commentsData from "./commentsData";

class PostComments extends Component {
	render() {
		console.log(commentsData);
		return (
			<div className="comments-area">
				<h2>תגובות</h2>
				<ul className="media-list">
					<PostComment
						name={"רפאל פז"}
						date={"28 באוגוסט 2017"}
						content={commentsData.firstCommentContent}
						replies={commentsData.replies}
					/>
					<PostComment
						name={"דויד לוי"}
						date={"29 באוגוסט 2017"}
						content={commentsData.secondCommentContent}
					/>
				</ul>
			</div>
		);
	}
}

PostComments.propTypes = {};

export default PostComments;
