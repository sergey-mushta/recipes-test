import React, {Component} from 'react';
import {connect} from "react-redux";
import {getRecipe} from "../../redux/actions";
import {Redirect} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

class PageRecipe extends Component {
    componentDidMount() {
        this.props.getRecipe(this.props.match.params._id);
    }
    render() {
        if (this.props.recipe === undefined) return false
        else if(this.props.recipe === false) return <Redirect to="/not_found"/>
        const item = this.props.recipe;
        return (<>
            <Breadcrumbs {...this.props.match} />
            <h5 className="mt-2">Recipe: {item.title}</h5>
            <p>{item.text}</p>
        </>);
    }
}

export default connect((state) => ({ recipe: state.recipe }), {getRecipe})(PageRecipe);