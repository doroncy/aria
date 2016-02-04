import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './upstairs.scss';

const bgImages = [
  '../../assets/images/Home_ARIA01.jpg',
  '../../assets/images/Home_ARIA02.jpg',
  '../../assets/images/Home_ARIA03.jpg',
  '../../assets/images/Home_ARIA04.jpg',
  '../../assets/images/Home_ARIA05.jpg'
];

export default class Upstairs extends Component {
  constructor(props) {
    super();

    //this.updateState = this.updateState.bind(this);
  }

  render() {
    return(
      <div className="height100 red-bg">
        <div className="row">
          <div className="small-12 medium-10 small-centered columns">
            <div className="content-box content-box-light">
              <Link to="/home">
                <h3 className="content-box-title">Upstairs</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
