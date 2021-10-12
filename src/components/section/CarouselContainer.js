import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import car3 from '../images/car3.jpg';
import car2 from '../images/car2.jpg';
import car4 from '../images/car4.jpg';
import car1 from '../images/car1.jpg';
import car6 from '../images/car6.jpg';
import '../styles/Carousels.css';

const CarouselContainer = () => {
  return (
    <Carousel controls={false} fade={true} pause={false}>
      {/* INTERVAL IS 2 sec. */}
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={car4} alt="First slide" />
        <Carousel.Caption>
          <h5>New Arrivals</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={car3} alt="Second slide" />
        <Carousel.Caption>
          <h3>Styles For Everyone</h3>
          <p>
            Get the freshest sneakers from brands like Nike, Adidas, Vans and
            more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={car6} alt="Third slide" />
        <Carousel.Caption>
          <h4>Latest Trends</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
