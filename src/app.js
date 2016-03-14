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
import Loading from './components/loading/loading';


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
      animName = 'moveUp';
    } else if (this.props.location.pathname === '/downstairs') {
      animName = 'moveDown';
    } else if (lastLocationPathname === '/upstairs') {
      animName = 'moveDown';
    } else if (lastLocationPathname === '/downstairs') {
      animName = 'moveUp';
    }
    lastLocationPathname = this.props.location.pathname;

    let themeColor = !this.state.menuVisible
      ? 'B'
      : 'W';

    let menuBtn = '';
    if (this.props.location.pathname !== '/loading') {
      menuBtn = (
        <button type="button" className={`overlay-toggle-btn SVGIcon icon-TRIANGLE_corner_${themeColor}`} onClick={this.toggleMenu}>Close</button>
      );
    }

    return (
      <div className={`page-wrap theme-${themeColor}`}>
        <ReactCSSTransitionGroup
            component="div"
            className="anim-wrap"
            transitionName={animName}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <Link to="/home">
              <div className={`logo-head SVGIcon icon-Logo_head_${themeColor} icon-Logo_head-dims`}></div>
            </Link>
            {menuBtn}
            <OverlayMenu menuVisible={this.state.menuVisible} toggleMenu={this.toggleMenu}></OverlayMenu>
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
        </ReactCSSTransitionGroup>
        </div>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="loading" component={Loading} />
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
