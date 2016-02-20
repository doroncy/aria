import React, { Component } from 'react';
import { Link } from 'react-router';
import HomeStyle from './home.scss';

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
      let newBgIndex = this.state.currentBgIndex === 5
        ? 1
        : this.state.currentBgIndex + 1;

      this.setState({
        currentBgIndex: newBgIndex
      });
    }.bind(this), 5000);
  }

  componentWillUnmount() {
    console.log('UNMOUNT!!');
    clearInterval(bgCarouselInterval);
  }

  render() {
    let bgClassName = `animated fadeIn height100 background background-fade home_bg${this.state.currentBgIndex}`;

    return(
      <div className={bgClassName}>
        <div className="home-btns-wrap">
          <div className="content-box content-box-btn home-btn">
            <Link to="/upstairs">
              <div className="SVGIcon upstairs-logo-b float-center"></div>
            </Link>
          </div>
          <div className="action-btn-wrap clearfix">
            <div className="content-box content-box-btn table-btn float-left">
              <div className="content-box-title content-box-title-small">Reserve a table</div>
            </div>
            <div className="content-box content-box-btn social-media-btn facebook-btn float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_FACEBOOK"></div>
              </a>
            </div>
            <div className="content-box content-box-btn social-media-btn instagram-btn float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_INSTAGRAM"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="home-btns-wrap downstairs-box">
          <div className="content-box content-box-btn home-btn">
            <Link to="/upstairs">
              <div className="SVGIcon downstairs-logo-b float-center"></div>
            </Link>
          </div>
          <div className="action-btn-wrap clearfix">
            <div className="content-box content-box-btn table-btn float-left">
              <div className="content-box-title content-box-title-small">Reserve a table</div>
            </div>
            <div className="content-box content-box-btn social-media-btn facebook-btn float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_FACEBOOK"></div>
              </a>
            </div>
            <div className="content-box content-box-btn social-media-btn instagram-btn float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_INSTAGRAM"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-btns row">
            <div className="small-6 columns no-padding-left small-padding-right">
              <div className="content-box content-box-btn bottom-btn-big">
                <Link to="/moments">
                  <div className="SVGIcon home-moments-link icon-ARIA_MOMENTS_LOGO_for_home center-icon"></div>
                </Link>
              </div>
            </div>
            <div className="small-6 columns no-padding-right small-padding-left">
              <div className="content-box content-box-btn bottom-btn no-margin-right">
                <a href="https://www.facebook.com" target="_blank">
                  <div className="content-box-title content-box-title-small">Get a gift card</div>
                </a>
              </div>
              <div className="content-box content-box-btn bottom-btn no-margin-left no-margin-left">
                <a href="https://www.facebook.com" target="_blank">
                  <div className="content-box-title content-box-title-small">03-529-60-54</div>
                </a>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
