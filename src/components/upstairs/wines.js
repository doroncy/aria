import React, { Component } from 'react';
import _ from 'lodash';

export default class Upstairs extends Component {
  constructor(props) {
    super();
  }

  render() {
    let glassList = _.map(this.props.items.glass, (glassType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className="menuitem-name font-SemiBold">{glassType.title}</div>
          <ul className="menuitem-description font-light no-bullet">
            {_.map(glassType.items, (menuItem, menuItemIndex) => {
              return <li key={menuItemIndex}>{menuItem}</li>
            })}
          </ul>
        </li>
      );
    });

    let halfBottleList = _.map(this.props.items.halfBottle, (halfBottleType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className="menuitem-name font-SemiBold">{halfBottleType.title}</div>
          <ul className="menuitem-description font-light no-bullet">
            {_.map(halfBottleType.items, (menuItem, menuItemIndex) => {
              return <li key={menuItemIndex}>{menuItem}</li>
            })}
          </ul>
        </li>
      );
    });

    let bottleList = _.map(this.props.items.bottle, (bottleType, index) => {
      return (
        <li className="menuitem" key={index}>
          <div className="menuitem-name font-SemiBold">{bottleType.title}</div>
          <ul className="no-bullet">
            {_.map(bottleType.countries, (country, countryIndex) => {
              return (
                <li key={countryIndex}>
                  <div className="menuitem-name font-SemiBold">{country.name}</div>
                  <ul className="menuitem-description font-light no-bullet">
                    {_.map(country.items, (countryItem, countryItemIndex) => {
                      return <li key={countryItemIndex}>{countryItem}</li>
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
        <div className="menu-subtitle font-ExBold">By the Glass</div>
        <ul className="no-bullet" ref="contentList">
          {glassList}
        </ul>
        <div className="menu-subtitle font-ExBold">Half a bottle</div>
        <ul className="no-bullet" ref="contentList">
          {halfBottleList}
        </ul>
        <div className="menu-subtitle font-ExBold">By the Bottle</div>
        <ul className="no-bullet" ref="contentList">
          {bottleList}
        </ul>
      </div>
    );
  }


}
