import React, { Component } from 'react';
import style from './moments.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';

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
          <div className="small-12 medium-10 columns small-centered">
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
            <ClubGiftsBtns theme="dark"></ClubGiftsBtns>            
          </div>
        </div>
      </div>
    );
  }
}
