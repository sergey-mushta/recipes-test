import * as actions from "../actions";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case actions.getAllCategories: {
            return {...state, categories: undefined, loading: true}
        }
        case 'ALL_CATEGORIES_RECEIVED': {
            return {...state, categoriesOk: action.ok, categories: action.json, loading: false, errorGlobal: false}
        }
        case 'SERVER_ERROR': {
            return {...state, loading: false, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        }
        default:
            return state;
    }
};

export default reducer;