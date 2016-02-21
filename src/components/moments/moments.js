import React, { Component } from 'react';
import style from './moments.scss';

export default class Philosophy extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'moments-bg-1',
      title: 'Aria moments club',
      text: `ARIA MOMENTS Club is a social circle.
We invite you to join us in a circle, and enjoy a variety
of exclusive benefits, unique only to club members. Each member of a club or get a personalized card Affording compound Aria discounts, invitations to
closed events, Premium parties and treats on special days
Like a birthday or anniversary.
We will be happy to have you join our circle
and take part at your Special moments.`
    }
  }

  render() {
    return(
      <div className={`animated fadeIn height100 background background-fade ${this.pageData.bg}`}>
        <div className="row content-page-wrap">
          <div className="small-10 columns small-centered">
            <div className="row">
              <div className="small-12 columns small-centered">
                <div className="row content-box content-box-no-hover content-box-page dark">
                  <div className="small-12 medium-5 columns height100 show-for-medium">
                    <div className="SVGIcon icon-logo icon-logo_Aria_moments_Gold moments-logo"></div>
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
                    <div className="content-box table-btn dark">
                      <div className="content-box-title content-box-title-small">Join the Aria Moments club</div>
                    </div>
                  </div>
                  <div className="small-6 columns xs-padding-sides">
                    <div className="content-box table-btn dark">
                      <a href="https://buyme.co.il/gift-card/364463#!/?display=money" target="_blank">
                        <div className="content-box-title content-box-title-small">Get a gift card</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-box dark social-media-btn mail-btn">
                <a href="mailto:orenheknin@gmail.com" target="_blank">
                  <div className="SVGIcon icon-icon_mail_G"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
