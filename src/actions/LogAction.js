import {GET_LOGS, SET_LOADING,ADD_LOGS,DELETE_LOGS,UPDATE_LOGS,SET_CURRENT,SEARCH_LOGS,CLEAR_CURRENT,LOGS_ERROR} from './types';

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



//Action to delete a log from server 
export const deleteLog = id => async dispatch =>  {
    try{
        setLoading();
        await fetch(`/logs/${id}`,{
            method: 'DELETE',
        });
        dispatch({
            type:DELETE_LOGS,
            payload:id
        });
    } catch(err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
};

//Action to update a log
export const updateLog = log => async dispatch =>  {
    try{
        setLoading();
        const res = await fetch(`/logs/${log.id}`,{
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
            'Content-Type':'application/json' 
        }
        });
        const data = await res.json(); 
        dispatch({
            type:UPDATE_LOGS,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
};

//Action to search for logs
export const searchLogs = (text) => async dispatch =>  {
    try{
        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();
        dispatch({
            type:SEARCH_LOGS,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:LOGS_ERROR,
            payload:err.response.data
        });
    }
};



//Set Current log 
export const setCurrent = log => {
   return {
       type: SET_CURRENT,
       payload: log
   }
}

//Clear Current log 
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
 }
 
//set the loading in the log state to true when api is called.
export const setLoading = () => {
       return {
           type:SET_LOADING
       }
};