/* eslint-disable */

import { Store } from 'flow-typed/npm/redux_v3.x.x';

declare type CurrentUserState = {
  loggedIn: boolean,
  id?: string,
  loading: boolean,
};

declare type Credentials = {
  user: string,
  pass: string,
};

declare type AppState = {
  currentUser: CurrentUserState
};
/* eslint-enable */
