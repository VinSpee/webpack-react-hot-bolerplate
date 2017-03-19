// @flow
import creator, {
  ASYNC,
  // SYNC,
} from 'config/create-actions';

export default creator('myApp/CURRENT_USER', {
  LOG_IN: ASYNC,
  LOG_OUT: ASYNC,
});
