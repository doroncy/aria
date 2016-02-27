import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import { createHistory } from 'history'
import OverlayMenu from './components/OverlayMenu/overlay-menu.js';

// Import global styles
import foundation from '../styles/foundation/foundation.scss'
import style from '../styles/main/style.scss'
import IconStyle from '../styles/main/icon-svg-data.scss';

// Import Route Files
import Upstairs from './components/upstairs/upstairs';
import Downstairs from './components/downstairs/downstairs';
import Home from './components/home/home';
import Philosophy from './components/philosophy/philosophy';
import Moments from './components/moments/moments';
import Team from './components/team/team';
import Tripping from './components/tripping/tripping';
import Music from './components/music/music';
import Events from './components/events/events';


let lastLocationPathname = '/'
const App = React.createClass({
  getInitialState: function() {
    return {menuVisible: false};
  },

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  },

  render() {
    let animName = 'moveDown';
    if (this.props.location.pathname === '/upstairs') {
      animName = 'moveDown';
    } else if (this.props.location.pathname === '/downstairs') {
      animName = 'moveUp';
    } else if (lastLocationPathname === '/upstairs') {
      animName = 'moveUp';
    } else if (lastLocationPathname === '/downstairs') {
      animName = 'moveDown';
    }
    lastLocationPathname = this.props.location.pathname;

    let themeColor = !this.state.menuVisible
      ? 'B'
      : 'W';

    return (
      <div className={`page-wrap theme-${themeColor}`}>
      <ReactCSSTransitionGroup
          component="div"
          className="anim-wrap"
          transitionName={animName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className={`logo-head SVGIcon icon-Logo_head_${themeColor} icon-Logo_head-dims`}></div>
          <button type="button" className={`overlay-toggle-btn SVGIcon icon-TRIANGLE_corner_${themeColor}`} onClick={this.toggleMenu}>Close</button>
          <OverlayMenu menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}></OverlayMenu>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
          <div className="footer-wrap">
            <div className="row">
              <div className="small-12 medium-10 columns small-centered">
                <div className="row no-margin-left no-margin-right">
                  <div className="small-12 columns medium-2 show-for-small-only">
                    <a href="https://soundcloud.com/aria-bar" target="_blank">
                      <div className="SVGIcon icon-icon_SOUNDCLOUDE icon-icon_SOUNDCLOUDE-dims centered"></div>
                    </a>
                  </div>
                  <div className="small-12 columns medium-5 aria-copy no-padding-left">
                    <div className="footer-text">Copyright 2016 ARIA. All Rights Reserved.</div>
                  </div>
                  <div className="small-12 columns medium-2 show-for-medium">
                    <a href="https://soundcloud.com/aria-bar" target="_blank">
                      <div className="SVGIcon icon-icon_SOUNDCLOUDE icon-icon_SOUNDCLOUDE-dims centered"></div>
                    </a>
                  </div>
                  <div className="small-12 columns medium-5 done-by no-padding-right">
                    <div className="footer-text">
                      <a className="footer-text" href="http://studio-y-o.com/" target="_blank">Designed by STUDIO Y&O</a> |
                      <a className="footer-text" href="https://github.com/doroncy" target="_blank"> Dev by Doron Cyngiser</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ReactCSSTransitionGroup>
        </div>

    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="upstairs" component={Upstairs} />
      <Route path="downstairs" component={Downstairs} />
      <Route path="philosophy" component={Philosophy} />
      <Route path="moments" component={Moments} />
      <Route path="team" component={Team} />
      <Route path="tripping" component={Tripping} />
      <Route path="music" component={Music} />
      <Route path="events" component={Events} />      
    </Route>
  </Router>
), document.getElementById('root'));
