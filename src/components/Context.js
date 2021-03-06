import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'Blazer Mid 77',
        src: 'https://i.ibb.co/16dbK5k/1.jpg',
        Description: 'Vintage-classic basketball sneaker',
        Brand: 'Nike',
        price: '90',
        colors: ['black', 'white'],
        count: 1,
      },
      {
        _id: '2',
        title: 'NMD_R1',
        src: 'https://i.ibb.co/5Rn8h6L/nmd-r1black.jpg',
        Description: 'Running-inspired for our fast-paced world',
        Brand: 'Adidas',
        price: '75',
        colors: ['black', 'red'],
        count: 1,
      },
      {
        _id: '3',
        title: 'Nike Air Max 2021',
        src: 'https://i.ibb.co/qJ1BsMS/3.jpg',
        Description: 'Revolutionary air cushioned design',
        Brand: 'Nike',
        price: '110',
        colors: ['white', 'grey', 'yellowgreen'],
        count: 1,
      },
      {
        _id: '4',
        title: 'Stan Smith',
        src: 'https://i.ibb.co/BPSD3R9/stan-smith.jpg',
        Description: 'Timeless look with new gen attitude',
        Brand: 'Adidas',
        price: '65',
        colors: ['white', 'green'],
        count: 1,
      },
      {
        _id: '5',
        title: 'Nike Airmax Plus',
        src: 'https://i.ibb.co/k82Tbf5/5.jpg',
        Description: 'Tuned for great stability and cushioning',
        Brand: 'Nike',
        price: '125',
        colors: ['black', 'blue', 'white'],
        count: 1,
      },
      {
        _id: '6',
        title: 'Adidas Ultraboost',
        src: 'https://i.ibb.co/7Kjw8Fj/ultraboost-dna.jpg',
        Description: 'Ultraboost shoes for everyday comfort',
        Brand: 'Adidas',
        price: '95',
        colors: ['black', 'blue', 'grey'],
        count: 1,
      },
      {
        _id: '7',
        title: 'Nike Presto',
        src: 'https://i.ibb.co/8bgZDTm/7.jpg',
        Description: 'Made to feel good and look fast',
        Brand: 'Nike',
        price: '112',
        colors: ['orange', 'black', 'white'],
        count: 1,
      },
      {
        _id: '8',
        title: 'ZX 700 HD Shoes',
        src: 'https://i.ibb.co/FYVmnWd/8.jpg',
        Description: 'Shoes inspired by the track',
        Brand: 'Adidas',
        price: '63',
        colors: ['black', 'beige', 'white', 'grey'],
        count: 1,
      },
      {
        _id: '9',
        title: 'Nike Free Run 2.0',
        src: 'https://i.ibb.co/0tfCMdh/9.jpg',
        Description: 'Shoes for running and training',
        Brand: 'Nike',
        price: '100',
        colors: ['black', 'white'],
        count: 1,
      },
      {
        _id: '10',
        title: 'Superstar Shoes',
        src: 'https://i.ibb.co/fnrqMy3/10.jpg',
        Description: 'Authentic low top with shell toe',
        Brand: 'Adidas',
        price: '85',
        colors: ['black', 'white', 'gold'],
        count: 1,
      },
      {
        _id: '11',
        title: 'Nano X Shoes',
        src: 'https://i.ibb.co/n77PkM2/11.jpg',
        Description: 'Versatile shoes for fitness or sport',
        Brand: 'Reebok',
        price: '75',
        colors: ['grey', 'white', 'black', 'beige'],
        count: 1,
      },
      {
        _id: '12',
        title: 'Vans Authentic Pro ',
        src: 'https://i.ibb.co/XJVCb8W/13.jpg',
        Description: 'Trendy and traditional casual skate shoe',
        Brand: 'Vans',
        price: '42',
        colors: ['white', 'black'],
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

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

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
