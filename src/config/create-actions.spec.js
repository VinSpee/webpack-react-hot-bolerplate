import createActionTypes, {
  ASYNC,
  SYNC,
} from './create-actions';

describe('Action Types Creator', () => {
  it('Should accept a namespace', () => {
    const actual = createActionTypes('foo', {
      SAMPLE_ACTION: SYNC,
    });
    expect(actual.SAMPLE_ACTION).toEqual('@@foo/SAMPLE_ACTION');
  });
  it('Should proxy actions', () => {
    const actual = createActionTypes('foo', {
      SAMPLE_ACTION: SYNC,
      SAMPLE_FLOPPY_ACTION: ASYNC,
    });
    expect(actual).toEqual({
      SAMPLE_ACTION: '@@foo/SAMPLE_ACTION',
      SAMPLE_FLOPPY_ACTION: {
        ALL: [
          '@@foo/SAMPLE_FLOPPY_ACTION/REQUESTED',
          '@@foo/SAMPLE_FLOPPY_ACTION/FULFILLED',
          '@@foo/SAMPLE_FLOPPY_ACTION/REJECTED',
        ],
        REQUESTED: '@@foo/SAMPLE_FLOPPY_ACTION/REQUESTED',
        FULFILLED: '@@foo/SAMPLE_FLOPPY_ACTION/FULFILLED',
        REJECTED: '@@foo/SAMPLE_FLOPPY_ACTION/REJECTED',
      },
    });
  });
});
