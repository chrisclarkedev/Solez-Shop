import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'Sneaker 01',
        src: 'https://i.ibb.co/16dbK5k/1.jpg',
        Description: 'Testing Testing 123',
        Brand: 'This is where brand goes for this product',
        price: '90',
        colors: ['black', 'white'],
        count: 1,
      },
      {
        _id: '2',
        title: 'Sneaker 02',
        src: 'https://i.ibb.co/5Rn8h6L/nmd-r1black.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '75',
        colors: ['black', 'red'],
        count: 1,
      },
      {
        _id: '3',
        title: 'Sneaker 03',
        src: 'https://i.ibb.co/qJ1BsMS/3.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Nike',
        price: '110',
        colors: ['white', 'grey', 'yellowgreen'],
        count: 1,
      },
      {
        _id: '4',
        title: 'Sneaker 04',
        src: 'https://i.ibb.co/BPSD3R9/stan-smith.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '65',
        colors: ['white', 'green'],
        count: 1,
      },
      {
        _id: '5',
        title: 'Sneaker 05',
        src: 'https://i.ibb.co/k82Tbf5/5.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Nike',
        price: '125',
        colors: ['black', 'blue', 'white'],
        count: 1,
      },
      {
        _id: '6',
        title: 'Sneaker 06',
        src: 'https://i.ibb.co/7Kjw8Fj/ultraboost-dna.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '85',
        colors: ['black', 'blue'],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addtoCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert('This product has been added to the cart already.');
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm('Do you want to remove this product from the cart?')) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  render() {
    const { products, cart, total } = this.state;
    const { addtoCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addtoCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
