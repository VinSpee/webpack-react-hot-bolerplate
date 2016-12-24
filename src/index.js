// @flow
import React from 'react';
import { render } from 'react-dom';

import store from 'config/create-store';
import Application from 'components/application';

render(
  <Application store={store} />,
  document.getElementById('root'),
);
