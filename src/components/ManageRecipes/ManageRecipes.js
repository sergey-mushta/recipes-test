import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";


export default class ManageRecipes extends Component {

    render() {
        return  (
            <span>
                <h3>Manage Recipes</h3>
                <LoadingSpinner />
            </span>
        );
    }

}
