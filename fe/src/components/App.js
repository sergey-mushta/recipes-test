import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Header";

import ErrorGlobal from "./ErrorGlobal";
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                {this.props.errorGlobal && <ErrorGlobal />}
                <div className="container mt-3">
                    <Route path="/" render={() => <h3>Welcome to recipes frontend</h3>} exact/>
                </div>
            </Router>
        );
    }
}

export default connect((state) => ({ errorGlobal: state.errorGlobal}),null)(App)