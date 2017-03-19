// @flow
import React from 'react';
import { render } from 'react-dom';

import store, { history } from 'config/create-store';
import Application from 'components/application';

render(
  <Application
    store={store}
    history={history}
  />,
  document.getElementById('root'),
);
