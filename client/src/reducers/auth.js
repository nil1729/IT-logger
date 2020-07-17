import {
    REGISTER_USER,
    LOGIN_USER,
    AUTH_ERROR,
    LOGOUT,
    LOAD_USER
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: localStorage.token ? true : false,
    errors: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token,
                    loading: false
            };
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                    user: action.payload.loadUser,
                    loading: false
            };
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: null,
                    loading: false,
                    user: null,
                    token: null,
                    errors: action.payload
            };
        default:
            return state;
    }
}