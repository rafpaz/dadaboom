import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LPForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			phone: "",
			loading: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({[name]: value});
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
				this.props.afterSubmit();
			});
		event.preventDefault();
	}

	render() {
		return (
			<div id={"form"} className="row lpk-main-color">
				<div id={"form-container"} className={"container lpk-main-bg-color"}>
					<div id="form-header" className={"white-header"}>
						<div>
							להזמנת שיעור תופים<br/>
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
							<input type="text" id="name" name="name" required
								   className="form-control form-input text-center form-input-text-size"
								   onChange={this.handleInputChange} value={this.state.name}
								   placeholder="שם מלא"/>
						</div>
						<div className="form-group input-margin-top" style={{marginBottom: 0}}>
							<input type="text"
								   className="form-control form-input text-center form-input-text-size direction-ltr"
								   name="phone" placeholder="טלפון" onChange={this.handleInputChange}
								   value={this.state.phone} required/>
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
							{this.state.loading && <div className="lpk-loader"/>}
						</button>
					</form>
				</div>
			</div>
		);
	}
}

LPForm.propTypes = {};

export default LPForm;

