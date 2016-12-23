// @flow
import {
  takeEvery,
  delay,
} from 'redux-saga';
import {
  put,
  call,
} from 'redux-saga/effects';
import { createReducer } from 'redux-create-reducer';
import actions from './action-types';

const getDefaultState = (): CurrentUserState => ({
  loggedIn: false,
  loading: false,
});

const currentUser = createReducer(getDefaultState(), {
  [actions.LOG_IN.REQUESTED]: (state: CurrentUserState, { payload }) => ({
    ...state,
    id: payload.id,
    loading: true,
  }),
  [actions.LOG_IN.FULFILLED]: (state: CurrentUserState, { payload }) => ({
    ...state,
    loggedIn: true,
    loading: false,
    ...payload,
  }),
  [actions.LOG_OUT]: (state: CurrentUserState) => ({
    ...state,
    loggedIn: false,
    loading: false,
    id: null,
  }),
});

function* handleLogIn(/* { payload } */) {
  // const result = yield call(doSomeAPICall, payload);
  yield call(delay, 1000);
  yield put({ type: actions.LOG_IN.FULFILLED });
}

function* watchLogIn() {
  yield takeEvery(actions.LOG_IN.REQUESTED, handleLogIn);
}

export const logIn = ({ user, pass }: Credentials) => ({
  type: actions.LOG_IN.REQUESTED,
  payload: {
    user,
    pass,
  },
});

export const logOut = () => ({
  type: actions.LOG_OUT,
});

export function* rootSaga(): Iterable<*> {
  yield [
    watchLogIn(),
  ];
}

export default currentUser;
