import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from 'config/create-store';
import Application from 'components/application';


const hotRender = (root: Node) => {
  /* eslint-disable global-require */
  const RedBox = require('redbox-react').default;
  /* eslint-enable global-require */
  try {
    render(
      <AppContainer>
        <Application store={store} />
      </AppContainer>,
      root,
    );
  } catch (e) {
    render(<RedBox error={e} />, root);
  }
};

hotRender(document.getElementById('root'));

module.hot.accept('components/application', hotRender);
