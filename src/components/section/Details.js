import React, { Component } from 'react';
import { DataContext } from '../Context';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import '../styles/Details.css';

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addtoCart } = this.context;
    return (
      <>
        {product.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row2">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.Brand}</p>
              <p>{item.Description}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addtoCart(item._id)}
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
