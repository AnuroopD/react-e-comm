import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const intialState = {};

export default createStore(rootReducer, intialState , applyMiddleware(thunk));