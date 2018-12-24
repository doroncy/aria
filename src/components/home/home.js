import React, { Component } from 'react';
import { Link } from 'react-router';
import HomeStyle from './home.scss';
import Footer from '../footer/footer';

let bgCarouselInterval;

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      currentBgIndex: 1
    };
  }
  componentDidMount() {
    bgCarouselInterval = setInterval(()=> {
      let newBgIndex = this.state.currentBgIndex === 10
        ? 1
        : this.state.currentBgIndex + 1;

      this.setState({
        currentBgIndex: newBgIndex
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(bgCarouselInterval);
  }

  render() {
    let bgClassName = `animated fadeIn height100 background background-fade home_bg${this.state.currentBgIndex}`;

    return(
        <div className={bgClassName}>
          <div className="home-btns-wrap">
            <Link to="/upstairs">
              <div className="content-box content-box-btn home-btn">
                <div className="SVGIcon upstairs-logo-b float-center"></div>
              </div>
            </Link>
            <div className="action-btn-wrap-flex">
              <div className="content-box content-box-btn table-btn">
                <a href="http://clickiframe.clickatable.co.il/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA-%D7%90%D7%A8%D7%99%D7%94-%D7%9E%D7%A1%D7%A2%D7%93%D7%94.aspx" target="_blank">
                  <div className="content-box-title content-box-title-small">Reserve a table</div>
                </a>
              </div>
              <div className="content-box content-box-btn social-media-btn facebook-btn">
                <a href="https://www.facebook.com/ariatlv" target="_blank">
                  <div className="SVGIcon icon-icon_FACEBOOK"></div>
                </a>
              </div>
              <div className="content-box content-box-btn social-media-btn instagram-btn">
                <a href="https://www.instagram.com/ariatlv/" target="_blank">
                  <div className="SVGIcon icon-icon_INSTAGRAM"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="home-btns-wrap downstairs-box">
            <Link to="/downstairs">
              <div className="content-box content-box-btn home-btn">
                <div className="SVGIcon downstairs-logo-b float-center"></div>
              </div>
            </Link>
            <div className="action-btn-wrap-flex">
              <div className="content-box content-box-btn table-btn">
                <a href="http://clickiframe.clickatable.co.il/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA-%D7%90%D7%A8%D7%99%D7%94-%D7%91%D7%A8.aspx" target="_blank">
                  <div className="content-box-title content-box-title-small">Reserve a table</div>
                </a>
              </div>
              <div className="content-box content-box-btn social-media-btn facebook-btn">
                <a href="https://www.facebook.com/ariabartlv" target="_blank">
                  <div className="SVGIcon icon-icon_FACEBOOK"></div>
                </a>
              </div>
              <div className="content-box content-box-btn social-media-btn instagram-btn">
                <a href="https://www.instagram.com/ariatlv/" target="_blank">
                  <div className="SVGIcon icon-icon_INSTAGRAM"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-btns">
              <div className="small-6 columns no-padding-left small-padding-right">
                <div className="content-box content-box-btn bottom-btn-big">
                  <Link to="/moments">
                    <div className="SVGIcon home-moments-link icon-ARIA_MOMENTS_LOGO_for_home center-icon"></div>
                  </Link>
                </div>
              </div>
              <div className="small-6 columns no-padding-right small-padding-left">
                <div className="content-box content-box-btn bottom-btn no-margin-right">
                  <a href="https://buyme.co.il/gift-card/364463#!/?display=money" target="_blank">
                    <div className="content-box-title content-box-title-small">Get a gift card</div>
                  </a>
                </div>
                <div className="content-box content-box-btn bottom-btn no-margin-left no-margin-left">
                  <a href="tel:972-3529-6054">
                    <div className="content-box-title content-box-title-small">03-529-60-54</div>
                  </a>
                </div>
              </div>
          </div>

          <Footer></Footer>
        </div>
    );
  }
}
