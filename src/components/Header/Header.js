import React, { Component } from 'react';

import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {
        return  (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manage_categories"><i className="fa fa-sitemap"></i> Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manage_recipes"><i className="fa fa-cutlery"></i> Recipes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
  
}
