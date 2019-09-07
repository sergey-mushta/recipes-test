const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES': {
            return {...state, categories: [], loading: true, error:false}
        }
        case 'ALL_CATEGORIES_RECEIVED': {
            return {...state, categories: action.json, loading: false, error: false}
        }
        case 'API_ERROR': {
            console.log(action);
            return {...state, categories: [], loading: false, error: true, errorMsg: action.err}
        }
        default:
            return state;
    }
};

export default reducer;