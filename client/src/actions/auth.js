import {
    REGISTER_USER,
    LOGIN_USER,
    AUTH_ERROR,
    LOGOUT
} from './types';

const sendRequset = async (body) => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body,
        redirect: 'follow'
    };
    try {
        const res = await fetch('/api_graphql', requestOptions);
        const JSONData = await res.json();
        const {
            errors,
            data
        } = JSONData;
        return {
            errors,
            data
        };
    } catch (e) {
        console.log(e);
    }
}

export const registerUser = (user) => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
                mutation {
                    registerUser(userInput: {email: "${user.email}", name: "${user.name}", password: "${user.password}"}){
                        token
                        user {
                            name
                            email
                            _id
                        }
                    }
                }
            `
        })
        const res = await sendRequset(query);
        if (res.errors) {
            return dispatch({
                type: AUTH_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: REGISTER_USER,
                payload: res.data.registerUser
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: AUTH_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
}

export const loginUser = (user) => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
                mutation {
                    loginUser(userInput: {email: "${user.email}", password: "${user.password}"}){
                        token
                        user {
                            name
                            email
                            _id
                        }
                    }
                }
            `
        })
        const res = await sendRequset(query);
        if (res.errors) {
            return dispatch({
                type: AUTH_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: LOGIN_USER,
                payload: res.data.loginUser
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: AUTH_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
}