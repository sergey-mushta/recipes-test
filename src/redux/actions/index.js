// ----------------------------------------------------------
export const getAllCategories = () => ({ type: 'GET_ALL_CATEGORIES' })
export const createCategory = (params) => { return ceCategory(params, 'ADD'); }
export const editCategory = (params) => { return ceCategory(params, 'EDIT'); }
export const deleteCategory = (_id) => ({ type: 'DELETE_CATEGORY',  params: { _id }})
const ceCategory = (paramsIn, action) => {
    const params = {...paramsIn};
    if (params.parentId === '') { params.parentId = null; }
    return { type: action +  '_CATEGORY',  params }
}
// ----------------------------------------------------------
export const getAllArticles = () => ({ type: 'GET_ALL_ARTICLES' })
export const createArticle = (params) => { return ceArticle(params, 'ADD'); }
export const editArticle = (params) => { return ceArticle(params, 'EDIT'); }
export const deleteArticle = (_id) => ({ type: 'DELETE_ARTICLE',  params: { _id }})
const ceArticle = (paramsIn, action) => {
    const params = {...paramsIn};
    if (params.parentId === '') { params.parentId = null; }
    return { type: action +  '_ARTICLE',  params }
}
// ----------------------------------------------------------
export const getAllRecipes = () => ({ type: 'GET_ALL_RECIPES' })
export const createRecipe = (params) => { return ceRecipe(params, 'ADD'); }
export const editRecipe = (params) => { return ceRecipe(params, 'EDIT'); }
export const deleteRecipe = (_id) => ({ type: 'DELETE_RECIPE',  params: { _id }})
const ceRecipe = (paramsIn, action) => {
    const params = {...paramsIn};
    if (params.parentId === '') { params.parentId = null; }
    return { type: action +  '_ARTICLE',  params }
}
// ----------------------------------------------------------
export const hideModal = () => ({ type: 'HIDE_MODAL' })
export const initModal = (modalData) => ({ type: 'INIT_MODAL',  modalData: {...modalData, show: true} })
// ----------------------------------------------------------
export const updateFormItem = (itemData) => ({ type: 'UPDATE_FORM_ITEM',  itemData })
// ----------------------------------------------------------