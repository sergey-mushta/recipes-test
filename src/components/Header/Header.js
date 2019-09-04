import React, { Component } from 'react';

import {Link} from "react-router-dom";

export default class Header extends Component {

/*
<ul className="navbar-nav mr-auto">
<li className="nav-item active">
<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
</li>
    */
    render() {
        return  (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <div className="col-md-12">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manage_categories">Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manage_recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
  
}
