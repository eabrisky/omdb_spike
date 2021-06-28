const movieReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'FETCH':
            return action.payload;
        default:
            return state;
    }
};

export default movieReducer;