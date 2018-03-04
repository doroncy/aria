import React, { Component } from 'react';
import style from './team.scss';
import ClubGiftsBtns from '../page-clubs-gifts-btns/club-gifts-btns';
import Footer from '../footer/footer';

let bgCarouselInterval;

export default class Team extends Component {
  constructor(props) {
    super();

    this.state = {
      isJobsSelected: false,
      currentBgIndex: 1
    };

    this.pageData = {
      bg: 'team-bg-1',
      title: 'THE ARIA TEAM',
      text: `Join our team at ARIA and enjoy a professional, warm family atmosphere with great opportunities to grow and develop with us in our future ARIA projects.`
    }

    this.toggleJobs = this.toggleJobs.bind(this);
  }

  componentDidMount() {
    bgCarouselInterval = setInterval(()=> {
      let newBgIndex = this.state.currentBgIndex === 5
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

  toggleJobs() {
    this.setState({
      isJobsSelected: !this.state.isJobsSelected
    });
  }

  getToggleJobsBtnLabel() {
    return this.state.isJobsSelected ? 'Team' : 'Jobs';
  }

  render() {
    let content = '';
    let isJobsSelectedClass = '';

    if (!!this.state.isJobsSelected) {
      isJobsSelectedClass = 'selected';
      content = (
        <div className="small-12 medium-7 columns">
          <div className="page-title font-ExBold">Come work with us!</div>
          <p className="page-text font-Regular">
            We are looking for<br/>
            Waiters / waitresses, hosts And events manager
          </p>
          <p className="page-text font-light">
            Please contact us <br/> for more information.
          </p>
          <div className="contcat-us-btn-wrap">
            <a href="mailto:tuti.kalman@gmail.com?subject=ARIA%20WEBSITE"
              className="content-box content-box-btn selected">
              Contact
            </a>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="small-12 medium-7 columns">
          <div className="page-title font-ExBold">{this.pageData.title}</div>
          <p className="page-text font-light">{this.pageData.text}</p>
        </div>
      );
    }

    return(
      <div className={`animated fadeIn height100 background background-fade team_bg${this.state.currentBgIndex}`}>
        <div className="row content-page-wrap">
          <div className="small-12 medium-10 columns small-centered">
            <div className="row">
              <div className="small-4 medium-3 columns">
                <div className="content-box content-box-btn" onClick={this.toggleJobs}>
                  {this.getToggleJobsBtnLabel.bind(this)()}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns small-centered">
                <div className="row content-box content-box-no-hover content-box-page">
                  <div className="small-12 medium-5 columns height100 show-for-medium">
                    <div className="SVGIcon icon-logo icon-Logo_ARIA_for_Pages"></div>
                  </div>
                  {content}
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
