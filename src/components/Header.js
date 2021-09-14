import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/cart-arrow-down-solid.svg';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="menu">
          <img src={Menu} alt="" width="20"></img>
        </div>
        <div className="logo">
          <h1>
            <Link to="/">SOLEZ</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Login / Register</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
