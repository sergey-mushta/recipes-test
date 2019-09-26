// ----------------------------------------------------------
export const getAllCategories = () => ({ type: 'GET_ALL_CATEGORIES' })
export const getItemsByCategory = (_id, source) => ({ type: 'GET_ITEMS_BY_CATEGORY', _id, source })
export const getItem = (_id, source) => ({ type: 'GET_ITEM', _id, source })
export const setCurrentCategoryId = (_id) => ({ type: 'SET_CURRENT_CATEGORY_ID', _id })
