export const ADD_CATEGORY_FORM = {
    items: [
        {
            title: "Parent Category",
            name: 'parentId',
            type: 'select',
            required: false,
            default: null
        },
        {
            title: "Name",
            name: 'title',
            type: 'text',
            required: true,
            default: ''
        }
    ],
    onSubmit: (props) => { console.log('FormSubmitted', props) }
}

export const EDIT_CATEGORY_FORM = ADD_CATEGORY_FORM;
