const reducer = (state = {}, action) => {
    switch (action.type) {
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': return {...state, categories: undefined, loading: true}
        case 'ALL_CATEGORIES_RECEIVED': return {...state, categories: action.json, loading: false, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_ALL_RECIPES': return {...state, recipes: undefined, loading: true}
        case 'ALL_RECIPES_RECEIVED': return {...state, recipes: action.json, loading: false, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_ALL_ARTICLES': return {...state, articles: undefined, loading: true}
        case 'ALL_ARTICLES_RECEIVED': return {...state, articles: action.json, loading: false, errorGlobal: false }
        // ----------------------------------------------------------
        case 'SERVER_ERROR': return {...state, loading: false, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        // ----------------------------------------------------------
        default: return state
    }
};

export default reducer;