import React, { Component } from 'react';
import LoadingSpinner from "../LoadingSpinner";
import { getAllCategories } from '../../redux/actions';
import { connect } from "react-redux";

class ManageCategories extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {

        const items = this.props.categories !== undefined ? this.props.categories.map((item) => {
            return (
                <tr key={item._id}>
                    <th scope="row">{item.title}</th>
                    <td>{item.parentId}</td>
                    <td>{item.updatedAt}</td>
                    <td>
                        <a className="btn btn-secondary mr-3" href="#">
                            <i className="fa fa-pencil"></i></a>
                        <a className="btn btn-danger mr-3" href="#">
                            <i className="fa fa-trash"></i></a>
                    </td>
                </tr>
            );
        }) : '';

        return  (
            <span>
                <h3 className="mb-3">Manage Categories</h3>
                <LoadingSpinner />
                <a className="btn btn-secondary mb-3 mt-3" href="#">
                    <i className="fa fa-plus"></i></a>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Parent ID</th>
                      <th scope="col">Updated at</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
            </span>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories});

const mapDispatchToProps = {getAllCategories: getAllCategories};

ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;
