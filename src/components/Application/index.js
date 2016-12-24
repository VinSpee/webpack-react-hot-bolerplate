// @flow
import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Provider } from 'react-redux';
import Dashboard from 'components/dashboard';
import Home from 'components/home';
import Header from 'components/header';

import './styles.css';

const Application = ({ store }: {
  store: Store,
}) => (
  <Provider store={store}>
    <BrowserRouter>
      <span>
        <Header />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/dashboard" component={Dashboard} />
      </span>
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store: Provider.propTypes.store,
};

export default Application;
