import React, { Component } from 'react';
import {createArticle, getAllArticles, getAllCategories, initModal} from "../../redux/actions";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import ListItemsArticles from "../ListItemsArticles/ListItemsArticles";
import FormElements from "../FormElements";
import {ADD_ARTICLE_FORM} from "../../forms";
import {prepareCategoriesForSelect} from "../../services";

class ManageArticles extends Component {

    initAddModal() {
        this.props.initModal({
            titleText: 'Add new article',
            isForm: true,
            bodyText: <FormElements {...ADD_ARTICLE_FORM} selectOptions={{ categoryId: prepareCategoriesForSelect(this.props.categories) }} />,
            closeBtnText: 'Cancel',
            confirmBtnText: 'Add',
            closeBtnVariant: 'secondary',
            confirmBtnVariant: 'success',
            confirmAddData: { type: 'ADD_ARTICLE' },
            closeHandler: (props) => { props.hideModal(); },
            formSubmitHandler: (e, props) => { this.props.createArticle(props.currentFormValues); e.preventDefault(); }
        });
    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.getAllArticles();
    }

    render() {
        return  (
            <>
                <h3>Manage Articles</h3>
                {this.props.articles !== undefined && this.props.categories !== undefined && (
                    <>
                        <Button variant="secondary" size="sm" className="m-1 mb-3"  onClick={() => { this.initAddModal() } }><i className="fa fa-plus"></i> Add article</Button>
                        <ListItemsArticles />
                    </>
                )}
            </>
        );
    }

}

export default connect((state) => ({ articles: state.articles, categories: state.categories }),{getAllArticles, getAllCategories, createArticle, initModal })(ManageArticles);
