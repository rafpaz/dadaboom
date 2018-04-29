import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PostLeaveComment extends Component {
	render() {
		return (
			<div className="leave-area">
				<h2>השאירו תגובה</h2>
				<form className="form-border" method="post" action="#">
					<div className="row">
						<div className="col-sm-12">
							<div className="row">
								<div className="col-sm-6">
									<div className="form-group">
										<input type="text" name="name" required
											   className="form-control form-input"
											   placeholder="שם"/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<input type="text" name="email" required
											   className="form-control form-input"
											   placeholder="אימייל"/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12">
								<textarea className="form-control textarea"
										  name="message"
										  required
										  placeholder="התגובה שלך"/>
						</div>
						<div className="col-sm-12">
							<button
								className="btn btn-secondary btn-lg btn-block button"
								type="submit">הגב
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

PostLeaveComment.propTypes = {};

export default PostLeaveComment;
