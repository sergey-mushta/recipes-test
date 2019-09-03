import React, { Component } from 'react';

import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {
        return  (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <div className="col-md-3">
                    <Link to="/">Recipes backend</Link>
                </div>
                <div className="col-md-9">
                    <ul>
                        <li>
                            <Link to="/manage_categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/manage_recipes">Recipes</Link>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </nav>
        );
    }
  
}
