// @flow
import { createReducer } from 'redux-create-reducer';
import actions from './action-types';

const STATE_KEY = 'currentUser';

const getDefaultState = (): CurrentUserState => ({
  authenticated: false,
  loading: false,
});

const reducer = createReducer(getDefaultState(), {
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
  [actions.LOG_OUT.REQUESTED]: (state: CurrentUserState) => ({
    ...state,
    authenticated: false,
    loading: false,
    id: null,
  }),
});

const createLogIn = ({ user, pass }: Credentials) => (
  async (dispatch, getState, { logIn }) => {
    dispatch({
      type: actions.LOG_IN.REQUESTED,
      payload: {
        user,
        pass,
      },
    });
    try {
      const data = await logIn({
        user,
        pass,
      });
      dispatch({
        type: actions.LOG_IN.FULFILLED,
        payload: {
          ...data,
        },
      });
    } catch (err) {
      dispatch({
        type: actions.LOG_IN.REJECTED,
        error: true,
        payload: new Error(err),
      });
    }
  }
);

const createLogOut = () => (
  async (dispatch, getState, { logOut }) => {
    const user = getState().currentUser.id;
    dispatch({
      type: actions.LOG_OUT.REQUESTED,
      payload: {
        user,
      },
    });
    try {
      const data = await logOut({
        user,
      });
      dispatch({
        type: actions.LOG_OUT.FULFILLED,
        payload: {
          data,
        },
      });
    } catch (err) {
      dispatch({
        type: actions.LOG_OUT.REJECTED,
        error: true,
        payload: new Error(err),
      });
    }
  }
);

const actionCreators = {
  logOut: createLogOut,
  logIn: createLogIn,
};

export {
  reducer,
  actionCreators,
  actions as actionTypes,
  STATE_KEY,
};
