import React, { Component } from 'react';
import {connect} from "react-redux";
import {getArticlesByCategory} from "../../redux/actions";
import {NavLink} from "react-router-dom";

class ListItemsArticles extends Component {

    componentDidMount() {
        this.props.getArticlesByCategory(this.props.currentCategoryId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCategoryId !== this.props.currentCategoryId) {
            this.props.getArticlesByCategory(this.props.currentCategoryId);
        }
    }

    render() {

        if (this.props.articles === undefined) return null;
        return <>
            <h6 className="mt-3">Articles</h6>
            {this.props.articles.length === 0 && <div>No articles for current category</div>}
            {this.props.articles.sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                return (
                    <div className="mt-1" key={item._id}>
                        <p className="mb-0"><NavLink to={"/article/"+item._id} >{item.title}</NavLink></p>,
                        <p className="mb-0"><small><i>{item.description}</i></small></p>
                    </div>
                )})
            }
        </>
    }

}

export default connect((state) => ({ categories: state.categories, articles: state.articles }), {getArticlesByCategory})(ListItemsArticles);
