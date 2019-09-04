import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";


export default class ManageCategories extends Component {

    render() {
        return  (
            <span>
                <h3>Manage Categories</h3>
                <LoadingSpinner />
            </span>
        );
    }

}
