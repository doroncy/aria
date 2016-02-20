import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import tabsStyle from '../../../styles/main/tabs.scss';
import globalStyle from '../../../styles/main/style.scss';
import upstairsStyle from './upstairs.scss';
import menuItems from './menu';

const upstairsInfo = {
  title: 'The restaurant',
  description: 'blah lbah blalajsa sdjflksd jflksdjflksd jflksd jflksdj flk',
  bg: 'upstairs-bg'
}

export default class Upstairs extends Component {
  constructor(props) {
    super();

    this.state = {
      currentTab: upstairsInfo
    };
  }

  changeTab(newTab) {
    console.log('newTab', newTab);
    this.setState({
      currentTab: newTab
    });
  }

  render() {
    let tabs = _.map(menuItems, (menuItem, index) => {
      return (
        <div key={index} className="large-2 columns xs-padding-sides">
          <div className="content-box content-box-btn" onClick={this.changeTab.bind(this,menuItem)}>
            {menuItem.title}
          </div>
        </div>
      );
    });

    let contentBody;
    if (this.state.currentTab === upstairsInfo) {
      contentBody = (
        <div>
          <div className="SVGIcon icon-ARIA_UP aria-up-size small-centered"></div>
          <div className="gold-subtitle font-ExBold">The Restaurant</div>
          <div className="upstairs-info-desc font-light">{upstairsInfo.description}</div>
        </div>
      );
    } else {
      contentBody = this.state.currentTab.items.map((item, index) => {
        return (
          <li className="menuitem" key={item.name}>
            <div className="menuitem-name font-SemiBold ">{item.name}</div>
            <p className="menuitem-description font-light">{item.description}</p>
          </li>
        );
      });
      contentBody = (<ul className="no-bullet">{contentBody}</ul>);
    }

    return(
      <div className={`animated fadeIn height100 background background-fade ${this.state.currentTab.bg}`}>
        <div className="tabs-component">
          <div className="row">
            <div className="small-9 columns small-centered">
              <div className="row">
                <div className="small-12 columns small-centered xs-padding-sides">
                  <div className="content-box tabs-header" onClick={this.changeTab.bind(this,upstairsInfo)}>
                    <div className="SVGIcon icon-Upstairs_for_menu"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                {tabs}
              </div>
              <div className="row">
                <div className="small-12 columns small-centered xs-padding-sides">
                  <div className="content-box content-box-no-hover main-container fade-bottom">
                    {contentBody}
                  </div>
                </div>
              </div>
              <div className="action-btn-wrap">
                <div className="action-btn-inner">
                  <div className="row">
                    <div className="small-6 columns xs-padding-sides">
                      <div className="content-box table-btn">
                        <div className="content-box-title content-box-title-small">Gallery</div>
                      </div>
                    </div>
                    <div className="small-6 columns xs-padding-sides">
                      <div className="content-box table-btn">
                        <div className="content-box-title content-box-title-small">Reserve a table</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-box social-media-btn facebook-btn">
                  <a href="https://www.facebook.com" target="_blank">
                    <div className="SVGIcon icon-icon_FACEBOOK"></div>
                  </a>
                </div>
                <div className="content-box social-media-btn instagram-btn">
                  <a href="https://www.facebook.com" target="_blank">
                    <div className="SVGIcon icon-icon_INSTAGRAM"></div>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    );
  }
}
