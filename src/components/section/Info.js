import React, { Component } from 'react';
import '../styles/Info.css';
import img1 from '../images/top1_dunklowbw.jpg';
import img2 from '../images/top2_j5oreo.jpg';
import img3 from '../images/top3_yeezybred.jpg';
import img4 from '../images/top4_zoomfly.jpg';
import img5 from '../images/top5_washorange.jpg';
import img6 from '../images/top6_omniwhite.jpg';
import img7 from '../images/top7_nikeblazrwhite.jpg';
import img8 from '../images/top8_j1ogpollen.jpg';
import img9 from '../images/top9_vanssk8hi.jpg';
import img10 from '../images/top10_nbredsuede.jpg';
import img11 from '../images/top11_nmdhrgreen.jpg';
import img12 from '../images/top12_ctxmso.jpg';

export class Info extends Component {
  render() {
    return (
      <>
        <div class="tester">
          <h1>Now Trending</h1>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="column">
              <img src={img11} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <div class="column">
              <img src={img8} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img5} alt="" />
            </div>
            <div class="column">
              <img src={img9} alt="" />
              <img src={img10} alt="" />
              <img src={img1} alt="" />
              <img src={img12} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Info;
