import React, { Component } from 'react';
import style from './philosophy.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';

export default class Philosophy extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'philosophy-bg-1',
      title: 'The Aria Philosophy',
      text: `ARIA is Tel Aviv, Tel Aviv is ARIA. ARIA is what you think of when you envision Tel Aviv. Housed in a two-story historic building, ARIA is a union of a contemporary chef restaurant and a lounge bar. The ARIA experience ranges from a high-quality, meticulously-prepared dinner, to lively mingling into the midnight hours. The food, the music, the cocktails, the wine, the unique location, and the meticulous service, all work together to create a never before seen experience.`
    }
  }

  render() {
    return(
      <div className={`animated fadeIn height100 background background-fade ${this.pageData.bg}`}>
        <div className="row content-page-wrap">
          <div className="small-12 medium-10 columns small-centered">
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
            <ClubGiftsBtns></ClubGiftsBtns>
          </div>
        </div>
      </div>
    );
  }
}
