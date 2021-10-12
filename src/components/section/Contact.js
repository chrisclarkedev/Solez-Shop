import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CForm extends Component {
  render() {
    return (
      // CREATED USING BOOTSTRAP
      <div class="containter mt-5">
        <h1>Contact Us</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              required
            ></input>
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              required
            ></input>
          </div>
          <div class="col-md-8">
            <label for="emailInfo" class="form-label">
              E-mail
            </label>
            <input
              type="email"
              class="form-control"
              id="emailInfo"
              required
            ></input>
          </div>
          <div class="col-md-4">
            <label for="phoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              placeholder="(555) 555-5555"
            ></input>
          </div>
          {/* col-md-12 for full width */}
          <div class="col-md-12">
            <label for="comments" class="form-label">
              Questions, Comments?
            </label>
            <textarea
              class="form-control"
              id="comments"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="col-mid-12">
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CForm;
