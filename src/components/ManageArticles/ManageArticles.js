import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";


export default class ManageArticles extends Component {

    render() {
        return  (
            <span>
                <h3>Manage Articles</h3>
                <LoadingSpinner />
            </span>
        );
    }

}
