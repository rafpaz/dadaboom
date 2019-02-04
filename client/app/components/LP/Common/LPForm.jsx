import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from './LPFromStyle';

class LPForm extends Component {
  state = {
    name: '',
    phone: '',
    loading: false,
  };

  static propTypes = {
    buttonText1: PropTypes.string.isRequired,
    buttonText2: PropTypes.string.isRequired,
    backgroundClass: PropTypes.string.isRequired,
    textClass: PropTypes.string.isRequired,
    afterSubmit: PropTypes.func.isRequired,
    source: PropTypes.string.isRequired,
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, phone } = this.state;
    const { source } = this.props;
    await axios.post('/api/contactus', {
      name,
      phone,
      source,
    });
    this.setState({
      name: '',
      phone: '',
      loading: false,
    });
    const { afterSubmit } = this.props;
    afterSubmit();
  };

  render() {
    const {
      backgroundClass, textClass, buttonText1, buttonText2,
    } = this.props;
    const { name, phone, loading } = this.state;
    return (
      <div id="form" className="row">
        <div id="form-container" className={`container ${backgroundClass}`}>
          <div id="form-header" className={textClass}>
            <div>
              להזמנת שיעור תופים
              <br />
              אצל צפריר
              <b> חייגו עכשיו</b>
            </div>
          </div>
          <div id="form-number" className={textClass}>
            054-7883383

          </div>
          <div id="form-details" className={textClass}>
            או השאירו פרטים:

          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-control form-input text-center form-input-text-size"
                onChange={this.handleInputChange}
                value={name}
                placeholder="שם מלא"
              />
            </div>
            <div className="form-group input-margin-top" style={{ marginBottom: 0 }}>
              <input
                type="text"
                className="form-control form-input text-center form-input-text-size direction-ltr"
                name="phone"
                placeholder="טלפון"
                onChange={this.handleInputChange}
                value={phone}
                required
              />
            </div>
            <button id="submit" type="submit" className="lpk-main-color">
              {!loading && (
                <div id="submit-text">
                  <div>{buttonText1}</div>
                  <div>{buttonText2}</div>
                </div>
              )}
              {loading && <Loader />}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LPForm;
