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

export const confirmModalAction = (addData) => {
    return {
        type: 'CONFIRM_MODAL_ACTION',
        addData: addData,
    }
}
