import React, { Component } from 'react';
import {connect} from "react-redux";
import "./CategoriesTree.css";
import {NavLink} from "react-router-dom";

class CategoriesTree extends Component {
    static defaultProps = { parentId: null }

    render() {
        return this.props.categories !== undefined && (
            <>
                {this.props.parentId === null && <h4 className="mb-3">Categories</h4>}
                <ul className="categories-tree pl-2">
                    {this.props.categories.filter((e) => e['parentId'] === this.props.parentId).sort((a, b) => a.title.localeCompare(b.title)).map((item) => {
                        return (
                            <li key={item._id} >
                                <NavLink to={"/category/" + item._id} className="category-url">{item.title}</NavLink>
                                <CategoriesTree key={'sub_'+item._id} parentId={item._id} categories={this.props.categories}  />
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }

}

export default connect((state) => ({ categories: state.categories }), null)(CategoriesTree);
