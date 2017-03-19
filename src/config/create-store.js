// @flow
import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import api from 'components/api';

import {
  reducer as currentUserReducer,
  STATE_KEY,
} from 'modules/current-user';

const rootReducer = combineReducers({
  [STATE_KEY]: currentUserReducer,
  router: routerReducer,
});

const history = createHistory();

const middleware = [
  routerMiddleware(history),
  thunk.withExtraArgument(api),
];

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export {
  store as default,
  history,
};
