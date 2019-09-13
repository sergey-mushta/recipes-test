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
export const createArticle = (params) => ({ type: 'ADD_ARTICLE',  params})
export const editArticle = (params) => ({ type: 'EDIT_ARTICLE',  params})
export const deleteArticle = (_id) => ({ type: 'DELETE_ARTICLE',  params: { _id }})
// ----------------------------------------------------------
export const getAllRecipes = () => ({ type: 'GET_ALL_RECIPES' })
export const createRecipe = (params) => ({ type: 'ADD_RECIPE',  params})
export const editRecipe = (params) => ({ type: 'EDIT_RECIPE',  params})
export const deleteRecipe = (_id) => ({ type: 'DELETE_RECIPE',  params: { _id }})
// ----------------------------------------------------------
export const hideModal = () => ({ type: 'HIDE_MODAL' })
export const initModal = (modalData) => ({ type: 'INIT_MODAL',  modalData: {...modalData, show: true} })
// ----------------------------------------------------------
export const updateFormItem = (itemData) => ({ type: 'UPDATE_FORM_ITEM',  itemData })
// ----------------------------------------------------------