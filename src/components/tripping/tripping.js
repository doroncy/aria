import React, { Component } from 'react';
import style from './tripping.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';

export default class Team extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'tripping-bg-1',
      title: 'ARIA Tripping',
      text: `ARIA TRIPPING is a series of premium events sponsored by ARIA, some of which are small and take place in the private atmosphere of ARIA, and some are exclusive large-scale events that take place in large hangars and outdoor spaces. Taking care of the production of these events, from concept to details, ARIA is working together with international brands in Ibiza House music scene and in other locations, to create unique and exciting events under its name, for the people who embody the very spirit of the ARIA brand, here in Tel Aviv.`
    }

    this.state = {
      contentBoxVisible: false
    }

    this.toggleContentVisible = this.toggleContentVisible.bind(this);
  }

  toggleContentVisible() {
    this.setState({
      contentBoxVisible: !this.state.contentBoxVisible
    });
  }

  render() {
    let contentBoxFadeClass = !this.state.contentBoxVisible ? 'fadeOut' :'';

    let contentBox = (
      <div className={`row tripiing-content-box content-page-wrap animated-fast fadeIn ${contentBoxFadeClass}`}>
        <div className="small-12 medium-10 columns small-centered">
          <div className="row pos-relative">
            <div className="SVGIcon icon-logo icon-x_button" onClick={this.toggleContentVisible}></div>
            <div className="small-12 columns small-centered">
              <div className="row content-box content-box-no-hover content-box-page">
                <div className="small-12 medium-5 columns height100 show-for-medium">
                  <div className="SVGIcon icon-logo icon-tripping icon-Logo_ARIA_Tripping"></div>
                </div>
                <div className="small-12 medium-7 columns">
                  <div className="page-title font-ExBold">{this.pageData.title}</div>
                  <p className="page-text font-light">{this.pageData.text}</p>
                    <div className="row">
                      <div className="small-12 large-6 small-centered columns">
                        <div className="content-box dark more-details">
                          <a href="http://ariatripping.com/" target="_blank">
                            more details
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <ClubGiftsBtns></ClubGiftsBtns>
        </div>
      </div>
    );

    let videoToggle = !this.state.contentBoxVisible
    ? (<div className="SVGIcon icon-logo video-icon-fullpage icon-video" onClick={this.toggleContentVisible}></div>)
    : ''

    return(
      <div className={`animated fadeIn height100 background background-fade ${this.pageData.bg}`}>
        <div className="tripping-video">
          <iframe width="100%" height="100%"
            allowFullScreen="true"
            src="https://www.youtube.com/embed/bl8Qp0xVCyM?autoplay=1&list=PLr8daI8vQd_0ZIVK7kgLJQ4vvfjllydem&rel=0&controls=0&showinfo=0&replay=1&loop=1" frameBorder="0">
          </iframe>
          {videoToggle}
        </div>
        <div className="SVGIcon icon-logo icon-TRIANGLE_CORNER_LEFT" onClick={this.toggleContentVisible}></div>
        {contentBox}
        <Footer></Footer>
      </div>
    );
  }
}
