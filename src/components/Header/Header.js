import React, { Component } from 'react';

import {NavLink} from "react-router-dom";

export default class Header extends Component {

    render() {
        return  (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeClassName="active"><i className="fa fa-home"></i> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_categories" activeClassName="active"><i className="fa fa-sitemap"></i> Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_recipes" activeClassName="active"><i className="fa fa-cutlery"></i> Recipes</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
  
}
