import * as api from '../api';

export const getProblems = () => async(dispatch) => {

    try{
        const {data} = await api.fectchProblems();
        const action = {type: 'FETCH_ALL', payload: data}
        dispatch(action);
    }
    catch(err){
        console.log(err.message);
    }

    
}