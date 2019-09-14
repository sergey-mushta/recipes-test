import React, { Component } from 'react';
import {connect} from "react-redux";
import {getRecipesByCategory} from "../../redux/actions";
import {NavLink} from "react-router-dom";

class ListItemsRecipes extends Component {

    componentDidMount() {
        this.props.getRecipesByCategory(this.props.currentCategoryId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCategoryId !== this.props.currentCategoryId) {
            this.props.getRecipesByCategory(this.props.currentCategoryId);
        }
    }

    render() {
        if (this.props.recipes === undefined) return null;
        return <>
            <h6 className="mt-3">Recipes</h6>
            {this.props.recipes.length === 0 && <div>No recipes for current category</div>}
            {this.props.recipes.sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                return (
                    <p key={item._id} className="mb-0"><NavLink to={"/recipe/"+item._id}>{item.title}</NavLink></p>
                )})
            }
            </>
    }

}

export default connect((state) => ({ categories: state.categories, recipes: state.recipes }), {getRecipesByCategory})(ListItemsRecipes);
