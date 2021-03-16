import {LOGIN, LOGOUT} from '../types/usertype';

const initialState = {
    user: []
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                user : action.payload
            }

        case LOGOUT :
            return {
                ...state,
                user : action.payload
            }

        default : 
            return state
    }
};

export default userReducer;