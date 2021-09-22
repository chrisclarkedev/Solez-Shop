import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import '../styles/Products.css';

export class Products extends Component {
  static contextType = DataContext;
  render() {
    const { products } = this.context;
    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              {/* Display Price of product, description and add to cart button */}
              <span>{product.price}</span>
              <p>{product.Description}</p>
              <button onClick={() => this.context.addtoCart(product._id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
