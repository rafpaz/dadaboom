import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TestimonialBox extends Component {
	render() {
		return (
			<div className={"item" + (this.props.active > 0 ? " active" : "")}>
				<div className="row">
					<div className="col-sm-12">
						<blockquote>
							<p>{this.props.text}</p>
						</blockquote>
						<h6>{this.props.name}</h6>
					</div>
				</div>
			</div>
		);
	}
}

TestimonialBox.propTypes = {
	text: PropTypes.string,
	name: PropTypes.string,
	active: PropTypes.number
};

TestimonialBox.defaultProps = {
	active: 0
};

export default TestimonialBox;
