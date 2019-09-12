const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES': {
            return {...state, categories: undefined, loading: true}
        }
        case 'ALL_CATEGORIES_RECEIVED': {
            return {...state, categoriesOk: action.ok, categories: action.json, loading: false, errorGlobal: false }
        }
        case 'SERVER_ERROR': {
            return {...state, loading: false, errorGlobal: true, errorGlobalMsg: action.err.toString()}
        }
        case 'UPDATE_FORM_ITEM': {
            let currentFormValues = {...state.currentFormValues};
            currentFormValues[action.itemData.name] = action.itemData.value;
            return {...state, currentFormValues}
        }
        case 'HIDE_MODAL': {
            const modalData = {...state.modalData};
            modalData.show = false;
            return {...state, modalData: modalData}
        }
        case 'INIT_MODAL': {
            return {...state, modalData: action.modalData }
        }
        default:
            return state;
    }
};

export default reducer;