import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import tabsStyle from '../../../styles/main/tabs.scss';
import globalStyle from '../../../styles/main/style.scss';
import downstairsStyle from './downstairs.scss';
import menuItems from './downstairs_menu';

const downstairsInfo = {
  title: 'The restaurant',
  description: 'blah lbah blalajsa sdjflksd jflksdjflksd jflksd jflksdj flk',
  bg: 'downstairs-bg'
}

export default class Downstairs extends Component {
  constructor(props) {
    super();

    this.state = {
      currentTab: downstairsInfo
    };
  }

  changeTab(newTab) {
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
    if (this.state.currentTab === downstairsInfo) {
      contentBody = (
        <div>
          <div className="SVGIcon icon-ARIA_DOWN aria-up-size small-centered"></div>
          <div className="gold-subtitle font-ExBold">The Restaurant</div>
          <div className="upstairs-info-desc font-light">{downstairsInfo.description}</div>
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
      <div className={`animated fadeIn height100 background background-fade ${this.state.currentTab.bg || 'downstairs-bg'}`}>
        <div className="tabs-component">
          <div className="row">
            <div className="small-9 columns small-centered">
              <div className="row">
                <div className="small-12 columns small-centered xs-padding-sides">
                  <div className="content-box tabs-header" onClick={this.changeTab.bind(this,downstairsInfo)}>
                    <div className="SVGIcon icon-Downstairs_for_menu"></div>
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
                        <a href="http://clickiframe.clickatable.co.il/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA-%D7%90%D7%A8%D7%99%D7%94-%D7%91%D7%A8.aspx" target="_blank">
                          <div className="content-box-title content-box-title-small">Reserve a table</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-box social-media-btn facebook-btn">
                  <a href="https://www.facebook.com/ariabartlv" target="_blank">
                    <div className="SVGIcon icon-icon_FACEBOOK"></div>
                  </a>
                </div>
                <div className="content-box social-media-btn instagram-btn">
                  <a href="https://www.instagram.com/ariatlv/" target="_blank">
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
