import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  SignInForm, InputEmail, InputPassword, NotMember, SignInHeader,
} from './loginStyle';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: '',
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

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        // eslint-disable-next-line react/prop-types
        const { history } = this.props;
        history.push('/console');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div className="container">
        <SignInForm className="form-signin" onSubmit={this.onSubmit}>
          {message !== ''
            && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
            )
          }
          <SignInHeader className="form-signin-heading">Please sign in</SignInHeader>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <InputEmail
            className="form-control"
            type="email"
            placeholder="Email address"
            name="username"
            value={username}
            onChange={this.onChange}
            required
          />
          <label htmlFor="login-input-pass" className="sr-only">Password</label>
          <InputPassword
            id="login-input-pass"
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <NotMember>
            Not a member?
            {' '}
            <Link to="/register">
              <span className="glyphicon glyphicon-plus-sign" aria-hidden="true" />
              {' '}
              Register here
            </Link>
          </NotMember>
        </SignInForm>
      </div>
    );
  }
}

export default Login;
