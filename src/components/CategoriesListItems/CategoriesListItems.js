import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {initModal} from "../../redux/actions/";
import {connect} from "react-redux";
import FormCommon from "../FormCommon/"
import {EDIT_CATEGORY_FORM} from "../../forms";
import prepareCategoriesForSelect from "../../services";

class CategoriesListItems extends Component {
    static defaultProps = { parentId: null }

    initEditModal(categoryId) {
        this.props.initModal({
            titleText: 'Edit category',
            bodyText: <FormCommon {...EDIT_CATEGORY_FORM} values={ this.props.items.find((e) => e['_id'] === categoryId) } selectOptions={{ parentId: prepareCategoriesForSelect(this.props.categories) }}/>,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Edit',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'EDIT_CATEGORY', '_id': categoryId  },
            closeHandler: (props) => { props.hideModal(); },
            confirmHandler: (props) => { props.hideModal(); props.confirmModalAction(props.confirmAddData);  },
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
            confirmHandler: (props) => { props.hideModal(); props.confirmModalAction(props.confirmAddData);  },
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
                            <Button variant="danger" size="sm" className="m-1" onClick={() => { this.initDeleteModal(item._id) } }><i className="fa fa-trash"></i></Button>
                            <CategoriesListItems key={'sub_'+item._id} items={this.props.items} parentId={item._id}/>
                        </li>
                    );
                }) : ''}
            </ul>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories });
const mapDispatchToProps = {initModal: initModal};
CategoriesListItems = connect(mapStateToProps, mapDispatchToProps)(CategoriesListItems);
export default CategoriesListItems;
