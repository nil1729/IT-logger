import {
    GET_LOGS,
    ADD_LOG,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    CLEAR_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    SEARCH_LOGS
} from './types';
import axios from 'axios';


// get Logs From Server
export const getLogs = () => async dispatch =>{
    try {
        setLoading();
        const res = await axios.get('/logs');
        dispatch({
            type: GET_LOGS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        });
    }
}

// Add log to DB
export const addLog = (log) => async dispatch =>{
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        setLoading();
        const res = await axios.post('/logs', log, config);
        dispatch({
            type: ADD_LOG,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        });
    }
}

// Delete Log From Server
export const deleteLog = (id) => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`/logs/${id}`);
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        });
    }
}

// Set Current log to Edit Modal
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// Clear Current log 
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// Update a log to DB
export const updateLog = (log) => async dispatch =>{
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        setLoading();
        const res = await axios.put(`/logs/${log.id}`, log, config);
        dispatch({
            type: UPDATE_LOG,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        });
    }
}

// Search Logs
export const searchLogs = (text) => async dispatch =>{
    try {
        clearLogs();
        setLoading();
        const res = await axios.get(`/logs?q=${text}`);
        dispatch({
            type: SEARCH_LOGS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        });
    }
}

// Clear Logs 
export const clearLogs = () => {
    return {
        type: CLEAR_LOGS
    }
}


// Set Loading True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


