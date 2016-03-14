import React, { Component } from 'react';
import { Link } from 'react-router';
import footerStyle from './footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="footer-wrap">
        <div className="row">
          <div className="small-12 medium-10 columns small-centered">
            <div className="row no-margin-left no-margin-right">
              <div className="small-12 columns medium-2 show-for-small-only">
                <a href="https://soundcloud.com/aria-bar" target="_blank">
                  <div className="SVGIcon icon-icon_SOUNDCLOUDE icon-icon_SOUNDCLOUDE-dims centered"></div>
                </a>
              </div>
              <div className="small-12 columns medium-5 aria-copy no-padding-left">
                <div className="footer-text">Copyright 2016 ARIA. All Rights Reserved.</div>
              </div>
              <div className="small-12 columns medium-2 show-for-medium">
                <a href="https://soundcloud.com/aria-bar" target="_blank">
                  <div className="SVGIcon icon-icon_SOUNDCLOUDE icon-icon_SOUNDCLOUDE-dims centered"></div>
                </a>
              </div>
              <div className="small-12 columns medium-5 done-by no-padding-right">
                <div className="footer-text">
                  <a className="footer-text" href="http://studio-y-o.com/" target="_blank">Designed by STUDIO Y&O</a> |
                  <a className="footer-text" href="https://github.com/doroncy" target="_blank"> Dev by Doron Cyngiser</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
