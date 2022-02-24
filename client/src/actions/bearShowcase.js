import * as api from '../api/bears.js';

export const getBears = () => async (dispatch) => {
    try {
        const bears = await api.getBears;
    } catch (error) {
        console.log(error)
    }
    


}