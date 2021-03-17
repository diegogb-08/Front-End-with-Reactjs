import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import appointReducer from './appointReducer.js'

const rootReducer = combineReducers({
    userReducer,
    appointReducer
});

export default rootReducer;