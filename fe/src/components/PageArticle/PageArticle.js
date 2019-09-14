import React, {Component} from 'react';
import {connect} from "react-redux";
import {getArticle} from "../../redux/actions";
import {Redirect} from "react-router-dom";

class PageArticle extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.match.params._id);
    }
    render() {
        if (this.props.article === undefined) return false
        else if(this.props.article === false) return <Redirect to="/not_found"/>
        const item = this.props.article;
        return (<>
                <h2>{item.title}</h2>
                <p><small><i>{item.description}</i></small></p>
                <p>{item.text}</p>
            </>);
    }
}

export default connect((state) => ({ article: state.article }), {getArticle})(PageArticle);