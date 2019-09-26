import React, {Component} from 'react';
import {connect} from "react-redux";
import {getItem} from "../../redux/actions";
import {Redirect} from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

class PageItem extends Component {
    componentDidMount() {
        this.props.getItem(this.props.match.params._id, this.props.source);
    }
    render() {
        if (this.props.item === undefined) return false
        else if(this.props.item === false) return <Redirect to="/not_found"/>
        return (<>
                <Breadcrumbs {...this.props.match} />
                <h5 className="mt-2">Article: {this.props.item.title}</h5>
                <hr />
                {this.props.item.description !== undefined && <p><small><i>{this.props.item.description}</i></small></p>}
                <p>{this.props.item.text}</p>
            </>);
    }
}

export default connect((state) => ({ item: state.item }), {getItem})(PageItem);