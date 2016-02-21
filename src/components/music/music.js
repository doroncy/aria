import React, { Component } from 'react';
import style from './music.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';

export default class Team extends Component {
  constructor(props) {
    super();

    this.pageData = {
      bg: 'music-bg-1',
      title: 'ARIA Music',
      text: `Every evening, in its lounge bar floor, Aria hosted performances by local and foreign DJs,
such as: Dan Ghenacia, Michel Cleis, Cesar Merveille, Diago Craus, Shonky, Gabriel Ananda, Matthew Lima, Dave seaman, Anthony papa, Nick Warren, Oliver dollar, Guy Gerber, Chaim and others.
The new and advanced sound system in Aria provides the perfect setting; the DJ is located at the center
of the circular lounge space.
This is how a personal and embracing atmosphere
is created all at the same time.`
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
                    <div className="SVGIcon icon-logo icon-logo_listen_for_music music-icon"></div>
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
