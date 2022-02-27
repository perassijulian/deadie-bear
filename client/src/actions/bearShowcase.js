import * as api from '../api/bears.js';

export const getBears = () => async (dispatch) => {
    try {
        const {data} = await api.getBears();
        console.log('entra actions mal')
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const addBear = (bear) => async (dispatch) => {
    try {
        const { data } = await api.addBear(bear);
        dispatch ({type: "ADD_BEAR" , payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getSpecificBear = (id) => async (dispatch) => {
    try {
        const {data} = await api.getSpecificBear(id);
        console.log('actions: ', data)
        console.log('entra actions bien')
        dispatch({type: "FETCH_SPECIFIC", payload: data});
    } catch (error) {
        console.log(error)
    }
}