import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import actions from './action-types';
import {
  logOut,
  logIn,
  rootSaga,
} from './index';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe('Current User Module', () => {
  const store = mockStore({});
  sagaMiddleware.run(rootSaga);

  describe('Log In', () => {
    it('Should be able to dispatch async log in action', () => {
      store.dispatch(logIn({
        user: 'macho_man',
        pass: 'ooooh yeahhhh!!!',
      }));
      const actual = store.getActions()[0];
      const expected = {
        type: actions.LOG_IN.REQUESTED,
        payload: {
          user: 'macho_man',
          pass: 'ooooh yeahhhh!!!',
        },
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('Log Out', () => {
    it('Should be able to dispatch sync log out', () => {
      const actual = logOut();
      const expected = { type: actions.LOG_OUT };
      expect(actual).toEqual(expected);
    });
  });
});
