import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ListItemsArticles from "../ListItemsArticles";
import ListItemsRecipes from "../ListItemsRecipes";
import {setCurrentCategoryId} from "../../redux/actions";
import Breadcrumbs from "../Breadcrumbs";

class PageCategory extends Component {

    render() {
        if (this.loading > 0 || this.props.categories === undefined) return null;
        const _id = this.props.match.params._id;
        const _currentCategory = this.props.categories.find((e) => e['_id'] === _id);
        if (_currentCategory === undefined) return <Redirect to="/not_found"/>;

        this.props.setCurrentCategoryId(_id);
        return <>
                <Breadcrumbs {...this.props.match} />
                <h5 className="mt-2">Category: {_currentCategory.title}</h5>
                <ListItemsRecipes currentCategoryId={_id}/>
                <ListItemsArticles currentCategoryId={_id}/>
            </>;
    }
}


export default connect((state) => ({ categories: state.categories, loading: state.loading }), {setCurrentCategoryId})(PageCategory);