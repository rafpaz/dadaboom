import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/landing-page.css';
import {Modal, Button} from 'react-bootstrap';
import {deviceDetect} from 'react-device-detect'
import { Redirect } from 'react-router'
import LPIcons from "./LPIcons";
import LPForm from "./LPForm";

class LandingPageKids extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			redirect: false
		};
		this.afterSubmit = this.afterSubmit.bind(this);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.setState({showModal: false});
	}

	handleShow() {
		this.setState({showModal: true});
	}

	afterSubmit(){
		this.setState({showModal: true});
		setTimeout(function () {
			this.setState({redirect: true});
		}.bind(this), 3000);
	}

	page(){
		return (
		<div id={"landing-kids"} className={"container-fluid"}>
			<div className="row">
				<div id={"lpk-left"} className="col-md-6">
					<img src="/img/landingPageKids/left.png" className={"lpk-img-responsive"}/>
				</div>
				<div id={"middle"} className="col-md-3">
					<div id={"header-text"} className="row lpk-main-color">
						<div className="container">
							<div id={"mom-dad"} className="row text-center">
								אמא, אבא
							</div>
							<div id={"did-u-know"} className="row text-center">
								<div>ידעתם שנגינה בתופים</div>
								<div>משפרת את היכולות של ילדכם</div>
								<div>ומעלה את הבטחון העצמי?</div>
							</div>
							<div id={"drum-school"} className="row text-center">
								<div>בבית הספר לתופים</div>
								<div>של צפריר ליכטנשטיין</div>
								<div>הילד שלכם יפרח!</div>
							</div>
						</div>
					</div>
					<LPForm
						afterSubmit={this.afterSubmit}
					/>
					<div id="icons" className="row">
						<div className="container">
							<div className="col-centered">
								<LPIcons
									text={"מיקום מעולה במרכז השכונה"}
									url={"v1521703609/Location.svg"}
								/>
								<LPIcons
									text={"לימוד תופים מחזק ביטחון עצמי"}
									url={"v1521703609/Smiley.svg"}
								/>
								<LPIcons
									text={"תחליף לחוגים ופעילות חברתית"}
									url={"v1521703609/football.svg"}
								/>
							</div>
						</div>
					</div>
				</div>
				<div id={"lpk-right"} className="col-md-3">
					<img src="/img/landingPageKids/right.png" className={"lpk-img-responsive"}/>
				</div>
			</div>
			<Modal id="lpk-modal" show={this.state.showModal} onHide={this.handleClose}>
				<Modal.Body>
					<p>הטופס נשלח בהצלחה!</p>
					<p>הנכם מועברים לאתר שלי...</p>
				</Modal.Body>
			</Modal>
		</div>
		);}

	render() {
		return (
			!this.state.redirect ? this.page() : <Redirect to={"/"}/>
		);
	}
}

LandingPageKids.propTypes = {};

export default LandingPageKids;
