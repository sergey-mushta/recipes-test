import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {editCategory, deleteCategory, initModal} from "../../redux/actions/";
import {connect} from "react-redux";
import FormElements from "../FormElements"
import {EDIT_CATEGORY_FORM} from "../../forms";
import { prepareCategoriesForSelect } from "../../services";

class CategoriesListItems extends Component {
    static defaultProps = { parentId: null }

    initEditModal(categoryId) {
        this.props.initModal({
            titleText: 'Edit category',
            isForm: true,
            bodyText: <FormElements {...EDIT_CATEGORY_FORM} values={ this.props.items.find((e) => e['_id'] === categoryId) } selectOptions={{ parentId: prepareCategoriesForSelect(this.props.items) }}/>,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Edit',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'EDIT_CATEGORY', '_id': categoryId  },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.editCategory(props.currentFormValues); e.preventDefault(); }
        });
    }

    initDeleteModal(categoryId) {
        this.props.initModal({
            titleText: 'Delete category',
            bodyText: 'Are you sure?',
            closeBtnText: 'Cancel',
            confirmBtnText: 'Delete',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'danger',
            confirmAddData: { type: 'DELETE_CATEGORY', '_id': categoryId },
            closeHandler: (props) => { props.hideModal(); },
            confirmHandler: (props) => { this.props.deleteCategory(props.confirmAddData._id); },
        });
    }

    render() {
        return (
            <ul>
                {this.props.items !== undefined ? this.props.items.filter((e) => e['parentId'] === this.props.parentId).sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                    return (
                        <li key={item._id}>
                            {item.title}
                            <Button variant="secondary" size="sm" className="ml-2 m-1" onClick={() => { this.initEditModal(item._id) } }><i className="fa fa-pencil"></i></Button>
                            <Button variant="danger" size="sm" className="m-1" onClick={() => {  this.initDeleteModal(item._id) } }><i className="fa fa-trash"></i></Button>
                            <CategoriesListItems key={'sub_'+item._id} items={this.props.items} parentId={item._id} initModal={this.props.initModal} editCategory={this.props.editCategory} deleteCategory={this.props.deleteCategory} />
                        </li>
                    );
                }) : ''}
            </ul>
        );
    }

}

export default connect(null, {initModal, deleteCategory, editCategory })(CategoriesListItems);
