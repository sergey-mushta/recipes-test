import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import {getAllCategories, initModal} from '../../redux/actions';
import { connect } from "react-redux";
import CategoriesListItems from "../CategoriesListItems";
import Button from "react-bootstrap/Button";
import FormCommon from "../FormCommon/";
import {ADD_CATEGORY_FORM} from "../../forms";

class ManageCategories extends Component {

    initAddModal() {
        this.props.initModal({
            titleText: 'Add new category',
            bodyText: <FormCommon {...ADD_CATEGORY_FORM} />,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Add',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'ADD_CATEGORY' },
            closeHandler: (props) => { props.hideModal(); },
            confirmHandler: (props) => { props.confirmModalAction(props.confirmAddData);  },
        });
    }

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return  (
            <span>
                <h3 className="mb-3">Manage Categories</h3>
                <LoadingSpinner />
                {this.props.categories !== undefined && !this.props.loading && (
                    <>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"  onClick={() => { this.initAddModal() } }><i className="fa fa-plus"></i> Add category</Button>
                        <CategoriesListItems items={this.props.categories}/>
                    </>
                )}
            </span>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories, loading: state.loading });
const mapDispatchToProps = {getAllCategories: getAllCategories, initModal: initModal};
ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;

