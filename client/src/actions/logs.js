import {
    GET_TECHS,
    LOG_ERROR,
    ADD_LOG,
    GET_LOGS,
    DELETE_LOG
} from './types';

const sendRequset = async (body) => {
    const token = localStorage.token;
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    if (token) {
        myHeaders.append('x-auth-token', token);
    }
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
export const getLogs = () => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
                query {
                    logs {
                        _id
                        message
                        attention
                        updatedAt
                        tech {
                            email
                            name
                            _id
                        }
                    }
                }
            `
        });
        const res = await sendRequset(query);
        if (res.errors) {
            console.log(res.errors);
            return dispatch({
                type: LOG_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: GET_LOGS,
                payload: res.data.logs
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: LOG_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
}

export const getTechs = () => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
                query {
                    techs {
                        email
                        name
                        _id
                    }
                }
            `
        });
        const res = await sendRequset(query);
        if (res.errors) {
            console.log(res.errors);
            return dispatch({
                type: LOG_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: GET_TECHS,
                payload: res.data.techs
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: LOG_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
}

export const createLog = (logInput) => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
            mutation {
                createLog (logInput: {message: "${logInput.message}", attention: ${logInput.attention}, tech: "${logInput.tech}" }) {
                  _id
                  message
                  attention
                  updatedAt
                  tech {
                    email
                    name
                    _id
                  }
                }
              }
            `
        })
        const res = await sendRequset(query);
        if (res.errors) {
            console.log(res.errors);
            return dispatch({
                type: LOG_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: ADD_LOG,
                payload: res.data.createLog
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: LOG_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
};

export const deleteLog = (id) => async dispatch => {
    try {
        const query = JSON.stringify({
            query: `
            mutation {
                deleteLog(id: "${id}") {
                  _id
                }
              }
            `
        });
        const res = await sendRequset(query);
        if (res.errors) {
            console.log(res.errors);
            return dispatch({
                type: LOG_ERROR,
                payload: res.errors[0].message
            })
        }
        if (res.data) {
            return dispatch({
                type: DELETE_LOG,
                payload: res.data.deleteLog
            });
        }
    } catch (e) {
        console.log(e);
        return dispatch({
            type: LOG_ERROR,
            payload: 'Sorry! Server Error occurred'
        })
    }
}