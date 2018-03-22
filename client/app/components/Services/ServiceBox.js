import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ServiceBox extends Component {
	render(){
		return (
			<div className="col-md-6 col-sm-12">
				<div className="thumbnail">
					<i className={"fa fa-2x " + this.props.icon} aria-hidden="true"/>
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

ServiceBox.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};


export default ServiceBox;
