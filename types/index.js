/* eslint-disable */
import { Store } from 'flow-typed/npm/redux_v3.x.x';

declare type CurrentUserState = {
  authenticated: boolean,
  id?: string,
  loading: boolean,
};

declare type Credentials = {
  user: string,
  pass: string,
};

declare type AppState = {
  currentUser: CurrentUserState,
};

declare type Action = {
  type: string,
  payload?: any,
}
/* eslint-enable */
