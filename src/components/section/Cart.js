import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../styles/Details.css';

export class Cart extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;
    return (
      <>
        {cart.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>{item.price}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.Brand}</p>
              <p>{item.Description}</p>
              <Link to="/cart" className="cart">
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default Cart;
