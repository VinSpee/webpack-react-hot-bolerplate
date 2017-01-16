// @flow
import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';
import { createReducer } from 'redux-create-reducer';
import api from 'components/api';
import actions from './action-types';

const getDefaultState = (): CurrentUserState => ({
  authenticated: false,
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
    authenticated: true,
    loading: false,
    ...payload,
  }),
  [actions.LOG_OUT]: (state: CurrentUserState) => ({
    ...state,
    authenticated: false,
    loading: false,
    id: null,
  }),
});

export function* handleLogIn({ payload }: Action): Iterable<*> {
  let data;
  try {
    data = yield call(api.logIn, payload);
  } catch (err) {
    throw new Error(err);
  }
  try {
    yield put({
      type: actions.LOG_IN.FULFILLED,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: actions.LOG_IN.REJECTED,
      payload: new Error(err),
    });
  }
}

export function* watchLogIn(): Iterable<*> {
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
