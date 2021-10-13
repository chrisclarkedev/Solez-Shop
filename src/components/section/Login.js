import React, { Component } from 'react';
import '../styles/Login.css';

export class Login extends Component {
  render() {
    return (
      <section class="login py-5 bg-light">
        <div class="container">
          <div class="row3 g-0">
            <div className="col-lg-5">
              <img
                src={require('../images/login.jpg')}
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
