import {GET_LOGS, SET_LOADING,ADD_LOGS,DELETE_LOGS,UPDATE_LOGS,SET_CURRENT,SEARCH_LOGS,CLEAR_CURRENT,LOGS_ERROR} from '../actions/types';

const initialState = {
    logs: null,
    current: null,
    loading:false,
    error:null
}

export default (state=initialState,action) => {
    switch(action.type) {  
        case GET_LOGS:
             return {
                  ...state,
                  logs:action.payload,
                  loading:false
             };
        case ADD_LOGS:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading:false
            };   
        case DELETE_LOGS:
            return {
                ...state,
                logs:state.logs.filter(log=>log.id!==action.payload),
                loading:false
            }
            case UPDATE_LOGS:
                return {
                    ...state,
                    logs:state.logs.map(log=>log.id===action.payload.id?action.payload:log),
                    loading:false
                }
        case SET_CURRENT:
            return {
                ...state,
                current:action.payload
            }
        case  CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }   

        case SET_LOADING:
            return {
            ...state,
            loading:true  
           }

           case SEARCH_LOGS:
            return {
            ...state,
             logs:action.payload 
           }

           case LOGS_ERROR:
               console.log(action.payload)
            return {
                 ...state,
                 error:action.payload
            }
   
        default: 
        return state;        
    }
}