import React, { Component } from 'react';

export default class Upstairs extends Component {
  constructor(props) {
    super();

    this.state = {
      menu: {}
    };

    //this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="row">
        <div className="small-12 medium-10 small-centered columns">
          <div className="content-box content-box-light">
            <h3 className="content-box-title">Upstairs</h3>
          </div>
        </div>
      </div>
    );
  }
}
