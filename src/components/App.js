import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Header";
import ManageCategories from "./ManageCategories";
import ManageRecipes from "./ManageRecipes";

import ModalCommon from "./ModalCommon";
import ErrorGlobal from "./ErrorGlobal";
import {connect} from "react-redux";
import ManageArticles from "./ManageArticles";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                {this.props.errorGlobal && <ErrorGlobal />}
                <div className="container mt-3">
                    <Route path="/" render={() => <h3>Welcome to recipes backend</h3>} exact/>
                    <Route path="/manage_categories/" component={ManageCategories}/>
                    <Route path="/manage_recipes/" component={ManageRecipes}/>
                    <Route path="/manage_articles/" component={ManageArticles}/>
                </div>
                <ModalCommon {...this.props.modalData} />
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({ errorGlobal: state.errorGlobal});

App = connect(mapStateToProps,null)(App);
export default App;