import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import appointReducer from './appointReducer.js'
import adminReducer from './adminReducer'

const rootReducer = combineReducers({
    userReducer,
    appointReducer,
    adminReducer
});

export default rootReducer;