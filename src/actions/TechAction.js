import {GET_TECHS, SET_LOADING,ADD_TECH,DELETE_TECH,TECHS_ERROR} from './types';


//Action to get all the techs
export const getTechs = () => async dispatch =>  {
    try{
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
    
        dispatch({
            type:GET_TECHS,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        });
    }
};

//Action to add new tech 
export const addTech = tech => async dispatch =>  {
    try{
        setLoading();
        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
            'Content-Type':'application/json' 
        }
        });
        const data = await res.json();
    
        dispatch({
            type:ADD_TECH,
            payload:data
        });
    } catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        });
    }
};

//Action to delete a tech from server 
export const deleteTech = id => async dispatch =>  {
    try{
        setLoading();
        await fetch(`/techs/${id}`,{
            method: 'DELETE',
        });
        dispatch({
            type:DELETE_TECH,
            payload:id
        });
    } catch(err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        });
    }
};


//set the loading in the log state to true when api is called.
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
};