import {combineReducers} from 'redux';
import UserReducers from './UserReducers';

const allReducers = combineReducers({
    users: UserReducers
  });

export default allReducers;
