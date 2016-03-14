import React, { Component } from 'react';
import style from './music.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';
import galery1 from './images/gallery_1.jpg';
import galery2 from './images/gallery_2.jpg';
import galery3 from './images/gallery_3.jpg';
import galery4 from './images/gallery_4.jpg';
import galery5 from './images/gallery_5.jpg';
import galery6 from './images/gallery_6.jpg';
import galery7 from './images/gallery_7.jpg';
import galery8 from './images/gallery_8.jpg';
import galery9 from './images/gallery_9.jpg';
import galery10 from './images/gallery_10.jpg';
import galery11 from './images/gallery_11.jpg';
import galery12 from './images/gallery_12.jpg';
import galery13 from './images/gallery_13.jpg';
import galery14 from './images/gallery_14.jpg';
import galery15 from './images/gallery_15.jpg';
import galery16 from './images/gallery_16.jpg';
import galery17 from './images/gallery_17.jpg';
import galery18 from './images/gallery_18.jpg';
import galery19 from './images/gallery_19.jpg';
import galery20 from './images/gallery_20.jpg';

const gallery = [galery1, galery2, galery3, galery4, galery5, galery6, galery7, galery8, galery9, galery10, galery11, galery12, galery13, galery14, galery15, galery16, galery17, galery18, galery19, galery11];

export default class Team extends Component {
  constructor(props) {
    super();

    this.state = {
      showGallery: false,
      images: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    };

    this.pageData = {
      bg: 'music-bg-1',
      title: 'ARIA Music',
      text: `Good food becomes a compete experience when combined with music. For us, preparing for the dinner service at ARIA is like preparing to go on stage; carefully organizing the kitchen and the interior, hand-picking the staff and designing the soundtrack. Your dinner can start with an easy swing-jazz and finish with dancing to new disco and deep house. Every evening, in its lounge bar floor,Aria hosted performances by local and foreign DJs, such as: Dan Ghenacia, Michel Cleis, Cesar Merveille, Diago Craus, Shonky, Gabriel Ananda, Matthew Lima, Dave seaman,Anthony papa, Nick Warren, Oliver dollar, Guy Gerber, Chaim and others.`
    }

    this.showGallery = this.showGallery.bind(this);
  }

  showGallery() {
    this.setState({
      showGallery: true
    });
  }

  render() {
    let isGallerySelectedClass = '';
    let content = '';

    if (!!this.state.showGallery) {
      isGallerySelectedClass = 'selected';
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
                <div className={`content-box content-box-btn ${isGallerySelectedClass}`} onClick={this.showGallery}>
                  Gallery
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
