import {
    combineReducers
} from 'redux';
import authReducers from './auth';
export default combineReducers({
    auths: authReducers
});