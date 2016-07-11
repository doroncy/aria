import React, { Component } from 'react';
import style from './events.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';

let bgCarouselInterval;

export default class Events extends Component {
  constructor(props) {
    super();

    this.state = {
      currentBgIndex: 1
    };

    this.pageData = {
      bg: 'events-bg-1',
      title: 'ARIA EVENTS',
      text: `ARIA is offering its services for business or private events, from morning/brunch events, through lunches and dinners - in our dining room or in the lounge bar, or in both. Plan your event with us and build your own experience with our professional and skillful team.`
    }
  }

  componentDidMount() {
    bgCarouselInterval = setInterval(()=> {
      let newBgIndex = this.state.currentBgIndex === 4
        ? 1
        : this.state.currentBgIndex + 1;

      this.setState({
        currentBgIndex: newBgIndex
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(bgCarouselInterval);
  }

  render() {
    return(
      <div className={`animated fadeIn height100 background background-fade events_bg${this.state.currentBgIndex}`}>
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
                      <div className="contcat-us-btn-wrap">
                        <a href="mailto:tuti.kalman@gmail.com" target="_blank"
                          className="content-box content-box-btn selected">
                          Contact
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <ClubGiftsBtns></ClubGiftsBtns>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
