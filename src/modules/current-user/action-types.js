// @flow
import creator, {
  ASYNC,
  SYNC,
} from 'config/createActions';

export default creator('APP', {
  LOG_IN: ASYNC,
  LOG_OUT: SYNC,
});
