import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/cart-arrow-down-solid.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="menu"></div>
      </header>
    );
  }
}

export default Header;
