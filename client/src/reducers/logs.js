import {
    GET_TECHS,
    LOG_ERROR,
    ADD_LOG,
    GET_LOGS,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG
} from '../actions/types';

const initialState = {
    techs: null,
    logs: null,
    errors: null,
    loading: true,
    current: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [action.payload, ...state.logs]
            };
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                    loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log._id !== action.payload._id)
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: action.payload
            };
        case SET_CURRENT:
            return {
                ...state,
                current: state.logs.find(log => log._id === action.payload)
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        default:
            return state;
    }
}