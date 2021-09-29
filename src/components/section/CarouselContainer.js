import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car4 from '../images/car4.jpg';

const CarouselContainer = () => {
  return (
    <Carousel>
      {/* INTERVAL IS 2 sec. */}
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car4} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={car2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
