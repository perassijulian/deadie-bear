import * as actionsType from "../actionsType";

const bears = (state = [], action) => {
    switch (action.type) {
        case actionsType.FETCH_ALL:
            return state;
    
        case actionsType.ADD_BEAR:
            return state;
    
        default:
            return state;
    }
}

export default bears;