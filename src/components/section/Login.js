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
                <h1>Login / Register</h1>
                <form>
                  <div className="form-row py-2 pt-5">
                    <div className="offset-1 col-lg-10">
                      <input
                        type="text"
                        class="inp px-3"
                        placeholder="Email or Username"
                      ></input>
                    </div>
                  </div>
                  <div className="form-row py-2">
                    <div className="offset-1 col-lg-10">
                      <input
                        type="password"
                        class="inp px-3"
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div className="form-row py-3">
                    <div className="offset-1 col-lg-10">
                      <button class="btn1">Login</button>
                    </div>
                  </div>
                </form>
                <u>Or Register</u>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
