import React, { Component } from 'react';
import {connect} from "react-redux";
import {createRecipe, getAllCategories, getAllRecipes, initModal} from "../../redux/actions";
import Button from "react-bootstrap/Button";
import ListItemsRecipes from "../ListItemsRecipes/ListItemsRecipes";
import FormElements from "../FormElements";
import {ADD_RECIPE_FORM} from "../../forms";
import {prepareCategoriesForSelect} from "../../services";


class ManageRecipes extends Component {

    initAddModal() {
        this.props.initModal({
            titleText: 'Add new recipe',
            isForm: true,
            bodyText: <FormElements {...ADD_RECIPE_FORM} selectOptions={{ categoryId: prepareCategoriesForSelect(this.props.categories) }} />,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Add',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'ADD_RECIPE' },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.createRecipe(props.currentFormValues); e.preventDefault(); }
        });
    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.getAllRecipes();
    }

    render() {
        return  (
            <>
                <h3>Manage Recipes</h3>
                {this.props.recipes !== undefined && this.props.categories !== undefined &&  (
                    <>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"  onClick={() => { this.initAddModal() } }><i className="fa fa-plus"></i> Add recipe</Button>
                        <ListItemsRecipes />
                    </>
                )}
            </>
        );
    }

}

export default connect((state) => ({ recipes: state.recipes, categories: state.categories }),{getAllRecipes, getAllCategories, createRecipe, initModal })(ManageRecipes);
