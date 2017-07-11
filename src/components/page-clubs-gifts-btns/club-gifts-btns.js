import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ClubGiftsBtns extends Component {
  constructor(props) {
    super();

  }

  render() {
    let themeClassName = '';
    let btnColorClassName = '';
    let mailIconClass = 'icon-icon_mail'

    if (this.props.theme === 'dark') {
      themeClassName = 'dark';
      btnColorClassName = 'color-gold';
      mailIconClass = 'icon-icon_mail_G';
    }

    let joinMomentsBtn = this.props.joinMoments === 'true'
      ? (
        <a href="http://valuecard.co.il/aria/tofes_web.asp" target="_blank">
          <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Join the Aria Moments club</div>
        </a>
      )
      : (
        <Link to="/moments">
          <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Join the Aria Moments club</div>
        </Link>
      );

    return(
      <div className="action-btn-wrap">
        <div className="action-btn-inner">
          <div className="row">
            <div className="small-12 medium-6 columns moments-club-wrap">
              <div className={`content-box table-btn ${themeClassName}`}>
                {joinMomentsBtn}
              </div>
            </div>
            <div className="small-12 medium-6 columns gift-card-wrap">
              <div className={`content-box table-btn ${themeClassName}`}>
                <a href="https://buyme.co.il/gift-card/364463#!/?display=money" target="_blank">
                  <div className={`content-box-title content-box-title-small ${btnColorClassName}`}>Get a gift card</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`content-box social-media-btn mail-btn show-for-medium ${themeClassName}`}>
          <a href="mailto:tuti.kalman@gmail.com,ariatlv@gmail.com?subject=ARIA%20WEBSITE">
            <div className={`SVGIcon ${mailIconClass}`}></div>
          </a>
        </div>
      </div>
    );
  }
}
