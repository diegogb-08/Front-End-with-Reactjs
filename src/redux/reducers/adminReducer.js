import {LOGIN, LOGOUT} from '../types/adminType';

const initialState = {
    admin: {},
    // token: ''

};

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                admin : action.payload,
                // token : action.payload.token,
            }

        case LOGOUT :
            return initialState

        default : 
            return state
    }
};

export default adminReducer;