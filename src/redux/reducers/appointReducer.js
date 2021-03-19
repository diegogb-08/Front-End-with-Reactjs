import {CREATE, FIND, DELETE} from '../types/appointType';

const initialState = {
    appointment: [],
    totalAppoint: 0 
 
};

const appointReducer = (state = initialState, action) => {
    switch(action.type){
        case FIND :
            return {
                ...state,
                appointment : action.payload,
                
            }

        case CREATE :
            return {
                ...state,
                appointment : action.payload,
                
      
            }

        case DELETE :
            return {
                ...state,
                appointment : initialState
            }

        default : 
            return state
    }
};

export default appointReducer;