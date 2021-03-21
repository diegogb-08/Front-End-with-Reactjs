import {applyMiddleware, compose, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
	save({state: ['dataUser']})
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    load({
        preloadState : {
            user : {},
        },
        state: ['dataUser']
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) || compose
);

export default store;