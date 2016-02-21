import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import OverlayMenuStyle from './overlay-menu.scss';

export default class OverlayMenu extends Component {
  constructor(props) {
    super();

    this.menuBtns = [
      {title: 'The aria philosophy' , link:'/philosophy'},
      {title: 'Aria Upstairs' , link:'/upstairs'},
      {title: 'Aria Downstairs' , link:'/downstairs'},
      {title: 'Aria Tripping' , link:'/tripping'},
      {title: 'Aria Music' , link:'/music'},
      {title: 'Events' , link:'/events'},
      {title: 'The Aria Team' , link:'/team'},
    ]

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(newState) {
    this.props.toggleMenu();
    browserHistory.push(`${newState}`);
  }

  render() {
    let openClass= !!this.props.menuVisible ? 'open' : '';
    let className = `overlay overlay-corner ${openClass}`;

    let overlayMenuButtons = this.menuBtns.map((item, index) => {
        return (
          <li key={index} onClick={this.navigateTo.bind(this, item.link)}>
            <div className="menu-item-btn">
              {item.title}
            </div>
          </li>
        );
    });

    return (
      <div className={className}>
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

      </div>
    );
  }
};
