// @flow
import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import currentUser, {
  rootSaga as currentUserSaga,
} from 'modules/current-user';

function* rootSaga() {
  yield [
    currentUserSaga(),
  ];
}

const rootReducer = combineReducers({
  currentUser,
});
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
