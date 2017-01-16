// @flow
import creator, {
  ASYNC,
  SYNC,
} from 'config/create-actions';

export default creator('myApp', {
  LOG_IN: ASYNC,
  LOG_OUT: SYNC,
});
