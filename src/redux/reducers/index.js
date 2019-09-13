import {deleteCategoryFromContent, prepareCurrentFormErrors} from "../../services";

const reducer = (state = {}, action) => {
    switch (action.type) {
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': return {...state, categories: undefined, loading: true}
        case 'ALL_CATEGORIES_RECEIVED': return {...state, categoriesOk: action.ok, categories: action.json, loading: false, errorGlobal: false }
        case 'ADD_CATEGORY':
        case 'EDIT_CATEGORY':
            return {...state, currentFormErrors: undefined, errorGlobal: false}
        case 'ADD_CATEGORY_RECEIVED':
        case 'EDIT_CATEGORY_RECEIVED': {
            if (action.ok) {
                let currentCategories = action.type === 'ADD_CATEGORY_RECEIVED' ? [...state.categories] :  [...state.categories].filter((e) => { return e._id !== action.json._id} );
                currentCategories.push(action.json);
                return { ...state, categories: currentCategories,  modalData: {...state.modalData, show: false}, currentFormErrors: undefined, errorGlobal: false };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json), errorGlobal: false };
            }
        }
        case 'DELETE_CATEGORY_RECEIVED':
            return action.ok ? {...state, categories: deleteCategoryFromContent(state.categories, action.urlSuffix), modalData: {...state.modalData, show: false}, errorGlobal: false}
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