import React, { Component } from 'react';
import style from './tripping.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';

export default class Team extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'tripping-bg-1',
      title: 'ARIA Tripping',
      text: `ARIA TRIPPING is a series of premium events sponsored by ARIA, some of which are small and take place in the private atmosphere of ARIA, and some are exclusive large-scale events that take place in large hangars and outdoor spaces. Taking care of the production of these events, from concept to details, ARIA is working together with international brands in Ibiza House music scene and in other locations, to create unique and exciting events under its name, for the people who embody the very spirit of the ARIA brand, here in Tel Aviv.`
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
                    <div className="SVGIcon icon-logo icon-tripping icon-Logo_ARIA_Tripping"></div>
                  </div>
                  <div className="small-12 medium-7 columns">
                    <div className="page-title font-ExBold">{this.pageData.title}</div>
                    <p className="page-text font-light">{this.pageData.text}</p>
                    <div className="margin-top">
                      <div className="row">
                        <div className="small-12 large-8 columns font-SemiBold all-caps input-label">
                          <label className="text-left middle">Enter code to see more:</label>
                        </div>
                        <div className="small-12 large-4 columns">
                          <input type="text" className="tripping-code-input" />
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
      </div>
    );
  }
}
