import React, { Component } from 'react';

import {NavLink} from "react-router-dom";

export default class Header extends Component {

    render() {
        const links = [
            {to:'/', exact: true, icon: 'home', text: 'Home'},
        ];

        return  (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <ul className="navbar-nav">
                        { links.map((item) =>  {
                            return (
                                <li className="nav-item" key={'header_url_to_' + item.to }><NavLink className="nav-link" exact={item.exact} to={item.to} activeClassName="active"><i className={'fa fa-'+item.icon}></i> {item.text}</NavLink></li>                            );
                        }) }
                    </ul>
                </div>
            </nav>
        );
    }
  
}
