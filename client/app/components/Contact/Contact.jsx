import React, { Component } from 'react';
import axios from 'axios';
import pick from 'lodash/pick';
import MapWithAMakredInfoWindow from './Map';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    formMessageClass: '',
    formMessageText: '',
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { source: 'hompage', ...pick(this.state, ['name', 'email', 'phone', 'message']) };
    axios.post('/api/contactus', data).then((response) => {
      let formMessage; let
        formClass;
      if (response.status === 200) {
        formMessage = 'הטופס נשלח בהצלחה';
        formClass = 'success';
      } else {
        formMessage = 'שגיאה. ניתן ליצור קשר באמצעות המייל: boomtah@gmail.com';
        formClass = 'error';
      }
      this.setState({
        name: '',
        phone: '',
        email: '',
        message: '',
        formMessageClass: formClass,
        formMessageText: formMessage,
      });
    });
  };

  render() {
    const {
      formMessageClass, formMessageText, message, name, phone, email,
    } = this.state;
    return (
      <section className="contact-section" id="contact-section-id">
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
              <div className="col-sm-12" style={{ height: '410px', width: '100%' }}>
                <MapWithAMakredInfoWindow
                  googleMapURL={'https://maps.googleapis.com/maps/api/js?'
                  + 'key=AIzaSyAwWfMRMTV4Gifrym8XPE5HLOKdmW7vl1U&libraries=places&language=he&region=IL'}
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '400px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div id="form-messages" className={formMessageClass}>{formMessageText}</div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control textarea"
                        id="message"
                        name="message"
                        value={message}
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
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="form-control form-input"
                          onChange={this.handleInputChange}
                          value={name}
                          placeholder="שם"
                        />
                      </div>
                      <div className="form-group input-margin-top" style={{ marginBottom: 0 }}>
                        <input
                          type="text"
                          className="form-control form-input"
                          name="phone"
                          placeholder="טלפון"
                          onChange={this.handleInputChange}
                          value={phone}
                          required
                        />
                      </div>
                      <div className="form-group input-margin-top">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-input"
                          placeholder="אימייל (אופציונאלי)"
                          value={email}
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
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
