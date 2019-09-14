import React, {Component} from 'react';
import {connect} from "react-redux";
import {getRecipe} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class PageRecipe extends Component {
    componentDidMount() {
        this.props.getRecipe(this.props.match.params._id);
    }
    render() {
        if (this.props.recipe === undefined) return false
        else if(this.props.recipe === false) return <Redirect to="/not_found"/>
        const item = this.props.recipe;
        return (<>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
        </>);
    }
}

export default connect((state) => ({ recipe: state.recipe }), {getRecipe})(PageRecipe);