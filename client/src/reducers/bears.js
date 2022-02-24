import * as actionsType from "../actionsType";

const bears = (state = [], action) => {
    switch (action.type) {
        case actionsType.FETCH_ALL:
            return action.payload;
    
        case actionsType.ADD_BEAR:
            return [...state, action.payload];
    
        default:
            return state;
    }
}

export default bears;