import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class Breadcrumbs extends Component {

    getParentCategories(_id) {
        let _catId = _id;
        let treeLinks = [];

        let categoriesIndexes = {};
        this.props.categories.map((item, index) => {categoriesIndexes[item._id] = index; return true; });
        do {
            const currentCategory = this.props.categories[categoriesIndexes[_catId]];
            if (currentCategory !== undefined) {
                _catId = currentCategory.parentId;
                treeLinks.push({to: '/category/' + currentCategory._id, exact: true, text: currentCategory.title});
            }
        } while(_catId != null);
        return treeLinks.reverse();
    }

    render() {
        let first = true;
        let links = [
            {to:'/', exact: true, text: 'Home'},
        ];
        if (this.props.categories === undefined) return null;
        switch(this.props.path) {
            case "/category/:_id":
                links = links.concat(this.getParentCategories(this.props.currentCategoryId));
                break;
            case "/article/:_id":
                if(this.props.item === undefined) return null;
                links = links.concat(this.getParentCategories(this.props.item.categoryId));
                links.push({to:'/article/'+this.props.item._id, exact: true, text: this.props.item.title});
                break;
            case "/recipe/:_id":
                if(this.props.item === undefined) return null;
                links = links.concat(this.getParentCategories(this.props.item.categoryId));
                links.push({to:'/recipe/'+this.props.item._id, exact: true, text: this.props.item.title});
                break;
            case "/not_found":
                links.push({to:'/not_found', exact: true, text: 'Page not found'});
                break;
            default:
                break;
        }

        return  (
            <>
                { links.map((item) =>  {
                    const content = <span key={'bc_url_to_' + item.to }>{!first && <span> :: </span>} <NavLink className="pl-0 pr-0 pt-0" exact={item.exact} to={item.to} activeClassName="active">{item.text}</NavLink></span>;
                    first = false;
                    return content;
                }) }
                <hr />
            </>
        );
    }
}

export default connect((state) => ({ categories: state.categories, currentCategoryId: state.currentCategoryId, loading: state.loading, item:state.item }), null)(Breadcrumbs);