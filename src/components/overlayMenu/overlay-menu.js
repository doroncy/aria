import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import OverlayMenuStyle from './overlay-menu.scss';

export default class OverlayMenu extends Component {
  constructor(props) {
    super();

    this.state = {
      contactPageVisible: false
    };

    this.menuBtns = [
      {title: 'The aria philosophy' , link:'/philosophy'},
      {title: 'Aria Upstairs' , link:'/upstairs'},
      {title: 'Aria Downstairs' , link:'/downstairs'},
      {title: 'Aria Tripping' , link:'/tripping'},
      {title: 'Aria Music' , link:'/music'},
      {title: 'Aria Moments' , link:'/moments'},
      {title: 'Events' , link:'/events'},
      {title: 'The Aria Team' , link:'/team'},
      {title: 'Contact', link:'contact'}
    ];

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(newState) {
    this.props.toggleMenu();
    this.setState({
      contactPageVisible: false
    });
    if (newState === 'contact') {
      this.setState({
        contactPageVisible: true
      });
    } else {
      this.setState({
        contactPageVisible: false
      });
      browserHistory.push(`${newState}`);
    }
  }

  render() {
    if (!this.props.overlayVisible) {
        this.state.contactPageVisible = false;
    }
    let openClass = '';
    let contentHtml = '';
    if (!!this.state.contactPageVisible && !this.props.menuVisible) {
      openClass = 'contact-page'
      contentHtml = (
        <div className="row">
          <div className="small-12 columns small-centered contact-page-body">
            <div className="contact-page-title font-ExBold">Contact us!</div>
            <div className="contact-page-text font-Regular">
              <p>66 Nachalat Binyamin St., Tel Aviv</p>
              <div>
                <a href="tel:972-3529-6054">03-529-60-54</a>
              </div>
              <div className="contact-mail-wrap">
                <a href="mailto:orenheknin@gmail.com" target="_blank">
                  <div className="SVGIcon icon-Email_icon_for_contact icon-Email_icon_for_contact-dims"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      openClass= !!this.props.menuVisible ? 'open' : '';
      let overlayMenuButtons = this.menuBtns.map((item, index) => {
          return (
            <li key={index} onClick={this.navigateTo.bind(this, item.link)}>
              <div className="menu-item-btn">
                {item.title}
              </div>
            </li>
          );
      });
      contentHtml = (
        <nav>
          <ul>
            {overlayMenuButtons}
            <li className="overlay-social-links">
              <a href="https://www.facebook.com/ariatlv" target="_blank">
                <div className="SVGIcon icon-icon_FACEBOOK-W"></div>
              </a>
              <a href="https://www.instagram.com/ariatlv/" target="_blank">
                <div className="SVGIcon icon-icon_INSTAGRAM-W"></div>
              </a>
              <a href="https://soundcloud.com/aria-bar" target="_blank">
                <div className="SVGIcon icon-icon_SOUNDCLOUDE"></div>
              </a>
            </li>
          </ul>
          <div className="menu-btn-address">66 Nachalat Binyamin st. Tel-Aviv</div>
        </nav>
      );
    }
    let className = `overlay overlay-corner ${openClass}`;

    return (
      <div className={className}>
        {contentHtml}
      </div>
    );
  }
};
