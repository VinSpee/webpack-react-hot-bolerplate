import actionTypes from './action-types';

describe('Action Types', () => {
  it('Should create LOG_IN actions', () => {
    const actual = actionTypes.LOG_IN;
    expect(actual).toEqual({
      ALL: [
        '@@myApp/LOG_IN/REQUESTED',
        '@@myApp/LOG_IN/FULFILLED',
        '@@myApp/LOG_IN/REJECTED',
      ],
      REQUESTED: '@@myApp/LOG_IN/REQUESTED',
      REJECTED: '@@myApp/LOG_IN/REJECTED',
      FULFILLED: '@@myApp/LOG_IN/FULFILLED',
    });
  });
  it('Should create a LOG_OUT action', () => {
    const actual = actionTypes.LOG_OUT;
    expect(actual).toEqual('@@myApp/LOG_OUT');
  });
});
