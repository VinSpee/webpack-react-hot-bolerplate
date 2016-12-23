// @flow
import actionTypesCreator, {
  SYNC,
  ASYNC,
} from 'redux-action-types-creator';

const creator = (
  ns: string = 'APP',
  actions: {
    [name: string]: SYNC | ASYNC,
  } = {},
) => {
  const actionType = actionTypesCreator(ns, {
    asyncSuffix: [
      'REQUESTED', 'FULFILLED', 'REJECTED',
    ],
  });
  return actionType(actions);
};

export {
  creator as default,
  SYNC,
  ASYNC,
};
