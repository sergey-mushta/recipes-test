export const ADD_CATEGORY_FORM = {
    items: [
        {
            title: "Parent Category",
            name: 'parentId',
            type: 'select',
            required: false,
            default: ''
        },
        {
            title: "Name",
            name: 'title',
            type: 'text',
            required: true,
            default: ''
        }
    ]
}

export const EDIT_CATEGORY_FORM = ADD_CATEGORY_FORM;
