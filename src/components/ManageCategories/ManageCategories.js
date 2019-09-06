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
                    <td style={{paddingLeft: item.level*40 + 'px'}}>{item.title}</td>
                    <td>
                        <button className="btn btn-secondary mr-3"><i className="fa fa-pencil"></i></button>
                        <button className="btn btn-danger mr-3"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        }) : '';

        return  (
            <span>
                <h3 className="mb-3">Manage Categories</h3>
                <LoadingSpinner />
                {this.props.categories !== undefined &&
                    <>
                        <button className="btn btn-secondary mb-3 mt-3"><i className="fa fa-plus"></i></button>
                        <table className="table">
                          <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col" style={{width: '140px'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {items}
                          </tbody>
                        </table>
                    </>
                }
            </span>
        );
    }

}

const mapStateToProps = (state) => ({ categories: state.categories});

const mapDispatchToProps = {getAllCategories: getAllCategories};

ManageCategories = connect(mapStateToProps,mapDispatchToProps)(ManageCategories);
export default ManageCategories;
