import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory } from 'history'

// Import global styles
import foundation from '../styles/foundation/foundation.scss'
import style from '../styles/main/style.scss'

// Import Route Files
import Upstairs from './components/upstairs/upstairs';
import Downstairs from './components/downstairs/downstairs';
import Home from './components/home/home';

let lastLocationPathname = '/'
const App = React.createClass({
  render() {
    console.log('this.props', this.props);
console.log('lastLocationPathname', lastLocationPathname);
    let animName = 'moveDown';
    if (this.props.location.pathname === '/upstairs') {
      console.log(1);
      animName = 'moveDown';
    } else if (this.props.location.pathname === '/downstairs') {
      console.log(2);
      animName = 'moveUp';
    } else if (lastLocationPathname === '/upstairs') {
      console.log(3);
      animName = 'moveUp';
    } else if (lastLocationPathname === '/downstairs') {
      console.log(4);
      animName = 'moveDown';
    }

    lastLocationPathname = this.props.location.pathname;
    console.log(animName);

    return (

      <div className="height100">
      <ReactCSSTransitionGroup
          component="div"
          className="anim-wrap"
          transitionName={animName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className="logo-head SVGIcon icon-Logo_head_B icon-Logo_head_B-dims"></div>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
      </ReactCSSTransitionGroup>
        </div>

    );
  }
});

render((
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="upstairs" component={Upstairs} />
      <Route path="downstairs" component={Downstairs} />
    </Route>
  </Router>
), document.getElementById('root'));
