import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterBox extends Component {
	render() {
		return (
			<div className="col-md-3 col-sm-6 col-xs-6">
				<div className="project-single" id={this.props.id}>
					<div className="number" data-from="0" data-to={this.props.to} data-speed="6000"
						 data-refresh-interval="100">
						{this.props.to}
					</div>
					<h5>{this.props.text}</h5>
				</div>
			</div>
		);
	}
}

CounterBox.propTypes = {
	to: PropTypes.string,
	text: PropTypes.string,
	id: PropTypes.string
};

export default CounterBox;
