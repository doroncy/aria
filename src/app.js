import React from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history'

// Import global styles
import foundation from '../styles/foundation/foundation.scss'
import style from '../styles/main/style.scss'

// Import Route Files
import Upstairs from './components/upstairs/upstairs';

const App = React.createClass({
  render() {
    return (
      <div className="fullscreen background bg1">
        <h1>Aria</h1>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
});

render((
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Upstairs} />
      <Route path="upstairs" component={Upstairs} />
    </Route>
  </Router>
), document.getElementById('root'));
