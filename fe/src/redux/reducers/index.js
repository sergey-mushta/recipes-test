const reducer = (state = {}, action) => {
    switch (action.type) {
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': return {...state, categories: undefined, loading: (parseInt(state.loading) || 0) + 1}
        case 'ALL_CATEGORIES_RECEIVED': return {...state, categories: action.json, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_RECIPES_BY_CATEGORY': return {...state, recipes: undefined, loading: (parseInt(state.loading) || 0) + 1}
        case 'RECIPES_BY_CATEGORY_RECEIVED': return {...state, recipes: action.json, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_ARTICLES_BY_CATEGORY': return {...state, articles: undefined, loading: (parseInt(state.loading) || 0) + 1}
        case 'ARTICLES_BY_CATEGORY_RECEIVED': return {...state, articles: action.json, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'SERVER_ERROR': return {...state, loading: state.loading-1, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        // ----------------------------------------------------------
        case 'SET_CURRENT_CATEGORY_ID': return {...state, currentCategoryId: action._id }
        // ----------------------------------------------------------
        default: return state
    }
};

export default reducer;