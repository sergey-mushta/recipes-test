import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import FormElements from "../FormElements"
import {EDIT_ARTICLE_FORM } from "../../forms";
import { prepareCategoriesForSelect } from "../../services";
import {initModal, deleteArticle, editArticle} from "../../redux/actions";

class ListItemsArticles extends Component {
    static defaultProps = { parentId: null }

    initEditModal(articleId) {
        this.props.initModal({
            titleText: 'Edit article',
            isForm: true,
            bodyText: <FormElements {...EDIT_ARTICLE_FORM} values={ this.props.articles.find((e) => e['_id'] === articleId) } selectOptions={{ categoryId: prepareCategoriesForSelect(this.props.categories) }}/>,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Edit',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'EDIT_ARTICLE', '_id': articleId  },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.editArticle(props.currentFormValues); e.preventDefault(); }
        });
    }

    initDeleteModal(articleId) {
        this.props.initModal({
            titleText: 'Delete article',
            bodyText: 'Are you sure?',
            closeBtnText: 'Cancel',
            confirmBtnText: 'Delete',
            confirmAddData: { type: 'DELETE_ARTICLE', '_id': articleId },
            closeHandler: (props) => { props.hideModal(); },
            confirmHandler: (props) => { this.props.deleteArticle(props.confirmAddData._id); },
        });
    }

    initViewModal(articleId) {
        const item = this.props.articles.find((e) => e['_id'] === articleId);
        this.props.initModal({
            titleText: 'View article',
            bodyText: (<>
                <p><b>Category:</b> {(this.props.categories.find((e) => e._id === item.categoryId) !== undefined ) ? this.props.categories.find((e) => e._id === item.categoryId).title : 'NOT FOUND'}</p>
                <p><b>Title:</b> { item.title }</p>
                <p><b>Description:</b> { item.title }</p>
                <p><b>Text:</b> { item.text }</p>
            </>),
            closeBtnText: 'Close',
            confirmBtnText: '',
            closeBtnVariant: 'secondary',
            closeHandler: (props) => { props.hideModal(); },
        });
    }
    render() {
        return <table className="table">
            <thead>
            <tr>
                <th scope="col">Category</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {this.props.articles.sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{(this.props.categories.find((e) => e._id === item.categoryId) !== undefined ) ? this.props.categories.find((e) => e._id === item.categoryId).title : 'NOT FOUND'}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td className="pl-2">
                            <Button variant="secondary" size="sm" className="m-1" onClick={() => { this.initViewModal(item._id) } }><i className="fa fa-eye"></i></Button>
                            <Button variant="secondary" size="sm" className="m-1" onClick={() => { this.initEditModal(item._id) } }><i className="fa fa-pencil"></i></Button>
                            <Button variant="danger" size="sm" className="m-1" onClick={() => {  this.initDeleteModal(item._id) } }><i className="fa fa-trash"></i></Button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    }

}

export default connect((state) => ({ categories: state.categories, articles: state.articles }), {initModal, deleteArticle, editArticle })(ListItemsArticles);
