import {GET_LOGS, SET_LOADING,LOGS_ERROR,ADD_LOGS} from './types';

//Action to get all the logs
export const getLogs = () => async dispatch =>  {
    try{
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
    
        dispatch({
            type:GET_LOGS,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
};

//Action to add new log  
export const addLogs = log => async dispatch =>  {
    try{
        setLoading();
        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
            'Content-Type':'application/json' 
        }
        });
        const data = await res.json();
    
        dispatch({
            type:ADD_LOGS,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
};


//set the loading in the log state to true when api is called.
export const setLoading = () => {
       return {
           type:SET_LOADING
       }
};