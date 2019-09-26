import React, { Component } from 'react';
import {connect} from "react-redux";
import {getItemsByCategory} from "../../redux/actions";
import {NavLink} from "react-router-dom";
import ucFirst from "../../services";

class ListItems extends Component {

    componentDidMount() {
        this.props.getItemsByCategory(this.props.currentCategoryId, this.props.source);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentCategoryId !== this.props.currentCategoryId) {
            this.props.getItemsByCategory(this.props.currentCategoryId, this.props.source);
        }
    }


    render() {
        if (this.props.items === undefined || this.props.items[this.props.source] === undefined) return null;
        return <>
            <h6 className="mt-3">{ucFirst(this.props.source)}s</h6>
            {this.props.items[this.props.source].length === 0 && <div>No {this.props.source}s for current category</div>}
            {this.props.items[this.props.source].sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                return (
                    <div className="mt-1" key={item._id}>
                        <p className="mb-0"><NavLink to={'/'+ this.props.source + '/'+item._id} >{item.title}</NavLink></p>
                        {item.description !== undefined && <p className="mb-0"><small><i>{item.description}</i></small></p>}
                    </div>
                )})
            }
        </>
    }

}

export default connect((state) => ({ categories: state.categories, items: state.items }), {getItemsByCategory})(ListItems);
