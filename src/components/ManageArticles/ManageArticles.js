import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import {createCategory, getAllArticles, initModal} from "../../redux/actions";
import {connect} from "react-redux";

class ManageArticles extends Component {

    render() {
        return  (
            <span>
                <h3>Manage Articles</h3>
                <LoadingSpinner />
            </span>
        );
    }

}

export default connect((state) => ({ articles: state.articles, loading: state.loading }),{getAllArticles, createCategory, initModal })(ManageArticles);
