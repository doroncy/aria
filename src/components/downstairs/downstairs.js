import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './downstairs.scss';

export default class Downstairs extends Component {
  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="height100 red-bg">
        <div className="row">
          <div className="small-12 medium-10 small-centered columns">
            <div className="content-box content-box-light">
              <Link to="/home">
                <h3 className="content-box-title">downstairs</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
