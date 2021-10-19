import React, { Component } from 'react';
import '../styles/Info.css';
import img1 from '../images/top1_dunklowbw.jpg';
import img2 from '../images/top2_j5oreo.jpg';

export class Info extends Component {
  render() {
    return (
      <>
        <h1>Top 10 Trending</h1>
        <div class="container-fluid">
          <div class="row8">
            <div class="column">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Info;
