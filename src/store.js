import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleare = [thunk];

const store = createStore(
        rootReducer, 
        initialState, 
        composeWithDevTools(
            applyMiddleware(...middleare))
        );
export default store;


 