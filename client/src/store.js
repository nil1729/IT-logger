import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';


const middleware = [thunk];
const initialState = {};
let store = createStore(reducers, initialState, applyMiddleware(...middleware));

if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}


export default store;