import React, { Component } from 'react';
import style from './tripping.scss';

export default class Team extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'tripping-bg-1',
      title: 'ARIA Tripping',
      text: `A series of premium events sponsored by ARIA, bringing Ibiza to Tel Aviv!
ARIA is going on a journey of events beyond its boundaries, some of which are small and take place
in the private atmosphere of Aria, and some are exclusive large-scale events that take place in large hangars
and outdoor spaces.
`
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
                    <div className="SVGIcon icon-logo icon-tripping icon-Logo_ARIA_Tripping"></div>
                  </div>
                  <div className="small-12 medium-7 columns">
                    <div className="page-title font-ExBold">{this.pageData.title}</div>
                    <p className="page-text font-light">{this.pageData.text}</p>
                    <div className="margin-top">
                      <div className="row">
                        <div className="small-8 columns font-SemiBold all-caps">
                          <label className="text-left middle">Enter code to see more:</label>
                        </div>
                        <div className="small-4 columns">
                          <input type="text" className="tripping-code-input" />
                        </div>
                      </div>
                    </div>
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
                      <div className="content-box-title content-box-title-small">Get a gift card</div>
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
