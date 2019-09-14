// ----------------------------------------------------------
export const getAllCategories = () => ({ type: 'GET_ALL_CATEGORIES' })
export const getArticlesByCategory = (_id) => ({ type: 'GET_ARTICLES_BY_CATEGORY', _id })
export const getRecipesByCategory = (_id) => ({ type: 'GET_RECIPES_BY_CATEGORY', _id })
export const getArticle = (_id) => ({ type: 'GET_ARTICLE', _id })
export const getRecipe = (_id) => ({ type: 'GET_RECIPE', _id })
export const setCurrentCategoryId = (_id) => ({ type: 'SET_CURRENT_CATEGORY_ID', _id })
