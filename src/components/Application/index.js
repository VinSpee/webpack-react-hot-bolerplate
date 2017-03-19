// @flow
import React from 'react';
import {
  ConnectedRouter as Router,
} from 'react-router-redux';
import {
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from 'components/dashboard';
import Home from 'components/home';
import Header from 'components/header';

const Application = ({ store, history }: {
  store: Store,
  history: History,
}) => (
  <Provider store={store}>
    <Router history={history}>
      <span>
        <Header />
        <Route exactly pattern="/" component={Home} />
        { /* istanbul ignore next */}
        <Route exactly pattern="/dashboard" component={Dashboard} />
      </span>
    </Router>
  </Provider>
);

export default Application;
