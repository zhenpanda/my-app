// App root
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import App from './components/App';
import Featured from './components/Featured'
import Settings from './pages/Settings'

// ReactDOM.render(<App />,document.getElementById('app'));

const app = document.getElementById('app');
ReactDOM.render(
  //routes
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="settings" component={Settings}></Route>
      </Route>
  </Router>,
app);
