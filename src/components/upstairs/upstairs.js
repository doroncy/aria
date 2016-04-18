import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import tabsStyle from '../../../styles/main/tabs.scss';
import globalStyle from '../../../styles/main/style.scss';
import upstairsStyle from './upstairs.scss';
import menuItems from './menu';
import Wines from './wines';
import Footer from '../footer/footer';
import Gallery from '../gallery/gallery';

import galery1 from './images/Gallery_UP01.jpg';
import galery2 from './images/Gallery_UP02.jpg';
import galery3 from './images/Gallery_UP03.jpg';
import galery4 from './images/Gallery_UP04.jpg';
import galery5 from './images/Gallery_UP05.jpg';
import galery6 from './images/Gallery_UP06.jpg';
import galery7 from './images/Gallery_UP07.jpg';
import galery8 from './images/Gallery_UP08.jpg';
import galery9 from './images/Gallery_UP09.jpg';
import galery10 from './images/Gallery_UP10.jpg';
import galery11 from './images/Gallery_UP11.jpg';
import galery12 from './images/Gallery_UP12.jpg';

const galleryImages = [galery1, galery2, galery3, galery4, galery5, galery6, galery7, galery8, galery9, galery10, galery11, galery12];

const upstairsInfo = {
  title: 'The restaurant',
  description: 'Aria is a contemporary Chef Bistro offering a fresh and innovative menu created by Chef Guy Gamzu, one of the promising young chefs of Tel Aviv. Chef Gamzu created a diverse seasonal menu, meticulously conjured from prime raw materials.',
  bg: 'upstairs-bg',
  items: []
}

let galleryInfo = {
  title: 'Gallery',
  bg: 'upstairs-gallery-1',
  items: []
}


export default class Upstairs extends Component {
  constructor(props) {
    super();

    this.state = {
      currentTab: upstairsInfo,
      tabIndex: 0,
      galleryIndex: 1,
      showMenuTabs: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toogleGallery = this.toogleGallery.bind(this);
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

  bgImageChange(index) {
    galleryInfo.bg = `upstairs-gallery-${index}`;
    this.setState({
      currentTab: galleryInfo
    });
  }

  toggleMenu() {
    this.setState({
      showMenuTabs: !this.state.showMenuTabs
    });
  }

  toogleGallery() {
    this.setState({
      currentTab: this.state.currentTab === galleryInfo
        ? upstairsInfo
        : galleryInfo
    });
  }

  render() {
    let tabs = _.map(menuItems, (menuItem, index) => {
      let isTabSelected = this.state.tabIndex === index ? "selected" : "";
      return (
        <div key={index} className="large-2 columns xs-padding-sides">
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
    let galleryArrows = '';
    let gallery = '';

    if (this.state.currentTab === upstairsInfo) {
      contentBody = (
        <div>
          <div className="gold-subtitle font-ExBold">The Restaurant</div>
          <div className="upstairs-info-desc font-light">{upstairsInfo.description}</div>
        </div>
      );
    } else if (this.state.currentTab === galleryInfo) {
      galleryModeClass = 'gallery'
      gallerySelected = 'selected'
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
                  <div className="content-box tabs-header" onClick={this.changeTab.bind(this,upstairsInfo)}>
                    <div className="SVGIcon upstairs-menu-title"></div>
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
              <div className={`hide-for-medium content-box content-box-btn table-btn ${gallerySelected}`} onClick={this.toogleGallery}>
                <div className="content-box-title content-box-title-small">Gallery</div>
              </div>
              <div className="action-btn-wrap-flex">
                <div className={`show-for-medium content-box content-box-btn table-btn ${gallerySelected}`} onClick={this.changeTab.bind(this,galleryInfo)}>
                  <div className="content-box-title content-box-title-small">Gallery</div>
                </div>
                <div className="content-box content-box-btn table-btn">
                  <a href="http://clickiframe.clickatable.co.il/%D7%9E%D7%A1%D7%A2%D7%93%D7%AA-%D7%90%D7%A8%D7%99%D7%94-%D7%9E%D7%A1%D7%A2%D7%93%D7%94.aspx" target="_blank">
                    <div className="content-box-title content-box-title-small">Reserve a table</div>
                  </a>
                </div>
                <div className="content-box content-box-btn social-media-btn facebook-btn">
                  <a href="https://www.facebook.com/ariatlv" target="_blank">
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
