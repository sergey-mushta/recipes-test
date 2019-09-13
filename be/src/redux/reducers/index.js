import {deleteCategoryFromContent, prepareCurrentFormErrors} from "../../services";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
        case 'EDIT_CATEGORY':
        case 'ADD_RECIPE':
        case 'EDIT_RECIPE':
        case 'ADD_ARTICLE':
        case 'EDIT_ARTICLE':
            return {...state, currentFormErrors: undefined, errorGlobal: false}
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': return {...state, categories: undefined, loading: true}
        case 'ALL_CATEGORIES_RECEIVED': return {...state, categories: action.json, loading: false, errorGlobal: false }
        case 'ADD_CATEGORY_RECEIVED':
        case 'EDIT_CATEGORY_RECEIVED': {
            if (action.ok) {
                let currentCategories = action.type === 'ADD_CATEGORY_RECEIVED' ? [...state.categories] :  [...state.categories].filter((e) => { return e._id !== action.json._id} );
                return { ...state, categories: [...currentCategories, action.json],  modalData: {...state.modalData, show: false}, currentFormErrors: undefined, errorGlobal: false };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json), errorGlobal: false };
            }
        }
        case 'DELETE_CATEGORY_RECEIVED':
            return action.ok ? {...state, categories: deleteCategoryFromContent(state.categories, action.urlSuffix), modalData: {...state.modalData, show: false}, errorGlobal: false}
                             : {...state, modalData: {...state.modalData, show: false}, errorGlobal: true, errorGlobalMsg: action.json[0].message }
        // ----------------------------------------------------------
        case 'GET_ALL_RECIPES': return {...state, recipes: undefined, loading: true}
        case 'ALL_RECIPES_RECEIVED': return {...state, recipes: action.json, loading: false, errorGlobal: false }
        case 'ADD_RECIPE_RECEIVED':
        case 'EDIT_RECIPE_RECEIVED': {
            if (action.ok) {
                let currentRecipes = action.type === 'ADD_RECIPE_RECEIVED' ? [...state.recipes] :  [...state.recipes].filter((e) => { return e._id !== action.json._id} );
                return { ...state, recipes: [...currentRecipes, action.json],  modalData: {...state.modalData, show: false}, currentFormErrors: undefined, errorGlobal: false };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json), errorGlobal: false };
            }
        }
        case 'DELETE_RECIPE_RECEIVED':
            return action.ok ? {...state, recipes: [...state.recipes].filter((e) => { return e._id !== action.urlSuffix}), modalData: {...state.modalData, show: false}, errorGlobal: false}
                : {...state, modalData: {...state.modalData, show: false}, errorGlobal: true, errorGlobalMsg: action.json[0].message }
        // ----------------------------------------------------------
        case 'GET_ALL_ARTICLES': return {...state, articles: undefined, loading: true}
        case 'ALL_ARTICLES_RECEIVED': return {...state, articles: action.json, loading: false, errorGlobal: false }
        case 'ADD_ARTICLE_RECEIVED':
        case 'EDIT_ARTICLE_RECEIVED': {
            if (action.ok) {
                let currentArticles = action.type === 'ADD_ARTICLE_RECEIVED' ? [...state.articles] :  [...state.articles].filter((e) => { return e._id !== action.json._id} );
                return { ...state, articles: [...currentArticles, action.json],  modalData: {...state.modalData, show: false}, currentFormErrors: undefined, errorGlobal: false };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json), errorGlobal: false };
            }
        }
        case 'DELETE_ARTICLE_RECEIVED':
            return action.ok ? {...state, articles: [...state.articles].filter((e) => { return e._id !== action.urlSuffix}), modalData: {...state.modalData, show: false}, errorGlobal: false}
                : {...state, modalData: {...state.modalData, show: false}, errorGlobal: true, errorGlobalMsg: action.json[0].message }
        // ----------------------------------------------------------
        case 'SERVER_ERROR': return {...state, loading: false, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        // ----------------------------------------------------------
        case 'UPDATE_FORM_ITEM': {
            if (action.itemData === null) {
                return {...state, currentFormValues: undefined}
            } else {
                let currentFormValues = {...state.currentFormValues};
                currentFormValues[action.itemData.name] = action.itemData.value;
                return {...state, currentFormValues}
            }
        }
        // ----------------------------------------------------------
        case 'HIDE_MODAL': return {...state, modalData: {...state.modalData, show: false}}
        case 'INIT_MODAL': return {...state, modalData: action.modalData, currentFormErrors: undefined  }
        // ----------------------------------------------------------
        default: return state
    }
};

export default reducer;