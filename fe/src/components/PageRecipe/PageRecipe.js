import React, {Component} from 'react';
import {connect} from "react-redux";

class PageRecipe extends Component {

    render() {
        return null;
    }
}


export default connect((state) => ({ categories: state.categories, loading: state.loading }))(PageRecipe);