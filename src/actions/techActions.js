import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING
} from './types';
import axios from 'axios';



// Get Tech from Server 
export const getTechs = () => async dispatch =>{
    try {
        setLoading();
        const res = await axios.get('/techs');
        dispatch({
            type: GET_TECHS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response
        });
    }
}

// Add Tech to DB
export const addTech = (tech) => async dispatch =>{
    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        setLoading();
        const res = await axios.post('/techs', tech, config);
        dispatch({
            type: ADD_TECH,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response
        });
    }
}

// Delete Log From Server
export const deleteTech = (id) => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`/techs/${id}`);
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response
        });
    }
}


// Set Loading True
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}