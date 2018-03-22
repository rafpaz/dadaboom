import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			message: "",
			formMessageClass: "",
			formMessageText: ""
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event){
		fetch('/api/contactus', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				phone: this.state.phone,
				message: this.state.message,
				source: "Homepage"
			})
		}).then(res => res.json())
			.then(json => {
				let formMessage, formClass;
				if(json.response.indexOf("OK") >= 0){
					formMessage = "הטופס נשלח בהצלחה";
					formClass = "success";
				} else {
					formMessage = "שגיאה. ניתן ליצור קשר באמצעות המייל: boomtah@gmail.com";
					formClass = "error";
				}
				this.setState({
					name: "",
					phone: "",
					email: "",
					message: "",
					formMessageClass: formClass,
					formMessageText: formMessage
				});
			});

		event.preventDefault();
	}

	render() {
		return (
			<section className="contact-section">
				<div id="contact" className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title">
									<h1>צור קשר</h1>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div id="map" className="map"/>
							</div>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div id="form-messages" className={this.state.formMessageClass}>{this.state.formMessageText}</div>
							<div className="row">
								{/*Text Area*/}
								<div className="col-sm-6">
									<div className="row">
										<div className="col-sm-12">
                							<textarea className="form-control textarea"
											  id="message"
											  name="message"
											  value={this.state.message}
											  onChange={this.handleInputChange}
											  placeholder="תוכן ההודעה (אופציונאלי)"
											/>
										</div>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="row">
										<div className="col-sm-12">
											<div className="form-group">
												<input type="text"
													   id="name"
													   name="name" required
													   className="form-control form-input"
													   onChange={this.handleInputChange}
													   value={this.state.name}
													   placeholder="שם"/>
											</div>
											<div className="form-group input-margin-top" style={{marginBottom: 0}}>
												<input type="text"
													   className="form-control form-input"
													   name="phone"
													   placeholder="טלפון"
													   onChange={this.handleInputChange}
													   value={this.state.phone}
													   required
												/>
											</div>
											<div className="form-group input-margin-top">
												<input type="email"
													   id="email"
													   name="email"
													   className="form-control form-input"
													   placeholder="אימייל (אופציונאלי)"
													   value={this.state.email}
													   onChange={this.handleInputChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12">
									<button className="btn btn-secondary btn-lg btn-block button" type="submit">שלח</button>
								</div>
							</div>
						</form>
						{/* end form */}
					</div>
					{/* end container */}
				</div>
				{/* end overlay */}
			</section>
		);
	}
}

Contact.propTypes = {
	name: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	message: PropTypes.string,
	formMessageClass: PropTypes.string,
	formMessageText: PropTypes.string
};

export default Contact;
