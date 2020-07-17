import {
    combineReducers
} from 'redux';
import authReducers from './auth';
import logsReducers from './logs';
export default combineReducers({
    auths: authReducers,
    logs: logsReducers
});