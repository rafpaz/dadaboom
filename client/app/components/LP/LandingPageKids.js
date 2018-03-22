import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../styles/landing-page.css';
import {Modal, Button} from 'react-bootstrap';
import {deviceDetect} from 'react-device-detect'

class LandingPageKids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            loading: false,
            show: true
        };
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleShow = this
            .handleShow
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleSubmit(event) {
        this.setState({loading: true});
        fetch('/api/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({name: this.state.name, phone: this.state.phone, source: "Landing Page Kids"})
            })
            .then(res => res.json())
            .then(json => {
                this.setState({name: "", phone: "", loading: false});
            });
        event.preventDefault();
    }

    render() {
        return <div id={"landing-kids"} className={"container-fluid"}>
				<div className="row">
					<div id={"lpk-left"} className="col-md-6">
						<img src="/img/landingPageKids/left.png" className={"lpk-img-responsive"} />
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
						<div id={"form"} className="row lpk-main-color">
							<div id={"form-container"} className={"container lpk-main-bg-color"}>
								<div id="form-header" className={"white-header"}>
									<div>
										להזמנת שיעור תופים<br />
										אצל צפריר
										<b> חייגו עכשיו</b>
									</div>
								</div>
								<div id="form-number" className={"white-header"}>
									054-7883383
								</div>
								<div id="form-details" className={"white-header"}>
									או השאירו פרטים:
								</div>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<input type="text" id="name" name="name" required className="form-control form-input text-center form-input-text-size" onChange={this.handleInputChange} value={this.state.name} placeholder="שם מלא" />
									</div>
									<div className="form-group input-margin-top" style={{ marginBottom: 0 }}>
										<input type="text" className="form-control form-input text-center form-input-text-size" name="phone" placeholder="טלפון" onChange={this.handleInputChange} value={this.state.phone} required />
									</div>
									<button id="submit" type="submit" className={"lpk-main-color"}>
										{!this.state.loading && <div id="submit-text">
												<div>
													כן, גם אני רוצה
												</div>
												<div>
													לשפר את היכולות של
													ילדי
												</div>
											</div>}
										{this.state.loading && <div className="lpk-loader" />}
									</button>
								</form>
							</div>
						</div>
						<div id="icons" className="row">
							<div className="col-centered">
								<div className="col-sm-4">
									<img src="https://res.cloudinary.com/dadaboom/image/upload/v1521703609/Location.svg" className="img-responsive" />
									<div className="text-center">
										<span>
											מיקום מעולה במרכז השכונה
										</span>
									</div>
								</div>
								<div className="col-sm-4">
									<img src="https://res.cloudinary.com/dadaboom/image/upload/v1521703609/Smiley.svg" className="img-responsive" />
									<div className="text-center">
										<span>
											לימוד תופים מחזק ביטחון עצמי
										</span>
									</div>
								</div>
								<div className="col-sm-4">
									<img src="https://res.cloudinary.com/dadaboom/image/upload/v1521703609/football.svg" className="img-responsive" />
									<span>
										תחליף לחוגים ופעילות חברתית
									</span>
								</div>
							</div>
						</div>
					</div>
					<div id={"lpk-right"} className="col-md-3">
						<img src="/img/landingPageKids/right.png" className={"lpk-img-responsive"} />
					</div>
				</div>
				<Modal id="lpk-modal" show={this.state.show} onHide={this.handleClose}>
					<Modal.Body>
						<p>הטופס נשלח בהצלחה!</p>
						<p>הנכם מועברים לאתר שלי...</p>
					</Modal.Body>
				</Modal>
			</div>;
    }
}

LandingPageKids.propTypes = {};

export default LandingPageKids;
