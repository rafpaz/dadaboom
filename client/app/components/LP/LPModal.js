import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'react-bootstrap';

class LPModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.showModal
		};
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillReceiveProps(newProps) {
		this.setState({showModal: newProps.showModal});
	}

	handleClose() {
		this.setState({showModal: false});
	}

	handleShow() {
		this.setState({showModal: true});
	}

	render() {
		return (
			<Modal id="lpk-modal" show={this.state.showModal} onHide={this.handleClose}>
				<Modal.Body>
					<p>הטופס נשלח בהצלחה!</p>
					<p>הנכם מועברים לאתר שלי...</p>
				</Modal.Body>
			</Modal>
		);
	}
}

LPModal.propTypes = {};

export default LPModal;
