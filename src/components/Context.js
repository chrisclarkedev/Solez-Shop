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
        price: '$90',
        colors: ['black', 'white'],
        stock: 5,
      },
      {
        _id: '2',
        title: 'Sneaker 02',
        src: 'https://i.ibb.co/5Rn8h6L/nmd-r1black.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '$75',
        colors: ['black', 'red'],
        stock: 3,
      },
      {
        _id: '3',
        title: 'Sneaker 03',
        src: 'https://i.ibb.co/qJ1BsMS/3.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Nike',
        price: '$110',
        colors: ['white', 'grey', 'green'],
        stock: 8,
      },
      {
        _id: '4',
        title: 'Sneaker 04',
        src: 'https://i.ibb.co/BPSD3R9/stan-smith.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '$65',
        colors: ['white', 'green'],
        stock: 13,
      },
      {
        _id: '5',
        title: 'Sneaker 05',
        src: 'https://i.ibb.co/k82Tbf5/5.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Nike',
        price: '$125',
        colors: ['black', 'blue', 'white'],
        stock: 10,
      },
      {
        _id: '6',
        title: 'Sneaker 06',
        src: 'https://i.ibb.co/7Kjw8Fj/ultraboost-dna.jpg',
        Description: 'Testing Testing 123',
        Brand: 'Adidas',
        price: '$85',
        colors: ['black', 'blue'],
        stock: 1,
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
