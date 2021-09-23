import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../styles/Details.css';

export class Cart extends Component {
  static contextType = DataContext;

  render() {
    const { cart, increase, reduction, removeProduct } = this.context;
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
              <div className="amount">
                <button className="count" onClick={() => reduction(item._id)}>
                  {' '}
                  -{' '}
                </button>
                <span>{item.count}</span>
                <button className="count" onClick={() => increase(item._id)}>
                  {' '}
                  +{' '}
                </button>
              </div>
            </div>
            <div className="delete" onClick={() => removeProduct(item._id)}>
              X
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default Cart;
