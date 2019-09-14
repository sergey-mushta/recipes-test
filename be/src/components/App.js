import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';

import Header from "./Header";
import ManageCategories from "./ManageCategories";
import ManageRecipes from "./ManageRecipes";

import ModalCommon from "./ModalCommon";
import ErrorGlobal from "./ErrorGlobal";
import {connect} from "react-redux";
import ManageArticles from "./ManageArticles";
import LoadingSpinner from "./LoadingSpinner";
import PageNotFound from "./PageNotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                {this.props.errorGlobal && <ErrorGlobal />}
                <div className="container mt-3">
                    {this.props.loading > 0 && <LoadingSpinner/> }
                    <div className={this.props.loading > 0 ? 'd-none' : ''}>
                        <Switch>
                            <Route path="/" render={() => <h3>Welcome to recipes backend</h3>} exact/>
                            <Route path="/manage_categories/" component={ManageCategories}/>
                            <Route path="/manage_recipes/" component={ManageRecipes}/>
                            <Route path="/manage_articles/" component={ManageArticles}/>
                            <Route path="/not_found" component={PageNotFound} />
                            <Route path="*" render={() => <Redirect to="/not_found"/>} />
                        </Switch>
                    </div>
                </div>
                <ModalCommon />
            </Router>
        );
    }
}

export default connect((state) => ({ loading: state.loading, errorGlobal: state.errorGlobal}),null)(App)