import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import tabsStyle from '../../../styles/main/tabs.scss';
import globalStyle from '../../../styles/main/style.scss';
import downstairsStyle from './downstairs.scss';
import menuItems from './menu';
import Wines from '../upstairs/wines';
import Footer from '../footer/footer';
import Gallery from '../gallery/gallery';

import galery1 from './images/gallery_down01.jpg';
import galery2 from './images/gallery_down02.jpg';
import galery3 from './images/gallery_down03.jpg';
import galery4 from './images/gallery_down04.jpg';
import galery5 from './images/gallery_down05.jpg';

const galleryImages = [galery1, galery2, galery3, galery4, galery5];

const downstairsInfo = {
  title: 'The Lounge Bar',
  description: `Aria's “downstairs” ground floor lounge offers a rich cocktail bar alongside dishes from the chef’s kitchen. The new and advanced sound system provides the perfect setting with the DJ is located at the center of the circular lounge space. The guests sitting at the bar enjoy a unique experience that starts with dinner and drinks accompanied by live performances of the best local and international DJs, followed by a full-blown party into the midnight hours.`,
  bg: 'downstairs-bg',
  items: []
}

let galleryInfo = {
  title: 'Gallery',
  bg: 'downstairs-gallery-1',
  items: []
}


export default class Downstairs extends Component {
  constructor(props) {
    super();

    this.state = {
      currentTab: downstairsInfo,
      tabIndex: 0,
      galleryIndex: 1
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.bgImageChange = this.bgImageChange.bind(this);
  }

  componentDidMount() {
    var mainElem = this.refs.contentBody;
    var menuItemsKeys = _.keys(menuItems);

    let that = this;
    mainElem.onscroll = function(ev) {
      if ((mainElem.scrollTop + mainElem.clientHeight) >= mainElem.scrollHeight) {
        let newIndex = _.indexOf(menuItemsKeys, that.state.tabIndex) ===  _.size(menuItemsKeys) - 1
          ? menuItemsKeys[0]
          : menuItemsKeys[_.indexOf(menuItemsKeys, that.state.tabIndex) + 1];

        that.changeTab(menuItems[newIndex], newIndex);
        mainElem.scrollTop = 0;
      }
    };
  }

  changeTab(newTab, index) {
    this.setState({
      currentTab: newTab,
      tabIndex: index,
      showMenuTabs: false
    });
  }

  toggleMenu() {
    this.setState({
      showMenuTabs: !this.state.showMenuTabs
    });
  }

  bgImageChange(index) {
    galleryInfo.bg = `downstairs-gallery-${index}`;
    this.setState({
      currentTab: galleryInfo
    });
  }

  render() {
    let tabs = _.map(menuItems, (menuItem, index) => {
      let isTabSelected = this.state.tabIndex === index ? "selected" : "";
      return (
        <div key={index} className="medium-2 columns xs-padding-sides">
          <div className={`content-box content-box-btn ${isTabSelected}`} onClick={this.changeTab.bind(this,menuItem, index)}>
            {menuItem.title}
          </div>
        </div>
      );
    });

    let verticalTabs = '';
    let verticalTabsTitleClass = 'content-box content-box-btn';
    if (this.state.showMenuTabs) {
      verticalTabs = _.map(menuItems, (menuItem, index) => {
        return (
          <li key={index} className="vertical-menu-item content-box content-box-btn"
            onClick={this.changeTab.bind(this,menuItem, index)}>
            {menuItem.title}
          </li>
        );
      });
      verticalTabs = (
        <div className="vertical-tabs">
          <ul className="no-bullet">{verticalTabs}</ul>
        </div>
      );
      verticalTabsTitleClass = verticalTabsTitleClass + ' vertical-menu-title';
    }

    let contentBody = '';
    let galleryModeClass = '';
    let gallerySelected = '';
    let gallery = '';

    if (this.state.currentTab === downstairsInfo) {
      contentBody = (
        <div>
          <div className="gold-subtitle font-ExBold">{downstairsInfo.title}</div>
          <div className="downstairs-info-desc font-light">{downstairsInfo.description}</div>
        </div>
      );
    } else if (this.state.currentTab === galleryInfo) {
      galleryModeClass = 'gallery';
      gallerySelected = 'selected';
      gallery = <Gallery galleryImages={galleryImages} onImageChange={this.bgImageChange}></Gallery>
    } else if (this.state.currentTab.title === 'Wine Cellar') {
      contentBody = <Wines></Wines>;
    } else {
      contentBody = this.state.currentTab.items.map((item, index) => {
        let price = !_.isEmpty(item.price)
          ? <span><br/>- {item.price} -</span>
        : '';
        return (
          <li className="menuitem" key={item.name}>
            <div className="menuitem-name font-SemiBold">{item.name}</div>
            <p className="menuitem-description font-light">
              {item.description}
              {price}
            </p>
          </li>
        );
      });
      contentBody = (
        <div className="pad-bottom-lg">
          <div className="menu-title font-ExBold">{this.state.currentTab.title}</div>
          <ul className="no-bullet" ref="contentList">{contentBody}</ul>
        </div>
      );
    }

    return(
      <div className={`animated fadeIn height100 background background-fade ${this.state.currentTab.bg}`}>
        <div className={`tabs-component ${galleryModeClass}`}>
          <div className="row">
            <div className="mall-12 medium-10 columns small-centered">
              <div className="row">
                <div className="small-12 columns small-centered">
                  <div className="content-box tabs-header" onClick={this.changeTab.bind(this,downstairsInfo)}>
                    <div className="SVGIcon downstairs-menu-title"></div>
                  </div>
                </div>
              </div>
              <div className="row show-for-large">
                {tabs}
              </div>
              <div className="row hide-for-large">
                <div className="small-12 columns pos-relative">
                  <div className={verticalTabsTitleClass} onClick={this.toggleMenu}>
                    Menu
                  </div>
                  {verticalTabs}
                </div>
              </div>

              <div className="row content-body-wrap">
                <div className="small-12 columns small-centered pos-relative">
                  <div className="content-box content-box-no-hover main-container" ref="contentBody">
                    {contentBody}
                  </div>
                  <div className="fade-bottom"></div>
                </div>
              </div>
              <div className="action-btn-wrap-flex">
                <div className={`show-for-medium content-box content-box-btn table-btn ${gallerySelected}`} onClick={this.changeTab.bind(this,galleryInfo)}>
                  <div className="content-box-title content-box-title-small">Gallery</div>
                </div>
                <div className="content-box content-box-btn table-btn">
                  <a href="http://clickiframe.clickatable.co.il/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA-%D7%90%D7%A8%D7%99%D7%94-%D7%91%D7%A8.aspx" target="_blank">
                    <div className="content-box-title content-box-title-small">Reserve a table</div>
                  </a>
                </div>
                <div className="content-box content-box-btn social-media-btn facebook-btn">
                  <a href="https://www.facebook.com/ariabartlv" target="_blank">
                    <div className="SVGIcon icon-icon_FACEBOOK"></div>
                  </a>
                </div>
                <div className="content-box content-box-btn social-media-btn instagram-btn">
                  <a href="https://www.instagram.com/ariatlv/" target="_blank">
                    <div className="SVGIcon icon-icon_INSTAGRAM"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {gallery}
        <Footer></Footer>
      </div>
    );
  }
}
