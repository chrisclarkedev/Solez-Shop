import React, { Component } from 'react';
import CarouselContainer from './CarouselContainer';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <CarouselContainer />
      </div>
    );
  }
}

export default Home;
