import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import { getNews } from '../../redux/actions';
import {connect} from "react-redux";

class ManageCategories extends Component {

    componentDidMount() {
        this.props.getNews();
    }

    render() {
        return  (
            <span>
                <h3>Manage Categories</h3>
                <LoadingSpinner />
            </span>
        );
    }

}

const mapStateToProps = (state) => ({
    news: state.news,
});

const mapDispatchToProps = () => ({
    getNews: getNews,
});

ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;
