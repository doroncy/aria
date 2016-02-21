import React, { Component } from 'react';
import style from './team.scss';

export default class Team extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'team-bg-1',
      title: 'THE ARIA TEAM',
      text: `The food, music, cocktails, wine menu, unique location and scrupulous service
is combined in an entertainment experience like you've never known before
The food, music, cocktails, wine menu, unique location and scrupulous service
is combined in an entertainment experience like you've never known before`
    }
  }

  render() {
    return(
      <div className={`animated fadeIn height100 background background-fade ${this.pageData.bg}`}>
        <div className="row content-page-wrap">
          <div className="small-10 columns small-centered">
            <div className="row">
              <div className="small-12 columns small-centered">
                <div className="row content-box content-box-no-hover content-box-page">
                  <div className="small-12 medium-5 columns height100 show-for-medium">
                    <div className="SVGIcon icon-logo icon-Logo_ARIA_for_Pages"></div>
                  </div>
                  <div className="small-12 medium-7 columns">
                    <div className="page-title font-ExBold">{this.pageData.title}</div>
                    <p className="page-text font-light">{this.pageData.text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="action-btn-wrap">
              <div className="action-btn-inner">
                <div className="row">
                  <div className="small-6 columns small-padding-right">
                    <div className="content-box table-btn">
                      <div className="content-box-title content-box-title-small">Join the Aria Moments club</div>
                    </div>
                  </div>
                  <div className="small-6 columns xs-padding-sides">
                    <div className="content-box table-btn">
                      <a href="https://buyme.co.il/gift-card/364463#!/?display=money" target="_blank">
                        <div className="content-box-title content-box-title-small">Get a gift card</div>
                      </a>                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-box social-media-btn mail-btn">
                <a href="https://www.facebook.com" target="_blank">
                  <div className="SVGIcon icon-icon_mail"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
