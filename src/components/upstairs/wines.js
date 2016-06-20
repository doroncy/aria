import React, { Component } from 'react';
import _ from 'lodash';

export default class Upstairs extends Component {
  constructor(props) {
    super();
  }

  render() {
    let hebLangClass = this.props.hebLangClass || '';
    let glassList = _.map(this.props.items.glass.items, (glassType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className={`menuitem-name font-SemiBold ${hebLangClass}`}>{glassType.title}</div>
          <ul className="menuitem-description font-light no-bullet">
            {_.map(glassType.items, (menuItem, menuItemIndex) => {
              return <li key={menuItemIndex} className={hebLangClass}>{menuItem}</li>
            })}
          </ul>
        </li>
      );
    });

    let halfBottleList = _.map(this.props.items.halfBottle.items, (halfBottleType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className={`menuitem-name font-SemiBold ${hebLangClass}`}>{halfBottleType.title}</div>
          <ul className="menuitem-description font-light no-bullet">
            {_.map(halfBottleType.items, (menuItem, menuItemIndex) => {
              return <li key={menuItemIndex} className={hebLangClass}>{menuItem}</li>
            })}
          </ul>
        </li>
      );
    });

    let bottleList = _.map(this.props.items.bottle.items, (bottleType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className={`menuitem-name font-SemiBold ${hebLangClass}`}>{bottleType.title}</div>
          <ul className="no-bullet">
            {_.map(bottleType.countries, (country, countryIndex) => {
              return (
                <li key={countryIndex}>
                  <div className={`menuitem-name font-SemiBold ${hebLangClass}`}>{country.name}</div>
                  <ul className="menuitem-description font-light no-bullet">
                    {_.map(country.items, (countryItem, countryItemIndex) => {
                      return <li key={countryItemIndex} className={hebLangClass}>{countryItem}</li>
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </li>
      );
    });

    return(
      <div className="pad-bottom-lg">
        <div className="menu-title font-ExBold">Wine Cellar</div>
        <div className={`menu-subtitle font-ExBold ${hebLangClass}`}>{this.props.items.glass.title}</div>
        <ul className="no-bullet" ref="contentList">
          {glassList}
        </ul>
        <div className={`menu-subtitle font-ExBold ${hebLangClass}`}>{this.props.items.halfBottle.title}</div>
        <ul className="no-bullet" ref="contentList">
          {halfBottleList}
        </ul>
        <div className={`menu-subtitle font-ExBold ${hebLangClass}`}>{this.props.items.bottle.title}</div>
        <ul className="no-bullet" ref="contentList">
          {bottleList}
        </ul>
      </div>
    );
  }


}
