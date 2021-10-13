import React, { Component } from 'react';
import '../styles/Login.css';

export class Login extends Component {
  render() {
    return (
      <>
        <section class="login py-5 bg-light">
          <div class="container">
            <div class="row g-0">
              <div class="col-lg-5">
                <img
                  src="https://i.ibb.co/zm1LtqQ/login.jpg"
                  class="img-fluid"
                  alt=""
                ></img>
              </div>
              <div class="col-lg-7 text-center py-5">
                <h1>LOGIN</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
