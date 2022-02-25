const bears = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
    
        case 'ADD_BEAR':
            return [...state, action.payload];
    
        default:
            return state;
    }
}

export default bears;