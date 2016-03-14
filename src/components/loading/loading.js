import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import loadingStyle from './loading.scss';

export default class Loading extends Component {
  constructor(props) {
    super();

  }

  componentDidMount() {
    setTimeout(()=> {
      browserHistory.push('/home');
    }, 1500);
  }

  render() {
    return(
      <div className="loading-wrap">
        <div className="loading-text">
          Loading ...
        </div>
      </div>
    );
  }
}
