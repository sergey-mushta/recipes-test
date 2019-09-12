import {deleteCategoryFromContent, prepareCurrentFormErrors} from "../../services";

const reducer = (state = {}, action) => {
    switch (action.type) {
        // ----------------------------------------------------------
        case 'GET_ALL_CATEGORIES': {
            return {...state, categories: undefined, loading: true}
        }

        case 'ALL_CATEGORIES_RECEIVED': {
            return {...state, categoriesOk: action.ok, categories: action.json, loading: false, errorGlobal: false }
        }

        case 'CREATE_CATEGORY': {
            return {...state, currentFormErrors: undefined}
        }

        case 'CREATE_CATEGORY_RECEIVED': {
            if (action.ok) {
                let currentCategories = [...state.categories];
                currentCategories.push(action.json);
                const modalData = {...state.modalData};
                modalData.show = false;
                return { ...state, categories: currentCategories, modalData, currentFormErrors: undefined };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json) };
            }
        }

        case 'EDIT_CATEGORY': {
            return {...state, currentFormErrors: undefined}
        }

        case 'EDIT_CATEGORY_RECEIVED': {
            if (action.ok) {
                let currentCategories = [...state.categories].filter((e) => { return e._id !== action.json._id} );
                currentCategories.push(action.json);
                const modalData = {...state.modalData};
                modalData.show = false;
                return { ...state, categories: currentCategories, modalData, currentFormErrors: undefined };
            } else {
                return { ...state, currentFormErrors: prepareCurrentFormErrors(action.json) };
            }
        }


        case 'DELETE_CATEGORY_RECEIVED': {
            const modalData = {...state.modalData};
            modalData.show = false;
            if (action.ok) {
                return {...state, categories: deleteCategoryFromContent(state.categories, action.urlSuffix), modalData, errorGlobal: false}
            } else {
                return {...state, modalData, errorGlobal: true, errorGlobalMsg: action.json[0].message }
            }
        }

        // ----------------------------------------------------------

        case 'SERVER_ERROR': {
            return {...state, loading: false, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        }
        case 'UPDATE_FORM_ITEM': {
            if (action.itemData === null) {
                return {...state, currentFormValues: undefined}
            } else {
                let currentFormValues = {...state.currentFormValues};
                currentFormValues[action.itemData.name] = action.itemData.value;
                return {...state, currentFormValues}
            }
        }
        case 'HIDE_MODAL': {
            const modalData = {...state.modalData};
            modalData.show = false;
            return {...state, modalData}
        }
        case 'INIT_MODAL': {
            return {...state, modalData: action.modalData, currentFormErrors: undefined  }
        }
        default:
            return state;
    }
};

export default reducer;