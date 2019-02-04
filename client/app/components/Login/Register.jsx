import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { state } = this;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then(() => {
        // eslint-disable-next-line react/prop-types
        const { history } = this.props;
        history.push('/login');
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <label
            htmlFor="register-email-input"
            className="sr-only"
          >
            Email address
          </label>
          <input
            id="register-email-input"
            type="email"
            className="form-control"
            placeholder="Email address"
            name="username"
            value={username}
            onChange={this.onChange}
            required
          />
          <label htmlFor="input-password-register" className="sr-only">Password</label>
          <input
            id="input-password-register"
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
