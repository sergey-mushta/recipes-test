export const getAllCategories = () => {
    return {
        type: 'GET_ALL_CATEGORIES',
    }
}


export const hideModal = () => {
    return {
        type: 'HIDE_MODAL',
    }
}

export const initModal = (modalData) => {
    return {
        type: 'INIT_MODAL',
        modalData: {...modalData, show: true},
    }
}

export const updateFormItem = (itemData) => {
    return {
        type: 'UPDATE_FORM_ITEM',
        itemData
    }
}