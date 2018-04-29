import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './landing-page-kids.css';
import {isMobile} from 'react-device-detect';
import {Redirect} from 'react-router';
import LPModal from "./LPModal";
import {Image} from "cloudinary-react";
import LPContent from "./LPContent";

class LandingPageKids extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			redirect: false
		};
		this.afterSubmit = this.afterSubmit.bind(this);
	}

	afterSubmit() {
		this.setState({showModal: true});
		setTimeout(function () {
			this.setState({redirect: true});
		}.bind(this), 3000);
	}

	desktopPage() {
		return (
			<div id={"landing-kids"} className={"container-fluid"}>
				<div className="row">
					<div id={"lpk-left"} className="col-md-6">
						<Image
							cloudName="dadaboom"
							publicId="LandingPageKids/left.png"
							className={"lpk-img-responsive"}
						/>
					</div>
					<LPContent
						afterSubmit={this.afterSubmit}
					/>
					<div id={"lpk-right"} className="col-md-3">
						<Image
							cloudName="dadaboom"
							publicId="LandingPageKids/right.png"
							className={"lpk-img-responsive"}
						/>
					</div>
				</div>
				<LPModal
					showModal={this.state.showModal}
				/>
			</div>
		);
	}

	mobilePage() {
		return (
			<div id={"landing-kids"} className={"container-fluid"}>
				<div id={"lpk-left"} className="col-md-3">
					<Image
						cloudName="dadaboom"
						publicId="Branding/logo.png"
						className={"img-responsive center-img"}
					/>
				</div>
				<LPContent
					afterSubmit={this.afterSubmit}
				/>
				<div id={"lpk-right"} className="col-md-3">
					<Image
						cloudName="dadaboom"
						publicId="LandingPageKids/kid.png"
						className={"img-responsive center-img"}
					/>
				</div>
				<LPModal
					showModal={this.state.showModal}
				/>
			</div>
		);
	}

	page() {
		return isMobile ? this.mobilePage() : this.desktopPage();
	}

	render() {
		return (
			!this.state.redirect ? this.page() : <Redirect to={"/"}/>
		);
	}
}

LandingPageKids.propTypes = {};

export default LandingPageKids;
