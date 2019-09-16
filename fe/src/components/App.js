import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
import ErrorGlobal from "./ErrorGlobal";
import {connect} from "react-redux";
import {getAllCategories} from "../redux/actions";
import CategoriesTree from "./CategoriesTree";
import PageNotFound from "./PageNotFound";
import PageCategory from "./PageCategory";
import PageItem from "./PageItem";
import LoadingSpinner from "./LoadingSpinner";
import Breadcrumbs from "./Breadcrumbs";

import "./App.css";

class App extends Component {

    componentDidMount() {
        this.props.getAllCategories();
    }

    render() {
        return (
            <Router>
                {this.props.errorGlobal && <ErrorGlobal />}
                <div className="container mt-3 h-100">
                    <div className="row">
                        <div className="col-md-4 p-0">
                            <div className="border border-secondary bg-light p-3 h-100">
                                <CategoriesTree />
                            </div>
                        </div>
                        <div className="col-md-8 p-0">
                            <div className="border border-secondary bg-light p-3 ml-1 h-100">
                                {this.props.loading > 0 && <LoadingSpinner/> }
                                <div className={this.props.loading > 0 ? 'd-none' : ''}>
                                    <Switch>
                                        <Route path="/" exact render={(props) => <><Breadcrumbs {...props.match} /><h3>Welcome to recipes frontend</h3></>}/>
                                        <Route path="/category/:_id" component={PageCategory}/>
                                        <Route path="/article/:_id" render={(props) => <PageItem {...props} source="article"/>}/>
                                        <Route path="/recipe/:_id" render={(props) => <PageItem {...props} source="recipe"/>}/>
                                        <Route path="/not_found" component={PageNotFound}/>
                                        <Route path="*" render={() => <Redirect to="/not_found"/>}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default connect((state) => ({ errorGlobal: state.errorGlobal, loading: state.loading}),{getAllCategories})(App)