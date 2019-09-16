const reducer = (state = {}, action) => {
    switch (action.type) {
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': return {...state, categories: undefined, loading: (parseInt(state.loading) || 0) + 1}
        case 'ALL_CATEGORIES_RECEIVED': return {...state, categories: action.json, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_ITEMS_BY_CATEGORY': return {...state, items: {...state.items, [action.source]: undefined}, loading: (parseInt(state.loading) || 0) + 1}
        case 'ARTICLES_BY_CATEGORY_RECEIVED':
            return {...state, items: {...state.items, article: action.json}, loading: state.loading-1, errorGlobal: false }
        case 'RECIPES_BY_CATEGORY_RECEIVED':
            return {...state, items: {...state.items, recipe: action.json}, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'GET_ITEM': return {...state, item: undefined, loading: (parseInt(state.loading) || 0) + 1}
        case 'ARTICLE_RECEIVED':
        case 'RECIPE_RECEIVED':
            return {...state, item: action.ok ? action.json : false, loading: state.loading-1, errorGlobal: false }
        // ----------------------------------------------------------
        case 'SERVER_ERROR': return {...state, loading: state.loading-1, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        // ----------------------------------------------------------
        case 'SET_CURRENT_CATEGORY_ID': return {...state, currentCategoryId: action._id }
        // ----------------------------------------------------------
        default: return state
    }
};

export default reducer;