import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>This is login component</h1>
        <section className="login">
          <div class="container">
            <div class="row">
              <div className="col-lg-5">
                <img src={require('../images/login.jpg')} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
