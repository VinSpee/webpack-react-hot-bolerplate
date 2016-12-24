// @flow
import creator, {
  ASYNC,
  SYNC,
} from 'config/create-actions';

export default creator('APP', {
  LOG_IN: ASYNC,
  LOG_OUT: SYNC,
});
