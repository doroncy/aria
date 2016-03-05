import React, { Component } from 'react';
import style from './moments.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';

export default class Philosophy extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'moments-bg-1',
      title: 'Aria moments club',
      text: `ARIA MOMENTS is our social club. We invite you to join us and enjoy exclusive benefits that are created uniquely for our club members. Each member received a personal VIP card that includes special offers, booking priority, invitation to closed events and premium parties, and other benefits in your special days like anniversaries and birthdays. We would be thrilled to have you as a member in our club and share your special moments.`
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
        <Footer></Footer>
      </div>
    );
  }
}
