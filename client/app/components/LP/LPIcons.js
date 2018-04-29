import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LPIcons extends Component {
	render() {
		return (
			<div className="col-xs-4 thin-margin">
				<img src={"https://res.cloudinary.com/dadaboom/image/upload/" + this.props.url}
					 className="img-responsive"/>
				<div className="text-center">
					<span>
						{this.props.text}
					</span>
				</div>
			</div>
		);
	}
}

LPIcons.propTypes = {
	text: PropTypes.string,
	url: PropTypes.string,
};

export default LPIcons;
