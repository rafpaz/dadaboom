import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './LP.css';
import {Image, Transformation} from "cloudinary-react";
import LPForm from "./LPForm";
import LPModal from "./LPModal";
import {isMobile} from "react-device-detect";
import {Redirect} from 'react-router';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			redirect: false
		};
		this.afterSubmit = this.afterSubmit.bind(this);
	}

	afterSubmit() {
		this.setState({ showModal: true });
		setTimeout(
			function() {
				this.setState({ redirect: true });
			}.bind(this),
			3000
		);
	}

	page() {
		return isMobile ? this.mobilePage() : this.desktopPage();
	}

	desktopPage() {
		return (
			<div id={"background"}>
				<div className="container-fluid">
					<div className="col-md-2" />
					<div className="col-md-3">
						<div id={"lp-header-container"}>
							<Image
								id={"lp-header-img"}
								cloudName="dadaboom"
								publicId="logo_yellow.png"
								className={"img-responsive"}
							/>
						</div>
						<div className={"lp-text text-center"}>
							<div id={"lp-dream"}>גם לך יש חלום ילדות</div>
							<div id={"lp-drums"}>לנגן בתופים?</div>
							<div id={"lp-school"}>
								בבית הספר לתופים של צפריר ליכטנשטיין מגשימים לך
								חלום ובגדול!
							</div>
						</div>
						<LPForm
							afterSubmit={this.afterSubmit}
							backgroundClass={"lp-form-background"}
							textClass={"black-header"}
							buttonText1={"כן, גם אני רוצה"}
							buttonText2={"להגשים חלום אצל צפריר"}
							source={"Landing Page Adults"}
						/>
					</div>
					<div className="col-md-7" />
					<LPModal showModal={this.state.showModal} />
				</div>
			</div>
		);
	}

	mobilePage() {
		return (
			<div id={"mobile-background"} className={"lp-main-bg-color"}>
				<div className="container-fluid">
					<div className="col-md-2" />
					<div className="col-md-3">
						<Image
							id={"lp-header-img"}
							cloudName="dadaboom"
							publicId="logo_yellow.png"
							className={"img-responsive"}
						/>
						<div className={"lp-text text-center"}>
							<div id={"lp-dream"}>גם לך יש חלום ילדות</div>
							<div id={"lp-drums"}>לנגן בתופים?</div>
							<div id={"lp-school"}>
								בבית הספר לתופים של צפריר ליכטנשטיין מגשימים לך
								חלום ובגדול!
							</div>
						</div>
						<LPForm
							afterSubmit={this.afterSubmit}
							backgroundClass={"lp-form-background"}
							textClass={"black-header"}
							buttonText1={"כן, גם אני רוצה"}
							buttonText2={"להגשים חלום אצל צפריר"}
							source={"Landing Page Adults"}
						/>
					</div>
					<div className="col-md-7">
						<Image publicId="Cover/5.jpg"
							   cloudName="dadaboom"
							   className={"img-responsive"}>
							<Transformation quality="auto:good" />
						</Image>
					</div>
					<LPModal showModal={this.state.showModal} />
				</div>
			</div>
		);
	}


	render() {
		return !this.state.redirect ? this.page() : <Redirect to={"/"} />;
	}
}

LandingPage.propTypes = {};

export default LandingPage;
