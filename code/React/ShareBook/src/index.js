import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppLayout from './AppLayout'
import Books from './Books';
import BookDetail from './BookDetail';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Books} />
      <Route path="/detail/:id" component={BookDetail} />
    </Route>
  </Router>
), document.getElementById('root'))