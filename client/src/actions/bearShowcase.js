import * as api from '../api/bears.js';
import * as actionsType from '../actionsType.js';

export const getBears = () => async (dispatch) => {
    try {
        const {data} = await api.getBears();
        return ({type: actionsType.FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const addBear = (bear) => async (dispatch) => {
    try {
        const { data } = await api.addBear(bear);
        return ({type: actionsType.ADD_BEAR , payload: data})
    } catch (error) {
        console.log(error)
    }
}

