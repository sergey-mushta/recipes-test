import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Header";

import ErrorGlobal from "./ErrorGlobal";
import {connect} from "react-redux";
import {getAllCategories} from "../redux/actions";
import CategoriesTree from "./CategoriesTree/CategoriesTree";

class App extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return (
            <Router>
                <Header/>
                {this.props.errorGlobal && <ErrorGlobal />}
                <div className="container mt-3 h-100">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="border border-secondary bg-light p-3 h-100">
                                <CategoriesTree />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="border border-secondary bg-light p-3 ml-1 h-100">
                                <Route path="/" render={() => <h3>Welcome to recipes frontend</h3>} exact/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect((state) => ({ errorGlobal: state.errorGlobal}),{getAllCategories})(App)