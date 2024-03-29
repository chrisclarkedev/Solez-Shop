import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Products from './section/Products';
import Details from './section/Details';
import Cart from './section/Cart';
import Payment from './section/Payment';
import Home from './section/Home';
import Contact from './section/Contact';
import Login from './section/Login';
import Info from './section/Info';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Products} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/info" component={Info} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
      </section>
    );
  }
}

export default Section;
