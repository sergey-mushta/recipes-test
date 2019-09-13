import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import FormElements from "../FormElements"
import {EDIT_RECIPE_FORM} from "../../forms";
import { prepareCategoriesForSelect } from "../../services";
import {deleteRecipe, editRecipe, initModal} from "../../redux/actions";

class ListItemsRecipes extends Component {
    static defaultProps = { parentId: null }

    initEditModal(recipeId) {
        this.props.initModal({
            titleText: 'Edit recipe',
            isForm: true,
            bodyText: <FormElements {...EDIT_RECIPE_FORM} values={ this.props.recipes.find((e) => e['_id'] === recipeId) } selectOptions={{ categoryId: prepareCategoriesForSelect(this.props.categories) }}/>,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Edit',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'EDIT_RECIPE', '_id': recipeId  },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.editRecipe(props.currentFormValues); e.preventDefault(); }
        });
    }

    initDeleteModal(recipeId) {
        this.props.initModal({
            titleText: 'Delete recipe',
            bodyText: 'Are you sure?',
            closeBtnText: 'Cancel',
            confirmBtnText: 'Delete',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'danger',
            confirmAddData: { type: 'DELETE_RECIPE', '_id': recipeId },
            closeHandler: (props) => { props.hideModal(); },
            confirmHandler: (props) => { this.props.deleteRecipe(props.confirmAddData._id); },
        });
    }

    initViewModal(recipeId) {
        const item = this.props.recipes.find((e) => e['_id'] === recipeId);
        this.props.initModal({
            titleText: 'View recipe',
            bodyText: (<>
                            <p><b>Category:</b> {(this.props.categories.find((e) => e._id === item.categoryId) !== undefined ) ? this.props.categories.find((e) => e._id === item.categoryId).title : 'NOT FOUND'}</p>
                            <p><b>Title:</b> { item.title }</p>
                            <p><b>Text:</b> { item.text }</p>
                        </>),
            closeBtnText: 'Close',
            confirmBtnText: '',
            closeBtnVariant: 'secondary',
            closeHandler: (props) => { props.hideModal(); },
        });
    }

    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Title</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            {this.props.recipes.sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{(this.props.categories.find((e) => e._id === item.categoryId) !== undefined ) ? this.props.categories.find((e) => e._id === item.categoryId).title : 'NOT FOUND'}</td>
                        <td>{item.title}</td>
                        <td className="pl-2">
                            <Button variant="secondary" size="sm" className="m-1" onClick={() => { this.initViewModal(item._id) } }><i className="fa fa-eye"></i></Button>
                            <Button variant="secondary" size="sm" className="m-1" onClick={() => { this.initEditModal(item._id) } }><i className="fa fa-pencil"></i></Button>
                            <Button variant="danger" size="sm" className="m-1" onClick={() => {  this.initDeleteModal(item._id) } }><i className="fa fa-trash"></i></Button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    }

}

export default connect((state) => ({ categories: state.categories, recipes: state.recipes }), {initModal, deleteRecipe, editRecipe })(ListItemsRecipes);
