const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES': {
            return {...state, loading: true};
        }
        case 'ALL_CATEGORIES_RECEIVED':
            return {...state, categories: action.json, loading: false}
        default:
            return state;
    }
};

export default reducer;