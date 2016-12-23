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

const getDefaultState = () => ({
  data: {
    loggedIn: false,
  },
});

const currentUser = createReducer(getDefaultState(), {
  [actions.LOG_IN.REQUESTED]: (state, { payload }) => ({
    ...state,
    id: payload.id,
    loading: true,
  }),
  [actions.LOG_IN.FULFILLED]: (state, { payload }) => ({
    ...state,
    loggedIn: true,
    loading: false,
    ...payload,
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

export const logIn = ({ user, pass }) => ({
  type: actions.LOG_IN.REQUESTED,
  payload: {
    user,
    pass,
  },
});

export function* rootSaga() {
  yield [
    watchLogIn(),
  ];
}

export default currentUser;
