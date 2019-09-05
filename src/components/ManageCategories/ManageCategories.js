import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import { getAllCategories } from '../../redux/actions';
import { connect } from "react-redux";

class ManageCategories extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return  (
            <span>
                <h3>Manage Categories</h3>
                <LoadingSpinner />
                <div>{JSON.stringify(this.props.categories)}</div>
            </span>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories});

const mapDispatchToProps = {getAllCategories: getAllCategories};

ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;
