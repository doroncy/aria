import React, { Component } from 'react';
import style from './music.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';

const gallery = _(_.range(30,0,-1))
  .map((index)=> require(`./images/gallery_${index}.jpg`))
  .value();

export default class Team extends Component {
  constructor(props) {
    super();

    this.state = {
      showGallery: false
    };

    this.pageData = {
      bg: 'music-bg-1',
      title: 'ARIA Music',
      text: `Good food becomes a compete experience when combined with music. For us, preparing for the dinner service at ARIA is like preparing to go on stage; carefully organizing the kitchen and the interior, hand-picking the staff and designing the soundtrack. Your dinner can start with an easy swing-jazz and finish with dancing to new disco and deep house. Every evening, in its lounge bar floor,Aria hosted performances by local and foreign DJs, such as: Dan Ghenacia, Michel Cleis, Cesar Merveille, Diago Craus, Shonky, Gabriel Ananda, Matthew Lima, Dave seaman,Anthony papa, Nick Warren, Oliver dollar, Guy Gerber, Chaim and others.`
    }

    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState({
      showGallery: !this.state.showGallery
    });
  }

  render() {
    let toggleGalleryBtnLabel = 'Gallery';
    let content = '';

    if (!!this.state.showGallery) {
      toggleGalleryBtnLabel = 'Music';
      content = (
        <div className="row">
          <div className="small-12 columns small-centered">
            <div className="content-box content-box-no-hover content-box-page no-space">
              <div className="row small-up-1 medium-up-2">
                {(() => {
                  return gallery.map((image, index)=> {
                    return (
                      <div className="column gallery-image" key={index}>
                        <img src={image} alt=""/>
                      </div>
                    );
                  })
                })()}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="row">
          <div className="small-12 columns small-centered">
            <div className="row content-box content-box-no-hover content-box-page">
              <div className="small-12 medium-5 columns height100 show-for-medium">
                <a href="https://soundcloud.com/aria-bar" target="_blank">
                  <div className="SVGIcon icon-logo icon-logo_listen_for_music music-icon"></div>
                </a>
              </div>
              <div className="small-12 medium-7 columns">
                <div className="page-title font-ExBold">{this.pageData.title}</div>
                <p className="page-text font-light">{this.pageData.text}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return(
      <div className={`animated fadeIn height100 background background-fade ${this.pageData.bg}`}>
        <div className="row content-page-wrap">
          <div className="small-12 medium-10 columns small-centered">
            <div className="row">
              <div className="small-4 medium-3 columns">
                <div className="content-box content-box-btn" onClick={this.toggleGallery}>
                  {toggleGalleryBtnLabel}
                </div>
              </div>
            </div>
            {content}
            <ClubGiftsBtns></ClubGiftsBtns>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
