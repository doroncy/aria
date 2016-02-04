import React, { Component } from 'react';
import { Link } from 'react-router';
import HomeStyle from './home.scss';
import IconStyle from '../../../styles/main/icon-svg-data.css';

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
    clearInterval(bgCarouselInterval);
  }

  render() {
    let bgClassName = `animated fadeIn height100 background background-fade bg${this.state.currentBgIndex}`;

    return(
      <div className={bgClassName}>
        <div className="upstairs-box">
          <div className="content-box cb-big">
            <Link to="/upstairs">
              <div className="SVGIcon icon-UPSTAIRS_B icon-UPSTAIRS_B-dims center-icon"></div>
            </Link>
          </div>
          <div className="clearfix">
            <div className="content-box cb-big-narrow float-left">
              <div className="content-box-title content-box-title-small">Reserve a table</div>
            </div>
            <div className="content-box cb-small-cube float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_FACEBOOK_B icon-icon_FACEBOOK_B-dims center-icon"></div>
              </a>
            </div>
            <div className="content-box cb-small-cube float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_INSTAGRAM_B icon-icon_INSTAGRAM_B-dims center-icon"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="downstairs-box">
          <div className="content-box cb-big">
            <Link to="/downstairs">
              <div className="SVGIcon icon-DOWNSTAIRS_B icon-DOWNSTAIRS_B-dims center-icon"></div>
            </Link>
          </div>
          <div className="clearfix">
            <div className="content-box cb-big-narrow float-left">
              <div className="content-box-title content-box-title-small">Reserve a table</div>
            </div>
            <div className="content-box cb-small-cube float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_FACEBOOK_B icon-icon_FACEBOOK_B-dims center-icon"></div>
              </a>
            </div>
            <div className="content-box cb-small-cube float-left">
              <a href="https://www.facebook.com" target="_blank">
                <div className="SVGIcon icon-icon_INSTAGRAM_B icon-icon_INSTAGRAM_B-dims center-icon"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
