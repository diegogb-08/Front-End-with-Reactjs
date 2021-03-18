
import {CREATE, FIND, DELETE} from '../types/appointtype';



const initialState = {
    appointment: [],
 
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
                appointment : action.payload
            }

        default : 
            return state
    }
};

export default appointReducer;