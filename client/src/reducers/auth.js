import {
    REGISTER_USER,
    LOGIN_USER,
    AUTH_ERROR,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: null,
    user: null,
    isAuthenticated: null,
    loading: true,
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
                    token: action.payload.token
            };
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: null,
                    user: null,
                    token: null,
                    errors: action.payload
            };
        default:
            return state;
    }
}