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
        {/* <div class="containerfluid">
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
        </div> */}
        <section clas="bg-dark p-5">
          <div class="container">
            <div class="card-group">
              <div class="card crdimg1">
                <div class="card-body cb1">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a class="btn btn-primary" href="#" role="button">
                    TEST
                  </a>
                </div>
              </div>
              <div class="card crdimg2">
                <div class="card-body cb2">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a class="btn btn-primary" href="#" role="button">
                    TEST
                  </a>
                </div>
              </div>
              <div class="card crdimg3">
                <div class="card-body cb3">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <a class="btn btn-primary" href="#" role="button">
                    TEST
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Info;
