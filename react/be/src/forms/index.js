const categorySelectField = { title: "Category",  name: 'categoryId', type: 'select',  required: true, default: '' };
const titleTextField = { title: "Title",  name: 'title',  type: 'text',  required: true,  default: '' };
const textTextareaField = { title: "Text",  name: 'text',  type: 'textarea',  required: true,  default: '' };
const descriptionTextareaField = { title: "Description",  name: 'description',  type: 'textarea',  required: true,  default: '' };
const hiddenIdField = { title: "",  name: '_id',  type: 'hidden',  default: '' };
// ----------------------------------------------------------
export const ADD_CATEGORY_FORM = {
    items: [
        { ...categorySelectField, name: "parentId", title: "Parent category", required: false },
        titleTextField
    ]
}
export const EDIT_CATEGORY_FORM = { items: [...ADD_CATEGORY_FORM.items, hiddenIdField ] }
// ----------------------------------------------------------
export const ADD_ARTICLE_FORM = {
    items: [
        categorySelectField,
        titleTextField,
        descriptionTextareaField,
        textTextareaField
    ]
}
export const EDIT_ARTICLE_FORM = { items: [ ...ADD_ARTICLE_FORM.items,  hiddenIdField ] }
// ----------------------------------------------------------
export const ADD_RECIPE_FORM = {
    items: [
        categorySelectField,
        titleTextField,
        textTextareaField
    ]
}
export const EDIT_RECIPE_FORM = { items: [ ...ADD_RECIPE_FORM.items, hiddenIdField ] }